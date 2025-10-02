from sqlalchemy import text


async def check_db(session):
    try:
        await session.execute(text("SELECT 1"))
        return True
    except Exception:
        return False