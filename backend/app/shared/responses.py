from typing import Any, Optional
from pydantic import BaseModel


class SuccessResponse(BaseModel):
    """
    Every successful API response looks like this:
    {
        "success": true,
        "message": "Project created",
        "data": { ... }
    }
    Consistent shape makes frontend code simpler — always check success, always find data.
    """
    success: bool = True
    message: str = "OK"
    data: Optional[Any] = None


class PaginatedResponse(BaseModel):
    """
    For list endpoints that return many items.
    {
        "success": true,
        "message": "OK",
        "data": [...],
        "total": 42,
        "page": 1,
        "per_page": 10,
        "total_pages": 5
    }
    """
    success: bool = True
    message: str = "OK"
    data: Any
    total: int
    page: int
    per_page: int
    total_pages: int


class ErrorResponse(BaseModel):
    """
    Every error response looks like this:
    {
        "success": false,
        "message": "Project not found"
    }
    """
    success: bool = False
    message: str


# ── Helper functions ─────────────────────────────────────────────────────────
def success(data: Any = None, message: str = "OK") -> dict:
    return {"success": True, "message": message, "data": data}


def paginated(
    data: Any,
    total: int,
    page: int,
    per_page: int,
) -> dict:
    import math
    return {
        "success": True,
        "message": "OK",
        "data": data,
        "total": total,
        "page": page,
        "per_page": per_page,
        "total_pages": math.ceil(total / per_page) if per_page else 1,
    }