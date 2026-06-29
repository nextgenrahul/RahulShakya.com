from typing import List, Tuple, Dict, Any
from uuid import UUID
from datetime import datetime, timezone
import asyncpg

from app.features.blog import repository
from app.features.blog.schemas import BlogPostCreate, BlogPostUpdate
from app.shared.exceptions import NotFoundException, ConflictException
from app.shared.utils import slugify

async def get_published_posts(conn: asyncpg.Connection, page: int = 1, per_page: int = 10) -> Tuple[List[Dict[str, Any]], int]:
    offset = (page - 1) * per_page
    posts = await repository.get_all_posts(conn, status="published", limit=per_page, offset=offset)
    total = await repository.get_total_posts(conn, status="published")
    
    for post in posts:
        post["tags"] = await repository.get_tags_for_post(conn, post["id"])
    return posts, total

async def get_featured_post(conn: asyncpg.Connection) -> Dict[str, Any]:
    posts = await repository.get_all_posts(conn, status="published", featured=True, limit=1, offset=0)
    if not posts:
        raise NotFoundException("Featured blog post asset container empty.")
    
    featured_post = posts[0]
    featured_post["tags"] = await repository.get_tags_for_post(conn, featured_post["id"])
    return featured_post

async def get_post_by_slug(conn: asyncpg.Connection, slug: str) -> Dict[str, Any]:
    post = await repository.get_post_by_slug(conn, slug)
    if not post or post["status"] != "published":
        raise NotFoundException("Requested publication chapter missing.")
    post["tags"] = await repository.get_tags_for_post(conn, post["id"])
    return post

async def get_all_posts_admin(conn: asyncpg.Connection, page: int = 1, per_page: int = 20) -> Tuple[List[Dict[str, Any]], int]:
    offset = (page - 1) * per_page
    posts = await repository.get_all_posts(conn, status=None, limit=per_page, offset=offset)
    total = await repository.get_total_posts(conn, status=None)
    for post in posts:
        post["tags"] = await repository.get_tags_for_post(conn, post["id"])
    return posts, total

async def create_post(conn: asyncpg.Connection, payload: BlogPostCreate) -> Dict[str, Any]:
    slug = payload.slug or slugify(payload.title)
    if await repository.slug_exists(conn, slug):
        raise ConflictException(f"System duplicate conflict. Slug '{slug}' is occupied.")

    data = payload.model_dump()
    tags_list = data.pop("tags", [])
    data["slug"] = slug
    data["published_at"] = datetime.now(timezone.utc) if payload.status == "published" else None
    
    if payload.read_time_mins == 0 and payload.content:
        data["read_time_mins"] = max(1, round(len(payload.content.split()) / 200))

    # Execute inside a transaction block to preserve data integrity bounds
    async with conn.transaction():
        post_id = await repository.create_post(conn, data)
        prepared_tags = [{"name": t.strip(), "slug": slugify(t)} for t in tags_list]
        await repository.create_tags(conn, post_id, prepared_tags)

    created_post = await repository.get_post_by_id(conn, post_id)
    created_post["tags"] = await repository.get_tags_for_post(conn, post_id)
    return created_post

async def update_post(conn: asyncpg.Connection, post_id: UUID, payload: BlogPostUpdate) -> Dict[str, Any]:
    current_post = await repository.get_post_by_id(conn, post_id)
    if not current_post:
        raise NotFoundException("Target post record not detected.")

    data = payload.model_dump(exclude_unset=True)
    tags_list = data.pop("tags", None)

    if data.get("status") == "published" and not current_post["published_at"]:
        data["published_at"] = datetime.now(timezone.utc)

    if "content" in data and data["content"]:
        data["read_time_mins"] = max(1, round(len(data["content"].split()) / 200))

    async with conn.transaction():
        if data:
            await repository.update_post(conn, post_id, data)
        if tags_list is not None:
            await repository.delete_tags_for_post(conn, post_id)
            prepared_tags = [{"name": t.strip(), "slug": slugify(t)} for t in tags_list]
            await repository.create_tags(conn, post_id, prepared_tags)

    updated_post = await repository.get_post_by_id(conn, post_id)
    updated_post["tags"] = await repository.get_tags_for_post(conn, post_id)
    return updated_post

async def delete_post(conn: asyncpg.Connection, post_id: UUID):
    current_post = await repository.get_post_by_id(conn, post_id)
    if not current_post:
        raise NotFoundException("Post record target void.")
    await repository.delete_post(conn, post_id)