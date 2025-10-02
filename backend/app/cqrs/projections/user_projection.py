from app.cqrs.readmodels.user_read_model import (
    UserReadModel
)


class UserProjection:

    async def project(
        self,
        session,
        event
    ):

        if event.event_type == "UserRegistered":

            model = UserReadModel(
                user_id=event.payload["user_id"],
                email=event.payload["email"],
                username=event.payload["username"]
            )

            session.add(model)

            await session.flush()