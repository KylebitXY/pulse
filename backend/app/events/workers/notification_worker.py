from app.events.workers.base import BaseWorker


class NotificationWorker(BaseWorker):

    stream_name = "notifications"
    consumer_group = "notifications-group"
    consumer_name = "worker-1"

    async def process(self, message):

        print("Sending notification:", message)