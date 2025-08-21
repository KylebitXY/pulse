from fastapi import APIRouter, Depends

from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
)

from app.services.auth_service import AuthService
from app.repositories.user_repository import UserRepository
from app.core.database.session import get_session

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.post("/register")
async def register(
    data: RegisterRequest,
    session=Depends(get_session)
):
    service = AuthService(UserRepository())

    user = await service.register(
        session,
        data
    )

    return {
        "id": str(user.id),
        "email": user.email
    }


@router.post("/login")
async def login(
    data: LoginRequest,
    session=Depends(get_session)
):
    service = AuthService(UserRepository())

    return await service.login(
        session,
        data
    )