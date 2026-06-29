from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.security import decode_access_token

# HTTPBearer extracts the token from the Authorization: Bearer <token> header
bearer_scheme = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme),
    db: Session = Depends(get_db),
):
    """
    Dependency injected into any route that requires authentication.

    Usage in a router:
        @router.get("/admin/projects")
        def list_projects(user = Depends(get_current_user)):
            ...

    FastAPI calls this before the route handler runs.
    If the token is invalid, it raises 401 and the route never executes.
    """
    # decode the token — returns None if invalid or expired
    payload = decode_access_token(credentials.credentials)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # get the user id from the token payload
    user_id: str = payload.get("sub")
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token missing subject claim",
        )

    # lazy import to avoid circular imports
    from app.features.auth.repository import get_user_by_id
    user = get_user_by_id(db, user_id)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User no longer exists",
        )

    return user


def get_admin_user(current_user=Depends(get_current_user)):
    """
    Stricter dependency — only allows admin role.
    Stack on top of get_current_user.

    Usage:
        @router.delete("/admin/projects/{id}")
        def delete_project(user = Depends(get_admin_user)):
            ...
    """
    if current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required",
        )
    return current_user