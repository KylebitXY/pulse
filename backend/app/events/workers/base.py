import asyncio
from redis.asyncio import Redis
from app.core.config.settings import get_settings

settings = get_settings()

redis = Redis.from_url(
    settings.redis_url,
    decode_responses=True
)


class BaseWorker:

    stream_name = None
    consumer_group = None
    consumer_name = None

    async def process(self, message):
        raise NotImplementedError

    async def run(self):

        print(f"Worker listening on stream: {self.stream_name}")

        while True:

            messages = await redis.xreadgroup(
                groupname=self.consumer_group,
                consumername=self.consumer_name,
                streams={self.stream_name: ">"},
                count=10,
                block=5000
            )

            if not messages:
                continue

            for stream, events in messages:

                for message_id, payload in events:

                    try:

                        print("Received event:", payload)

                        await self.process(payload)

                        await redis.xack(
                            self.stream_name,
                            self.consumer_group,
                            message_id
                        )

                    except Exception as e:
                        print("Worker error:", e)

            await asyncio.sleep(0.1)