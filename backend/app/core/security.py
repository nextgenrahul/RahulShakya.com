from datetime import datetime, timedelta, timezone
from typing import Optional
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.core.config import settings

# ── Password hashing ─────────────────────────────────────────────────────────
# bcrypt is the industry standard — slow by design, harder to brute force
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(plain_password: str) -> str:
    """Turn a plain text password into a bcrypt hash for storing in DB."""
    return pwd_context.hash(plain_password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Check if a plain password matches the stored hash."""
    return pwd_context.verify(plain_password, hashed_password)


# ── JWT tokens ───────────────────────────────────────────────────────────────
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    Create a short-lived JWT access token.
    - Used for authenticating API requests
    - Lives for 30 minutes by default
    """
    to_encode = data.copy()

    # set expiry time
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    # "exp" is a standard JWT claim — libraries check this automatically
    to_encode.update({"exp": expire, "type": "access"})

    return jwt.encode(to_encode, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)


def create_refresh_token(data: dict) -> str:
    """
    Create a long-lived JWT refresh token.
    - Used to get a new access token when it expires
    - Lives for 7 days by default
    - Stored in httpOnly cookie (can't be read by JS — prevents XSS theft)
    """
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(
        days=settings.REFRESH_TOKEN_EXPIRE_DAYS
    )
    to_encode.update({"exp": expire, "type": "refresh"})

    return jwt.encode(
        to_encode, settings.JWT_REFRESH_SECRET, algorithm=settings.JWT_ALGORITHM
    )


def decode_access_token(token: str) -> Optional[dict]:
    """
    Verify and decode a JWT access token.
    Returns the payload dict if valid, None if expired or tampered.
    """
    try:
        payload = jwt.decode(
            token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM]
        )
        # make sure this is actually an access token, not a refresh token
        if payload.get("type") != "access":
            return None
        return payload
    except JWTError:
        return None


def decode_refresh_token(token: str) -> Optional[dict]:
    """Verify and decode a JWT refresh token."""
    try:
        payload = jwt.decode(
            token, settings.JWT_REFRESH_SECRET, algorithms=[settings.JWT_ALGORITHM]
        )
        if payload.get("type") != "refresh":
            return None
        return payload
    except JWTError:
        return None