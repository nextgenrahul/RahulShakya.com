from typing import List, Optional, Dict, Any
from uuid import UUID
import asyncpg

async def get_all_posts(
    conn: asyncpg.Connection,
    status: Optional[str] = "published",
    featured: Optional[bool] = None,
    limit: int = 10,
    offset: int = 0
) -> List[Dict[str, Any]]:
    query = "SELECT * FROM blog_posts WHERE 1=1"
    params = []
    param_idx = 1

    if status:
        query += f" AND status = ${param_idx}"
        params.append(status)
        param_idx += 1

    if featured is not None:
        query += f" AND featured = ${param_idx}"
        params.append(featured)
        param_idx += 1

    query += f" ORDER BY published_at DESC NULLS LAST, created_at DESC LIMIT ${param_idx} OFFSET ${param_idx+1}"
    params.extend([limit, offset])

    records = await conn.fetch(query, *params)
    return [dict(r) for r in records]

async def get_total_posts(conn: asyncpg.Connection, status: Optional[str] = "published") -> int:
    if status:
        return await conn.fetchval("SELECT COUNT(*) FROM blog_posts WHERE status = $1", status)
    return await conn.fetchval("SELECT COUNT(*) FROM blog_posts")

async def get_post_by_slug(conn: asyncpg.Connection, slug: str) -> Optional[Dict[str, Any]]:
    record = await conn.fetchrow("SELECT * FROM blog_posts WHERE slug = $1", slug)
    return dict(record) if record else None

async def get_post_by_id(conn: asyncpg.Connection, post_id: UUID) -> Optional[Dict[str, Any]]:
    record = await conn.fetchrow("SELECT * FROM blog_posts WHERE id = $1", post_id)
    return dict(record) if record else None

async def get_tags_for_post(conn: asyncpg.Connection, post_id: UUID) -> List[Dict[str, Any]]:
    records = await conn.fetch("SELECT id, name, slug FROM blog_tags WHERE post_id = $1", post_id)
    return [dict(r) for r in records]

async def slug_exists(conn: asyncpg.Connection, slug: str, exclude_id: Optional[UUID] = None) -> bool:
    if exclude_id:
        val = await conn.fetchval("SELECT id FROM blog_posts WHERE slug = $1 AND id != $2 LIMIT 1", slug, exclude_id)
    else:
        val = await conn.fetchval("SELECT id FROM blog_posts WHERE slug = $1 LIMIT 1", slug)
    return val is not None

async def create_post(conn: asyncpg.Connection, data: dict) -> UUID:
    query = """
        INSERT INTO blog_posts (
            title, slug, content, excerpt, cover_image_url, status, 
            volume_label, featured, read_time_mins, author_name, seo_title, seo_description, published_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING id;
    """
    return await conn.fetchval(
        query, data["title"], data["slug"], data["content"], data.get("excerpt"), data.get("cover_image_url"),
        data["status"], data.get("volume_label"), data["featured"], data["read_time_mins"], data["author_name"],
        data.get("seo_title"), data.get("seo_description"), data.get("published_at")
    )

async def create_tags(conn: asyncpg.Connection, post_id: UUID, tags: List[Dict[str, str]]):
    if not tags:
        return
    values = [(post_id, t["name"], t["slug"]) for t in tags]
    await conn.executemany("INSERT INTO blog_tags (post_id, name, slug) VALUES ($1, $2, $3)", values)

async def update_post(conn: asyncpg.Connection, post_id: UUID, data: dict):
    set_clauses = []
    params = []
    for idx, (field, val) in enumerate(data.items(), start=1):
        set_clauses.append(f"{field} = ${idx}")
        params.append(val)
    
    params.append(post_id)
    query = f"UPDATE blog_posts SET {', '.join(set_clauses)}, updated_at = CURRENT_TIMESTAMP WHERE id = ${len(params)}"
    await conn.execute(query, *params)

async def delete_tags_for_post(conn: asyncpg.Connection, post_id: UUID):
    await conn.execute("DELETE FROM blog_tags WHERE post_id = $1", post_id)

async def delete_post(conn: asyncpg.Connection, post_id: UUID):
    await conn.execute("DELETE FROM blog_posts WHERE id = $1", post_id)