import json
from app.core.redis.client import redis_client


class CacheService:
    async def set(self, key: str, value, ttl: int = 60):
        await redis_client.set(
            key,
            json.dumps(value),
            ex=ttl
        )

    async def get(self, key: str):
        data = await redis_client.get(key)
        return json.loads(data) if data else None

    async def delete(self, key: str):
        await redis_client.delete(key)