from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


# 🔥 HARD PROJECT ROOT FIX (IMPORTANT)
# backend/app/core/config/settings.py → go up until "pulsemesh"
BASE_DIR = Path(__file__).resolve()

# climb to project root (pulsemesh)
for _ in range(5):
    if (BASE_DIR / ".env").exists():
        break
    BASE_DIR = BASE_DIR.parent


class Settings(BaseSettings):

    model_config = SettingsConfigDict(
        env_file=str(BASE_DIR / ".env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # CORE APP
    APP_NAME: str = "PulseMesh"
    APP_VERSION: str = "1.0.0"

    # POSTGRES
    POSTGRES_HOST: str
    POSTGRES_PORT: int
    POSTGRES_DB: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str

    # REDIS
    REDIS_HOST: str
    REDIS_PORT: int

    # JWT
    JWT_SECRET_KEY: str
    JWT_ALGORITHM: str
    JWT_EXPIRE_MINUTES: int

    DEBUG: bool = True

    @property
    def postgres_url(self):
        return (
            f"postgresql+asyncpg://"
            f"{self.POSTGRES_USER}:"
            f"{self.POSTGRES_PASSWORD}@"
            f"{self.POSTGRES_HOST}:"
            f"{self.POSTGRES_PORT}/"
            f"{self.POSTGRES_DB}"
        )

    @property
    def redis_url(self):
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}"


@lru_cache
def get_settings():
    return Settings()