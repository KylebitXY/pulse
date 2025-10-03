from redis.asyncio import Redis
from app.core.config.settings import get_settings

settings = get_settings()

redis = Redis.from_url(
    settings.redis_url,
    decode_responses=True
)


class StreamManager:

    async def publish(
        self,
        stream: str,
        payload: dict
    ):
        return await redis.xadd(
            stream,
            payload
        )

    async def create_group(
        self,
        stream: str,
        group: str
    ):
        try:
            await redis.xgroup_create(
                stream,
                group,
                id="0",
                mkstream=True
            )
        except Exception:
            pass