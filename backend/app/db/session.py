from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# engine = the actual connection pool to Postgres
engine = create_engine(settings.DATABASE_URL)

# SessionLocal = factory that creates new DB sessions per request
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    """
    Dependency — FastAPI calls this for every request that needs DB access.
    Yields a session, then closes it after the request finishes.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()