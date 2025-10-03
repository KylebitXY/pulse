from app.workers.scheduler.scheduler import (
    scheduler
)

from app.workers.queues.queue_manager import (
    QueueManager
)

queue = QueueManager()


async def cleanup_sessions():

    await queue.enqueue(
        "maintenance",
        {
            "task_type": "cleanup_sessions"
        }
    )


scheduler.add_job(
    cleanup_sessions,
    "interval",
    minutes=5
)