from pydantic import BaseModel
from datetime import datetime
from uuid import uuid4


class BaseEvent(BaseModel):
    event_id: str
    event_type: str
    created_at: str

    @classmethod
    def build(cls, event_type: str, data: dict):
        return {
            "event_id": str(uuid4()),
            "event_type": event_type,
            "created_at": datetime.utcnow().isoformat(),
            **data
        }