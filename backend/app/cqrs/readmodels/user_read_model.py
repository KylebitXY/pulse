from sqlalchemy import Column, String

from app.core.database.base import Base


class UserReadModel(Base):

    __tablename__ = "user_read_model"

    user_id = Column(
        String,
        primary_key=True
    )

    email = Column(String)
    username = Column(String)