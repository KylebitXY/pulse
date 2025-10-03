from app.events.streams.manager import StreamManager
from app.events.schemas.base import BaseEvent


class EventPublisher:

    def __init__(self):
        self.stream = StreamManager()

    async def publish(
        self,
        stream_name: str,
        event_type: str,
        payload: dict
    ):
        event = BaseEvent.build(
            event_type,
            payload
        )

        return await self.stream.publish(
            stream_name,
            event
        )