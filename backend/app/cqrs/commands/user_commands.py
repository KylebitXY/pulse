from dataclasses import dataclass


@dataclass
class RegisterUserCommand:
    user_id: str
    email: str
    username: str