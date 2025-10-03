from app.core.redis.client import redis_client


class PresenceService:

    async def set_online(self, user_id: str):
        await redis_client.set(
            f"presence:{user_id}",
            "online",
            ex=60
        )

    async def set_offline(self, user_id: str):
        await redis_client.delete(
            f"presence:{user_id}"
        )

    async def is_online(self, user_id: str):
        return (
            await redis_client.get(
                f"presence:{user_id}"
            )
            is not None
        )