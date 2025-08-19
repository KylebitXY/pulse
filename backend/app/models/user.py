from sqlalchemy import Column, String, Boolean
from app.core.database.base import Base
from app.models.mixins import UUIDMixin, TimestampMixin, SoftDeleteMixin


class User(Base, UUIDMixin, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "users"

    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    role = Column(String, default="user")
    is_active = Column(Boolean, default=True)