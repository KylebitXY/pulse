from sqlalchemy import Column, String, Boolean
from app.core.database.base import Base


class APIKey(Base):
    __tablename__ = "api_keys"

    id = Column(String, primary_key=True)
    key = Column(String, unique=True, index=True)
    owner = Column(String)
    is_active = Column(Boolean, default=True)