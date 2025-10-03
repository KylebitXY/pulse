from app.events.publishers.publisher import EventPublisher


class DeadLetterQueue:

    def __init__(self):
        self.publisher = EventPublisher()

    async def send(
        self,
        original_stream: str,
        payload: dict,
        reason: str
    ):
        payload["dlq_reason"] = reason

        await self.publisher.publish(
            "dead-letter-queue",
            "dead_letter_event",
            payload
        )