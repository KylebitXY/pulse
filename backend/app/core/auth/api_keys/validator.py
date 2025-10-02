async def validate_api_key(session, key: str):
    result = await session.execute(
        "SELECT * FROM api_keys WHERE key=:key AND is_active=true",
        {"key": key}
    )

    return result.fetchone()