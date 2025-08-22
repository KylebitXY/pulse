import json
from app.core.redis.client import redis_client


class QueueManager:

    async def enqueue(
        self,
        queue_name: str,
        task: dict
    ):
        await redis_client.rpush(
            queue_name,
            json.dumps(task)
        )

    async def dequeue(self, queue_name: str):

        result = await redis_client.blpop(
            queue_name,
            timeout=5
        )

        if not result:
            return None

        _, data = result

        return json.loads(data)