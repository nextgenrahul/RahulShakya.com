from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from asyncpg import Connection
from jose import JWTError, jwt

from app.core.config import settings
from app.db.session import get_raw_conn  # Updated reference to raw connection yield token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/admin/login")

async def get_admin_user(
    token: str = Depends(oauth2_scheme),
    conn: Connection = Depends(get_raw_conn) # Swapped Session for asyncpg Connection
):
    """
    Asynchronously validates incoming admin JWT tokens 
    against the raw postgresql connection mesh.
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    # Execute a pure parameterized query to check if admin user exists
    admin_user = await conn.fetchrow(
        "SELECT id, username FROM admin_users WHERE username = $1 LIMIT 1;", 
        username
    )
    
    if admin_user is None:
        raise credentials_exception
        
    return dict(admin_user)