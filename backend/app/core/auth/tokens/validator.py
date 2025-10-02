from jose import jwt, JWTError
from app.core.config.settings import get_settings

settings = get_settings()


def decode_token(token: str):
    try:
        return jwt.decode(
            token,
            settings.JWT_SECRET_KEY,
            algorithms=[settings.JWT_ALGORITHM]
        )
    except JWTError:
        return None