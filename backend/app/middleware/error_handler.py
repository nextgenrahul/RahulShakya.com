from fastapi import Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
import asyncpg

async def validation_exception_handler(request: Request, exc: RequestValidationError):
    """Intercepts and models invalid incoming Pydantic fields format errors."""
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={
            "success": False,
            "error": "VAL_ERROR",
            "details": exc.errors()
        }
    )

async def asyncpg_exception_handler(request: Request, exc: asyncpg.PostgresError):
    """
    Intercepts raw PostgreSQL/asyncpg runtime anomalies.
    Replaces old SQLAlchemyException handlers cleanly.
    """
    print(f"🚨 RAW_SQL_EXCEPTION TRACE: {exc}")
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "error": "DATABASE_TRANSACTION_FAULT",
            "message": "A hardware engine error occurred on our storage node cluster data layers."
        }
    )

async def global_exception_handler(request: Request, exc: Exception):
    """Ultimate global system catch-all container boundary."""
    print(f"💥 UNHANDLED_CRASH_EXCEPTION TRACE: {exc}")
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={ 
            "success": False,
            "error": "INTERNAL_SERVER_FAULT",
            "message": "An unhandled execution trace sequence anomalous spike occurred."
        }
    ) 