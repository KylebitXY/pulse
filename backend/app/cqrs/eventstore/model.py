from sqlalchemy import Column, String, JSON, DateTime
from datetime import datetime

from app.core.database.base import Base


class EventStore(Base):

    __tablename__ = "event_store"

    event_id = Column(String, primary_key=True)

    aggregate_id = Column(
        String,
        index=True
    )

    aggregate_type = Column(
        String,
        index=True
    )

    event_type = Column(
        String,
        index=True
    )

    payload = Column(JSON)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )