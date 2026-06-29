from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    # ── App ──────────────────────────────────────────────────
    APP_NAME: str = "RahulShakya.com API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False

    # ── Database ─────────────────────────────────────────────
    # Full postgres connection string
    # Format: postgresql://user:password@host:port/dbname
    DATABASE_URL: str

    # ── Auth ─────────────────────────────────────────────────
    JWT_SECRET: str
    JWT_REFRESH_SECRET: str
    # how long access token lives (minutes)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    # how long refresh token lives (days)
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    JWT_ALGORITHM: str = "HS256"

    # ── CORS ─────────────────────────────────────────────────
    # which frontend URLs are allowed to call this API
    CORS_ORIGIN: str = "http://localhost:3000"

    # ── Cloudinary ───────────────────────────────────────────
    CLOUDINARY_CLOUD_NAME: str = ""
    CLOUDINARY_API_KEY: str = ""
    CLOUDINARY_API_SECRET: str = ""

    # ── Email ────────────────────────────────────────────────
    RESEND_API_KEY: str = ""
    EMAIL_FROM: str = "hello@rahulshakya.com"

    # ── Redis ────────────────────────────────────────────────
    REDIS_URL: str = "redis://localhost:6379"
 
    class Config:
        # pydantic reads values from this file automatically
        env_file = ".env"
        # allows extra fields in .env without crashing
        extra = "ignore"


# lru_cache means Settings() is only created ONCE
# every import gets the same instance — no re-reading .env on every call
@lru_cache()
def get_settings() -> Settings:
    return Settings()


# shortcut — import this everywhere instead of calling get_settings() each time
settings = get_settings()