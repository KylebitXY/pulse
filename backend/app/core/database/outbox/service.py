from uuid import uuid4
from app.core.database.outbox.model import OutboxEvent


async def publish_event(session, event_type: str, payload: dict):
    event = OutboxEvent(
        id=str(uuid4()),
        event_type=event_type,
        payload=payload,
    )

    session.add(event)