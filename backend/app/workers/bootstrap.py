from app.workers.registry.registry import (
    WorkerRegistry
)

from app.workers.tasks.maintenance import (
    cleanup_sessions
)

registry = WorkerRegistry()

registry.register(
    "cleanup_sessions",
    cleanup_sessions
)