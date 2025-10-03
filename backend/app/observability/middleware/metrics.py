import time

from starlette.middleware.base import (
    BaseHTTPMiddleware
)

from app.observability.metrics.metrics import (
    REQUEST_COUNT,
    REQUEST_LATENCY
)


class MetricsMiddleware(BaseHTTPMiddleware):

    async def dispatch(
        self,
        request,
        call_next
    ):

        start = time.time()

        response = await call_next(request)

        duration = time.time() - start

        REQUEST_COUNT.labels(
            request.method,
            request.url.path
        ).inc()

        REQUEST_LATENCY.labels(
            request.url.path
        ).observe(duration)

        return response