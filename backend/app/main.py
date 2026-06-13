from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from app.core.config import settings

app = FastAPI(title="RahulShakya.com API", version="1.0.0")

# --- CORS ---
# Without this, your Next.js frontend (localhost:3000) can't call
# this API (localhost:8000) — browsers block cross-origin requests by default.
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[settings.CORS_ORIGIN],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# @app.get("/")
# def root():
#     return {"status": "ok", "message": "RahulShakya.com API is running"}


@app.get("/health")
def health_check():
    return {"status": "healthy"} 


# --- Feature routers ---
# Each feature exposes its own router; we register them here.
# Uncomment as you build each one:

# from app.features.auth.router import router as auth_router
# from app.features.projects.router import router as projects_router
# from app.features.blog.router import router as blog_router

# app.include_router(auth_router, prefix="/api/v1/auth", tags=["auth"])
# app.include_router(projects_router, prefix="/api/v1/projects", tags=["projects"])
# app.include_router(blog_router, prefix="/api/v1/blog", tags=["blog"])