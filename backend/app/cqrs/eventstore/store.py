from uuid import uuid4

from app.cqrs.eventstore.model import (
    EventStore
)


class EventStoreService:

    async def append(
        self,
        session,
        aggregate_id: str,
        aggregate_type: str,
        event_type: str,
        payload: dict
    ):

        event = EventStore(
            event_id=str(uuid4()),
            aggregate_id=aggregate_id,
            aggregate_type=aggregate_type,
            event_type=event_type,
            payload=payload
        )

        session.add(event)

        await session.flush()

        return event