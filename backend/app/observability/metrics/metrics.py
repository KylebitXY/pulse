from prometheus_client import (
    Counter,
    Histogram,
    Gauge
)

REQUEST_COUNT = Counter(
    "pulsemesh_requests_total",
    "Total API Requests",
    ["method", "endpoint"]
)

REQUEST_LATENCY = Histogram(
    "pulsemesh_request_latency_seconds",
    "Request latency",
    ["endpoint"]
)

ACTIVE_WEBSOCKETS = Gauge(
    "pulsemesh_active_websockets",
    "Active websocket connections"
)

WORKER_TASKS = Counter(
    "pulsemesh_worker_tasks_total",
    "Worker tasks processed",
    ["task_type"]
)