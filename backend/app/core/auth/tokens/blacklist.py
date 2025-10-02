from app.core.redis.client import redis_client


async def blacklist_token(token: str):
    await redis_client.set(f"blacklist:{token}", "1", ex=86400)


async def is_blacklisted(token: str):
    return await redis_client.get(f"blacklist:{token}") is not None