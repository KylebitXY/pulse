from sqlalchemy import select
from app.models.user import User


class UserRepository:

    async def get_by_email(self, session, email: str):
        result = await session.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()

    async def create(self, session, data: dict):
        user = User(**data)
        session.add(user)
        await session.flush()
        return user