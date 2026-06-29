from fastapi import Request, status
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from sqlalchemy.exc import SQLAlchemyError
import logging

logger = logging.getLogger(__name__)


async def validation_exception_handler(request: Request, exc: RequestValidationError):
    """
    Handles Pydantic validation errors — when request body doesn't match schema.
    Converts FastAPI's default verbose error into a clean JSON shape.

    Default FastAPI error is hard to read on the frontend.
    This turns it into: {"success": false, "message": "...", "errors": [...]}
    """
    errors = []
    for error in exc.errors():
        # "loc" is the field path e.g. ["body", "title"]
        field = " → ".join(str(loc) for loc in error["loc"] if loc != "body")
        errors.append({"field": field, "message": error["msg"]})

    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "success": False,
            "message": "Validation failed",
            "errors": errors,
        },
    )


async def sqlalchemy_exception_handler(request: Request, exc: SQLAlchemyError):
    """
    Catches any unhandled database errors.
    Logs the full error server-side, returns a safe message to the client.
    Never expose raw DB errors to the client — they reveal your schema.
    """
    logger.error(f"Database error on {request.url}: {exc}")
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "message": "A database error occurred. Please try again later.",
        },
    )


async def global_exception_handler(request: Request, exc: Exception):
    """
    Catches anything else that wasn't handled.
    Last line of defense — prevents raw Python tracebacks reaching the client.
    """
    logger.error(f"Unhandled error on {request.url}: {exc}", exc_info=True)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "message": "An unexpected error occurred. Please try again later.",
        },
    )