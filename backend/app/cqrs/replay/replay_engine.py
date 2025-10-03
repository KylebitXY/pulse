from sqlalchemy import select

from app.cqrs.eventstore.model import (
    EventStore
)

from app.cqrs.projections.user_projection import (
    UserProjection
)

projection = UserProjection()


class ReplayEngine:

    async def replay(
        self,
        session
    ):

        result = await session.execute(
            select(EventStore).order_by(
                EventStore.created_at
            )
        )

        events = result.scalars().all()

        for event in events:

            await projection.project(
                session,
                event
            )

        await session.commit()