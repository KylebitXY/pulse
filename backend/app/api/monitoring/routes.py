from fastapi import APIRouter
from fastapi.responses import JSONResponse
from random import randint, uniform, choice
from datetime import datetime
import asyncio

router = APIRouter(tags=["Monitoring"])

CHAOS_STATE = {
    "enabled": False,
    "latency": 0,
    "drop_rate": 0,
    "cpu_spike": False,
}

@router.get("/health")
async def health():
    return {
        "status": "healthy",
        "service": "pulsemesh",
        "timestamp": datetime.utcnow().isoformat(),
    }

@router.get("/metrics")
async def metrics():

    return {
        "cpu": randint(20, 95),
        "memory": randint(30, 90),
        "workers": randint(3, 12),
        "events_per_sec": randint(200, 2000),
        "queue_depth": randint(10, 500),
        "latency_ms": randint(10, 300),
    }

@router.get("/redis/queues")
async def redis_queues():

    return {
        "queues": [
            {
                "name": "events",
                "jobs": randint(50, 500),
                "failed": randint(0, 10),
            },
            {
                "name": "emails",
                "jobs": randint(10, 120),
                "failed": randint(0, 5),
            },
            {
                "name": "notifications",
                "jobs": randint(30, 200),
                "failed": randint(0, 8),
            },
        ]
    }

@router.post("/workers/restart")
async def restart_workers():

    await asyncio.sleep(1)

    return {
        "status": "restarted",
        "workers_online": randint(3, 12),
    }

@router.get("/kubernetes/pods")
async def kubernetes_pods():

    pods = []

    for i in range(6):

        pods.append({
            "name": f"worker-pod-{i}",
            "cpu": randint(10, 95),
            "memory": randint(20, 90),
            "status": choice([
                "Running",
                "Pending",
                "CrashLoopBackoff",
            ]),
        })

    return {
        "pods": pods
    }

@router.get("/tracing")
async def distributed_tracing():

    traces = []

    for i in range(15):

        traces.append({
            "trace_id": f"trace-{i}",
            "service": choice([
                "api",
                "worker",
                "scheduler",
                "gateway",
            ]),
            "latency_ms": randint(20, 900),
            "status": choice([
                "ok",
                "slow",
                "failed",
            ]),
        })

    return {
        "traces": traces
    }

@router.get("/alerts")
async def alerts():

    return {
        "alerts": [
            {
                "severity": "critical",
                "message": "Worker queue saturation detected",
            },
            {
                "severity": "warning",
                "message": "Redis latency spike",
            },
            {
                "severity": "info",
                "message": "Autoscaling triggered",
            },
        ]
    }

@router.get("/anomalies")
async def anomalies():

    return {
        "anomalies": [
            {
                "service": "events",
                "score": round(uniform(0.7, 0.99), 2),
                "prediction": "traffic_spike",
            },
            {
                "service": "workers",
                "score": round(uniform(0.7, 0.99), 2),
                "prediction": "memory_leak",
            },
        ]
    }

@router.get("/chaos")
async def chaos_state():
    return CHAOS_STATE

@router.post("/chaos/enable")
async def enable_chaos():

    CHAOS_STATE["enabled"] = True
    CHAOS_STATE["latency"] = randint(100, 1200)
    CHAOS_STATE["drop_rate"] = randint(1, 40)
    CHAOS_STATE["cpu_spike"] = True

    return {
        "message": "Chaos engineering mode enabled",
        "state": CHAOS_STATE,
    }

@router.post("/chaos/disable")
async def disable_chaos():

    CHAOS_STATE["enabled"] = False
    CHAOS_STATE["latency"] = 0
    CHAOS_STATE["drop_rate"] = 0
    CHAOS_STATE["cpu_spike"] = False

    return {
        "message": "Chaos engineering mode disabled",
        "state": CHAOS_STATE,
    }