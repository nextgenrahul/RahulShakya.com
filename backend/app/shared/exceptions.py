from fastapi import HTTPException, status


class NotFoundException(HTTPException):
    """Resource not found — maps to HTTP 404."""
    def __init__(self, resource: str = "Resource"):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"{resource} not found",
        )


class UnauthorizedException(HTTPException):
    """Not logged in — maps to HTTP 401."""
    def __init__(self, detail: str = "Not authenticated"):
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=detail,
            headers={"WWW-Authenticate": "Bearer"},
        )


class ForbiddenException(HTTPException):
    """Logged in but not allowed — maps to HTTP 403."""
    def __init__(self, detail: str = "Access forbidden"):
        super().__init__(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=detail,
        )


class BadRequestException(HTTPException):
    """Invalid input — maps to HTTP 400."""
    def __init__(self, detail: str = "Bad request"):
        super().__init__(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=detail,
        )


class ConflictException(HTTPException):
    """Resource already exists — maps to HTTP 409."""
    def __init__(self, resource: str = "Resource"):
        super().__init__(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"{resource} already exists",
        )