from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
import asyncpg

from app.core.config import settings
from app.db.session import db_pool  # Points directly to our active asyncpg wrapper
from app.middleware.error_handler import (
    validation_exception_handler,
    asyncpg_exception_handler,  # Updated to catch raw PostgreSQL anomalies
    global_exception_handler,
)

# Feature Router Registrations
from app.features.blog.router import router as blog_router
# from app.features.contacts.router import router as contacts_router
# from app.features.services.router import router as services_router


# ── Create App Instance ───────────────────────────────────────────────────────
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    # Swagger API Docs available strictly in development environments
    docs_url="/docs" if settings.DEBUG else None,
    redoc_url="/redoc" if settings.DEBUG else None,
)

# ── CORS Configuration ────────────────────────────────────────────────────────
# Prevents Next.js port 3000 requests from getting dropped by cross-origin security guards
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.CORS_ORIGIN],
    allow_credentials=True,   # Required to safely transit cookie-based session parameters
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Error Interception Handlers ────────────────────────────────────────────────
app.add_exception_handler(RequestValidationError, validation_exception_handler)
app.add_exception_handler(asyncpg.PostgresError, asyncpg_exception_handler) # Pure SQL Guard
app.add_exception_handler(Exception, global_exception_handler)

# ── Lifespan Startup Logic ────────────────────────────────────────────────────
@app.on_event("startup")
async def startup():
    """Fires exactly once on boot — instantiates persistent pool connections async."""
    try:
        await db_pool.connect()
        # Verify connection health by running a raw metadata check row query
        async with db_pool.pool.acquire() as conn:
            await conn.execute("SELECT 1;")
        print("✅ Database connection pool active // asyncpg initialized.")
    except Exception as e:
        print(f"❌ Database connection pool initialization FAILED: {e}")

@app.on_event("shutdown")
async def shutdown():
    """Fires on server exit — teardown active pool threads to eliminate leaking handles."""
    await db_pool.disconnect()
    print("💤 Database connection pool closed down cleanly.")

# ── Structural Base System Routes ─────────────────────────────────────────────
@app.get("/", tags=["root"])
def root():
    return {
        "success": True,
        "message": f"{settings.APP_NAME} core engine is running.",
        "version": settings.APP_VERSION,
    }

@app.get("/health", tags=["root"])
async def health():
    """
    Asynchronous health indicator.
    Monitors, Docker, and health checks read this block to confirm runtime status.
    """
    db_ok = False
    try:
        async with db_pool.pool.acquire() as conn:
            await conn.execute("SELECT 1;")
        db_ok = True
    except Exception:
        pass

    return {
        "success": True,
        "status": "healthy" if db_ok else "degraded",
        "database": "connected" if db_ok else "disconnected",
        "version": settings.APP_VERSION, 
    }


# ── Studio Feature Routers ────────────────────────────────────────────────────
# Appends all localized modular functional segments strictly under /api/v1 versioning
app.include_router(blog_router, prefix="/api/v1/blog", tags=["blog"])
# app.include_router(contacts_router, prefix="/api/v1/contacts", tags=["contacts"])
# app.include_router(services_router, prefix="/api/v1/services", tags=["services"])