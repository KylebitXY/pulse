import json
from app.core.redis.client import redis_client


class PriorityQueue:

    async def enqueue(
        self,
        queue: str,
        task: dict,
        priority: int = 5
    ):
        await redis_client.zadd(
            queue,
            {
                json.dumps(task): priority
            }
        )

    async def dequeue(self, queue: str):

        tasks = await redis_client.zrange(
            queue,
            0,
            0
        )

        if not tasks:
            return None

        task = tasks[0]

        await redis_client.zrem(queue, task)

        return json.loads(task)