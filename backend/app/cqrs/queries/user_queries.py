from sqlalchemy import select

from app.cqrs.readmodels.user_read_model import (
    UserReadModel
)


class UserQueries:

    async def get_user(
        self,
        session,
        user_id: str
    ):

        result = await session.execute(
            select(UserReadModel).where(
                UserReadModel.user_id == user_id
            )
        )

        return result.scalar_one_or_none()