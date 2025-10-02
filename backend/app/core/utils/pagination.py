from math import ceil


class Paginator:
    def __init__(self, query, page: int, page_size: int):
        self.query = query
        self.page = page
        self.page_size = page_size

    async def paginate(self, session):
        total = (await session.execute(self.query)).rowcount
        pages = ceil(total / self.page_size)

        items = (await session.execute(
            self.query.offset(
                (self.page - 1) * self.page_size
            ).limit(self.page_size)
        )).scalars().all()

        return {
            "items": items,
            "total": total,
            "page": self.page,
            "pages": pages,
        }