import uvicorn
from app.core.config import settings

if __name__ == "__main__":
    uvicorn.run(
        # "app.main:app" means: file app/main.py, variable named app
        "app.main:app",
        host="0.0.0.0",   # listen on all network interfaces (needed for Docker)
        port=8000,
        # reload=True watches for file changes and restarts automatically
        # only in development — never in production
        reload=settings.DEBUG,
        log_level="info",
    )