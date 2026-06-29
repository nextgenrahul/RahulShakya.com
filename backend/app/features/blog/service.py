from sqlalchemy.orm import Session
from datetime import datetime, timezone
from typing import Optional
from uuid import UUID

from app.features.blog import repository
from app.features.blog.schemas import BlogPostCreate, BlogPostUpdate
from app.shared.exceptions import NotFoundException, ConflictException
from app.shared.utils import slugify


def get_published_posts(
    db: Session,
    page: int = 1,
    per_page: int = 10,
):
    """
    Public endpoint — listing page.
    Returns paginated published posts + total count for frontend pagination.
    """
    from app.shared.utils import paginate
    pagination = paginate(page, per_page)

    posts = repository.get_all_posts(
        db,
        status="published",
        limit=pagination["limit"],
        offset=pagination["offset"],
    )
    total = repository.get_total_posts(db, status="published")

    return posts, total


def get_featured_post(db: Session):
    """
    Returns the featured post for BlogFeaturedBook component.
    Raises 404 if no featured post is published yet.
    """
    post = repository.get_featured_post(db)
    if not post:
        raise NotFoundException("Featured post")
    return post


def get_post_by_slug(db: Session, slug: str):
    """
    Single post detail page — /blog/{slug}
    Only returns published posts to public users.
    """
    post = repository.get_post_by_slug(db, slug)
    if not post or post.status != "published":
        raise NotFoundException("Blog post")
    return post


def get_all_posts_admin(
    db: Session,
    page: int = 1,
    per_page: int = 20,
):
    """
    Admin panel — returns all posts including drafts.
    status=None means no status filter.
    """
    from app.shared.utils import paginate
    pagination = paginate(page, per_page)

    posts = repository.get_all_posts(
        db,
        status=None,
        limit=pagination["limit"],
        offset=pagination["offset"],
    )
    total = repository.get_total_posts(db, status=None)
    return posts, total


def create_post(db: Session, payload: BlogPostCreate):
    """
    Admin creates a new blog post.
    - Auto-generates slug from title if not provided
    - Sets published_at when status is "published"
    - Checks slug is not already taken
    """
    # generate slug from title if not provided
    slug = payload.slug or slugify(payload.title)

    # check slug uniqueness
    if repository.slug_exists(db, slug):
        raise ConflictException(f"Slug '{slug}' already exists")

    data = payload.model_dump()
    data["slug"] = slug

    # set published_at timestamp when publishing
    if payload.status == "published":
        data["published_at"] = datetime.now(timezone.utc)

    # calculate read time if not provided
    if payload.read_time_mins == 0 and payload.content:
        data["read_time_mins"] = _estimate_read_time(payload.content)

    return repository.create_post(db, data)


def update_post(db: Session, post_id: UUID, payload: BlogPostUpdate):
    """
    Admin updates a post.
    - If status changes to "published" and published_at is not set, set it now
    """
    post = repository.get_post_by_id(db, post_id)
    if not post:
        raise NotFoundException("Blog post")

    data = payload.model_dump(exclude_unset=True)

    # auto-set published_at when first publishing
    if data.get("status") == "published" and not post.published_at:
        data["published_at"] = datetime.now(timezone.utc)

    # recalculate read time if content changed
    if "content" in data and data["content"]:
        data["read_time_mins"] = _estimate_read_time(data["content"])

    return repository.update_post(db, post, data)


def delete_post(db: Session, post_id: UUID):
    """Admin deletes a post."""
    post = repository.get_post_by_id(db, post_id)
    if not post:
        raise NotFoundException("Blog post")
    repository.delete_post(db, post)


# ── Helpers ───────────────────────────────────────────────────────────────────

def _estimate_read_time(content: str) -> int:
    """
    Estimate reading time based on word count.
    Average reading speed is ~200 words per minute.
    Minimum 1 minute.
    """
    word_count = len(content.split())
    minutes = max(1, round(word_count / 200))
    return minutes