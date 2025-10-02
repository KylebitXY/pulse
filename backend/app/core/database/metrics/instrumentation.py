import time
from app.core.database.metrics.db_metrics import (
    DB_QUERY_TIME,
    DB_QUERY_COUNT,
)


def instrumented_query(func):
    async def wrapper(*args, **kwargs):
        start = time.time()

        result = await func(*args, **kwargs)

        duration = time.time() - start
        DB_QUERY_TIME.observe(duration)
        DB_QUERY_COUNT.inc()

        return result

    return wrapper