from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.core.logging.logger import logger
from app.core.redis.client import redis_client


@asynccontextmanager
async def lifespan(app: FastAPI):

    logger.info("pulsemesh_starting")

    await redis_client.ping()

    logger.info("redis_connected")

    yield

    logger.info("pulsemesh_shutting_down")

    await redis_client.close()