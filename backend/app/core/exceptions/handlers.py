from fastapi import Request
from fastapi.responses import JSONResponse

from app.core.exceptions.base import PulseMeshException


async def pulsemesh_exception_handler(
    request: Request,
    exc: PulseMeshException,
):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "error": exc.message,
        },
    )