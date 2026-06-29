from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, Session
from typing import Generator
from app.core.config import settings

# ── Engine ───────────────────────────────────────────────────────────────────
# The engine manages the actual connection pool to PostgreSQL.
# pool_pre_ping=True means SQLAlchemy tests each connection before using it
# — prevents "connection already closed" errors after Postgres restarts.
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    # max connections kept open in pool
    pool_size=10,
    # connections allowed beyond pool_size when pool is full
    max_overflow=20,
)

# ── Session factory ──────────────────────────────────────────────────────────
# SessionLocal is a class — calling SessionLocal() gives you one DB session.
# autocommit=False → you manually call db.commit() when you want to save
# autoflush=False  → SQLAlchemy won't auto-sync pending changes before queries
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# ── Dependency ───────────────────────────────────────────────────────────────
def get_db() -> Generator[Session, None, None]:
    """
    FastAPI dependency that provides a database session per request.

    yield → gives the session to the route handler
    finally → always closes the session after the request finishes,
              even if an exception was raised

    Usage in any router:
        @router.get("/projects")
        def list_projects(db: Session = Depends(get_db)):
            return db.query(Project).all()
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ── Health check ─────────────────────────────────────────────────────────────
def check_db_connection() -> bool:
    """
    Used at startup to verify the database is reachable.
    Returns True if connected, False if not.
    """
    try:
        with engine.connect() as conn:
            # "SELECT 1" is the simplest possible query — just tests the connection
            conn.execute(text("SELECT 1"))
        return True
    except Exception:
        return False