import asyncio

from app.workers.bootstrap import registry
from app.workers.core.worker import Worker

worker = Worker(
    "maintenance",
    registry
)


async def main():

    await worker.run()


if __name__ == "__main__":
    asyncio.run(main())