from fastapi import Request, HTTPException
from app.core.auth.tokens.validator import decode_token


class AuthMiddleware:

    async def __call__(self, request: Request, call_next):

        auth = request.headers.get("Authorization")

        if not auth:
            return await call_next(request)

        token = auth.replace("Bearer ", "")
        payload = decode_token(token)

        if not payload:
            raise HTTPException(status_code=401, detail="Invalid token")

        request.state.user = payload

        return await call_next(request)