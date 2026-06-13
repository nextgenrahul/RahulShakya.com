from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str
    JWT_SECRET: str
    JWT_REFRESH_SECRET: str
    CORS_ORIGIN: str
    CLOUDINARY_CLOUD_NAME: str = ""
    CLOUDINARY_API_KEY: str = ""
    CLOUDINARY_API_SECRET: str = ""
    REDIS_URL: str = ""

    class Config:
        env_file = ".env"


# single shared instance — import this everywhere
settings = Settings()