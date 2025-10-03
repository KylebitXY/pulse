from app.workers.queues.queue_manager import QueueManager

queue = QueueManager()


class RetryHandler:

    async def retry(
        self,
        queue_name: str,
        task: dict,
        max_retries: int = 3
    ):

        retries = task.get("retry_count", 0)

        if retries >= max_retries:

            await queue.enqueue(
                "dead_letter_queue",
                task
            )

            return

        task["retry_count"] = retries + 1

        await queue.enqueue(
            queue_name,
            task
        )