import asyncio

from app.events.streams.manager import StreamManager
from app.events.workers.notification_worker import (
    NotificationWorker
)


async def main():

    stream = StreamManager()

    await stream.create_group(
        "notifications",
        "notifications-group"
    )

    worker = NotificationWorker()

    await worker.run()


if __name__ == "__main__":
    asyncio.run(main())