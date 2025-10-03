from dataclasses import dataclass, field
from datetime import datetime
from uuid import uuid4


@dataclass
class Task:

    task_id: str = field(default_factory=lambda: str(uuid4()))
    task_type: str = ""
    payload: dict = field(default_factory=dict)

    created_at: str = field(
        default_factory=lambda: datetime.utcnow().isoformat()
    )

    retry_count: int = 0
    priority: int = 5