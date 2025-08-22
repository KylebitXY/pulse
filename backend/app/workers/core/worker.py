import asyncio

from app.workers.queues.queue_manager import QueueManager
from app.workers.registry.registry import WorkerRegistry
from app.workers.retry.retry_handler import RetryHandler
from app.observability.metrics.metrics import (
    WORKER_TASKS
)
queue = QueueManager()
retry_handler = RetryHandler()

WORKER_TASKS.labels(
    task["task_type"]
).inc()
class Worker:

    def __init__(
        self,
        queue_name: str,
        registry: WorkerRegistry
    ):
        self.queue_name = queue_name
        self.registry = registry

    async def run(self):

        while True:

            task = await queue.dequeue(
                self.queue_name
            )

            if not task:
                continue

            handler = self.registry.get(
                task["task_type"]
            )

            if not handler:
                continue

            try:

                await handler(task)

            except Exception as e:

                print("Worker failure:", e)

                await retry_handler.retry(
                    self.queue_name,
                    task
                )

            await asyncio.sleep(0.1)