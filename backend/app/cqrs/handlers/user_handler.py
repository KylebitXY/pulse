from app.cqrs.eventstore.store import (
    EventStoreService
)

from app.cqrs.events.user_events import (
    UserRegisteredEvent
)

store = EventStoreService()


class UserCommandHandler:

    async def register_user(
        self,
        session,
        command
    ):

        event = UserRegisteredEvent(
            user_id=command.user_id,
            email=command.email,
            username=command.username
        )

        await store.append(
            session,
            aggregate_id=command.user_id,
            aggregate_type="user",
            event_type="UserRegistered",
            payload=event.__dict__
        )

        return event