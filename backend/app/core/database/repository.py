from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select


class BaseRepository:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def get_by_id(self, model, id_):
        stmt = select(model).where(model.id == id_)
        result = await self.session.execute(stmt)
        return result.scalar_one_or_none()

    async def add(self, entity):
        self.session.add(entity)
        await self.session.flush()
        return entity

    async def delete(self, entity):
        await self.session.delete(entity)