from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from sqlalchemy.exc import SQLAlchemyError

from app.core.config import settings
from app.db.session import check_db_connection
from app.middleware.error_handler import (
    validation_exception_handler,
    sqlalchemy_exception_handler,
    global_exception_handler,
)

# ── Create app ───────────────────────────────────────────────────────────────
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    # Swagger UI only available in development
    # In production set DEBUG=False and docs disappear
    docs_url="/docs" if settings.DEBUG else None,
    redoc_url="/redoc" if settings.DEBUG else None,
)

# ── CORS ─────────────────────────────────────────────────────────────────────
# Without this, your Next.js frontend on port 3000 is blocked by the browser
# from calling this API on port 8000 (cross-origin request blocked)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.CORS_ORIGIN],
    allow_credentials=True,   # needed for cookies (refresh token)
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Error handlers ───────────────────────────────────────────────────────────
app.add_exception_handler(RequestValidationError, validation_exception_handler)
app.add_exception_handler(SQLAlchemyError, sqlalchemy_exception_handler)
app.add_exception_handler(Exception, global_exception_handler)

# ── Startup event ────────────────────────────────────────────────────────────
@app.on_event("startup")
async def startup():
    """Runs once when the server starts — check DB is reachable."""
    if check_db_connection():
        print("✅ Database connected")
    else:
        print("❌ Database connection FAILED — check DATABASE_URL in .env")

# ── Base routes ──────────────────────────────────────────────────────────────
@app.get("/", tags=["root"])
def root():
    return {
        "success": True,
        "message": f"{settings.APP_NAME} is running",
        "version": settings.APP_VERSION,
    }


@app.get("/health", tags=["root"])
def health():
    """
    Health check endpoint.
    Docker and monitoring tools ping this to know if the server is alive.
    """
    db_ok = check_db_connection()
    return {
        "success": True,
        "status": "healthy" if db_ok else "degraded",
        "database": "connected" if db_ok else "disconnected",
        "version": settings.APP_VERSION,
    }


# ── Feature routers ──────────────────────────────────────────────────────────
# Uncomment each one as you build that feature.
# All routes are prefixed with /api/v1 — clean versioning from day one.

# from app.features.auth.router import router as auth_router
# from app.features.projects.router import router as projects_router
# from app.features.blog.router import router as blog_router
# from app.features.services.router import router as services_router
# from app.features.contacts.router import router as contacts_router
# from app.features.case_studies.router import router as case_studies_router
# from app.features.admin.router import router as admin_router

# app.include_router(auth_router,         prefix="/api/v1/auth",          tags=["auth"])
# app.include_router(projects_router,     prefix="/api/v1/projects",      tags=["projects"])
# app.include_router(blog_router,         prefix="/api/v1/blog",          tags=["blog"])
# app.include_router(services_router,     prefix="/api/v1/services",      tags=["services"])
# app.include_router(contacts_router,     prefix="/api/v1/contacts",      tags=["contacts"])
# app.include_router(case_studies_router, prefix="/api/v1/case-studies",  tags=["case-studies"])
# app.include_router(admin_router,        prefix="/api/v1/admin",         tags=["admin"])