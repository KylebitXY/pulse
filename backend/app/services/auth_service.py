from app.core.auth.security.password import (
    hash_password,
    verify_password,
)

from app.core.auth.tokens.jwt import (
    create_access_token,
    create_refresh_token,
)

from app.events.publishers.publisher import (
    EventPublisher,
)


class AuthService:

    def __init__(self, user_repo):
        self.user_repo = user_repo
        self.publisher = EventPublisher()

    async def register(self, session, data):

        user = await self.user_repo.get_by_email(
            session,
            data.email
        )

        if user:
            raise Exception("User already exists")

        new_user = await self.user_repo.create(
            session,
            {
                "email": data.email,
                "username": data.username,
                "hashed_password": hash_password(
                    data.password
                ),
            }
        )

        # IMPORTANT
        await session.commit()

        # 🔥 Publish distributed event
        await self.publisher.publish(
            "notifications",
            "user_registered",
            {
                "email": new_user.email,
                "user_id": str(new_user.id),
            },
        )

        return new_user

    async def login(self, session, data):

        user = await self.user_repo.get_by_email(
            session,
            data.email
        )

        if not user:
            raise Exception("Invalid credentials")

        if not verify_password(
            data.password,
            user.hashed_password,
        ):
            raise Exception("Invalid credentials")

        return {
            "access_token": create_access_token(
                {"sub": str(user.id)}
            ),
            "refresh_token": create_refresh_token(
                {"sub": str(user.id)}
            ),
        }