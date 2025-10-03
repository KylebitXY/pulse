import asyncio

from app.workers.scheduler.scheduler import (
    start_scheduler
)

from app.workers.scheduler.jobs import *

async def main():

    start_scheduler()

    while True:
        await asyncio.sleep(60)


if __name__ == "__main__":
    asyncio.run(main())