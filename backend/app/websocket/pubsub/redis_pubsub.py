import asyncio
from app.core.redis.client import redis_client


class RedisPubSub:

    def __init__(self):
        self.pubsub = redis_client.pubsub()

    async def publish(self, channel: str, message: dict):
        await redis_client.publish(channel, str(message))

    async def subscribe(self, channel: str):
        await self.pubsub.subscribe(channel)

        while True:
            message = await self.pubsub.get_message(
                ignore_subscribe_messages=True,
                timeout=1
            )

            if message:
                yield message