from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.websocket.gateway.ws_gateway import websocket_endpoint
from app.observability.middleware.metrics import (
    MetricsMiddleware
)

from app.observability.middleware.correlation import (
    CorrelationMiddleware
)

from app.observability.metrics.exporter import (
    metrics_endpoint
)

from app.observability.tracing.tracer import (
    setup_tracing
)

from app.observability.logging.logger import (
    setup_logging
)
from prometheus_fastapi_instrumentator import (
    Instrumentator,
)
from app.api.monitoring.routes import router as monitoring_router
from app.api.router import api_router
from app.core.config.settings import get_settings

from app.core.exceptions.base import (
    PulseMeshException,
)

from app.core.exceptions.handlers import (
    pulsemesh_exception_handler,
)

from app.core.lifespan.startup import lifespan

from app.core.logging.logger import (
    configure_logging,
)

from app.core.middleware.request_context import (
    RequestContextMiddleware,
)

settings = get_settings()

configure_logging()


def create_application() -> FastAPI:

    app = FastAPI(
        title=settings.APP_NAME,
        version=settings.APP_VERSION,
        debug=settings.DEBUG,
        lifespan=lifespan,
        docs_url="/docs",
        redoc_url="/redoc",
    )
    

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.add_middleware(
        RequestContextMiddleware
    )

    app.add_exception_handler(
        PulseMeshException,
        pulsemesh_exception_handler,
    )

    app.include_router(
        api_router,
        prefix="/api/v1",
    )
    app.include_router(monitoring_router)
    app.add_api_websocket_route(
    "/ws/{user_id}",
    websocket_endpoint
)
    setup_logging()

    setup_tracing(app)

    app.add_middleware(
        MetricsMiddleware
    )

    app.add_middleware(
        CorrelationMiddleware
    )

    app.add_api_route(
        "/metrics",
        metrics_endpoint
    )
    @app.get("/health")
    async def health():
        return {
            "status": "healthy"
        }

    Instrumentator().instrument(app).expose(app)

    return app


app = create_application()