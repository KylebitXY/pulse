from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from app.core.config.settings import get_settings

settings = get_settings()

engine = create_async_engine(
    settings.postgres_url,
    pool_size=20,
    max_overflow=10,
    echo=settings.DEBUG,
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)
class DatabaseSessionManager:
    def __init__(self, write_engine, read_engine=None):
        self.write_engine = write_engine
        self.read_engine = read_engine or write_engine

    async def get_write(self):
        return AsyncSession(self.write_engine)

    async def get_read(self):
        return AsyncSession(self.read_engine)

async def get_session():
    async with AsyncSessionLocal() as session:
        yield session