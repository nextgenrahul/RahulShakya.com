from fastapi import APIRouter, Depends, Query, status
from asyncpg import Connection
from uuid import UUID

from app.db.session import get_raw_conn
from app.core.dependencies import get_admin_user
from app.features.blog import service
from app.features.blog.schemas import BlogPostCreate, BlogPostUpdate, BlogPostResponse

router = APIRouter()

@router.get("/", response_model=None)
async def list_posts(
    page: int = Query(default=1, ge=1),
    per_page: int = Query(default=10, ge=1, le=50),
    conn: Connection = Depends(get_raw_conn),
):
    posts, total = await service.get_published_posts(conn, page, per_page)
    
    return {"success": True, "data": posts, "total": total, "page": page, "per_page": per_page}

@router.get("/featured", response_model=None)
async def get_featured(conn: Connection = Depends(get_raw_conn)):
    post = await service.get_featured_post(conn)
    return {"success": True, "data": post}

@router.get("/{slug}", response_model=None)
async def get_post(slug: str, conn: Connection = Depends(get_raw_conn)):
    post = await service.get_post_by_slug(conn, slug)
    return {"success": True, "data": post}

@router.get("/admin/all", response_model=None)
async def admin_list_posts(
    page: int = Query(default=1, ge=1),
    per_page: int = Query(default=20, ge=1, le=100),
    conn: Connection = Depends(get_raw_conn),
    _=Depends(get_admin_user),
):
    posts, total = await service.get_all_posts_admin(conn, page, per_page)
    return {"success": True, "data": posts, "total": total, "page": page, "per_page": per_page}

@router.post("/admin", response_model=None, status_code=status.HTTP_201_CREATED)
async def create_post(
    payload: BlogPostCreate,
    conn: Connection = Depends(get_raw_conn),
    _=Depends(get_admin_user),
):
    post = await service.create_post(conn, payload)
    return {"success": True, "data": post}

@router.patch("/admin/{post_id}", response_model=None)
async def update_post(
    post_id: str,
    payload: BlogPostUpdate,
    conn: Connection = Depends(get_raw_conn),
    _=Depends(get_admin_user),
):
    post = await service.update_post(conn, UUID(post_id), payload)
    return {"success": True, "data": post}

@router.delete("/admin/{post_id}", response_model=None)
async def delete_post(
    post_id: str,
    conn: Connection = Depends(get_raw_conn),
    _=Depends(get_admin_user),
):
    await service.delete_post(conn, UUID(post_id))
    return {"success": True, "message": "Publication chapter removed permanently from engine data nodes."}