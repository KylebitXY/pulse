from celery import Celery

celery = Celery(
    "pulsemesh",
    broker="redis://redis:6379/0",
    backend="redis://redis:6379/0"
)

@celery.task
def process_event(data):
    return {
        "processed": True,
        "data": data
    }