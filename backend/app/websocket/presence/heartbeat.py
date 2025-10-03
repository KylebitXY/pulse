import asyncio
from app.core.redis.client import redis_client


class Heartbeat:

    def __init__(self, interval=30):
        self.interval = interval

    async def start(self, user_id: str):

        while True:
            await redis_client.set(
                f"presence:{user_id}",
                "online",
                ex=60
            )

            await asyncio.sleep(self.interval)