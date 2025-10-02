from sqlalchemy import Column, String, JSON, DateTime
from datetime import datetime
from app.core.database.base import Base


class OutboxEvent(Base):
    __tablename__ = "outbox_events"

    id = Column(String, primary_key=True)
    event_type = Column(String, index=True)
    payload = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)
    processed_at = Column(DateTime, nullable=True)