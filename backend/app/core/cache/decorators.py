import json
from functools import wraps
from app.core.redis.cache import CacheService

cache = CacheService()


def cached(ttl=60, prefix="cache"):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            key = f"{prefix}:{func.__name__}:{str(args)}:{str(kwargs)}"

            cached_value = await cache.get(key)
            if cached_value:
                return cached_value

            result = await func(*args, **kwargs)
            await cache.set(key, result, ttl=ttl)

            return result

        return wrapper

    return decorator