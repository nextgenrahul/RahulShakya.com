from sqlalchemy.orm import Session
from sqlalchemy import desc, func
from typing import Optional, List
from uuid import UUID

from app.features.blog.models import BlogPost, BlogTag


# ── READ ─────────────────────────────────────────────────────────────────────

def get_all_posts(
    db: Session,
    status: Optional[str] = "published",
    featured: Optional[bool] = None,
    limit: int = 10,
    offset: int = 0,
) -> List[BlogPost]:
    """
    Fetch posts for the listing page.
    - status="published" by default → public users only see published posts
    - status=None → admin sees all posts including drafts
    - featured=True → fetch only the featured post for BlogFeaturedBook
    """
    query = db.query(BlogPost)

    if status:
        query = query.filter(BlogPost.status == status)

    if featured is not None:
        query = query.filter(BlogPost.featured == featured)

    # newest first
    query = query.order_by(desc(BlogPost.published_at))

    return query.offset(offset).limit(limit).all()


def get_total_posts(
    db: Session,
    status: Optional[str] = "published",
) -> int:
    """Count total posts — used for pagination."""
    query = db.query(func.count(BlogPost.id))
    if status:
        query = query.filter(BlogPost.status == status)
    return query.scalar()


def get_post_by_slug(db: Session, slug: str) -> Optional[BlogPost]:
    """
    Fetch a single post by slug for the detail page.
    e.g. /blog/autonomous-agent-architecture
    """
    return db.query(BlogPost).filter(BlogPost.slug == slug).first()


def get_post_by_id(db: Session, post_id: UUID) -> Optional[BlogPost]:
    """Fetch post by UUID — used in admin panel."""
    return db.query(BlogPost).filter(BlogPost.id == post_id).first()


def get_featured_post(db: Session) -> Optional[BlogPost]:
    """
    Returns the single featured post shown in BlogFeaturedBook.
    If multiple posts are marked featured, returns the most recent.
    """
    return (
        db.query(BlogPost)
        .filter(BlogPost.status == "published", BlogPost.featured == True)
        .order_by(desc(BlogPost.published_at))
        .first()
    )


def slug_exists(db: Session, slug: str, exclude_id: Optional[UUID] = None) -> bool:
    """Check if a slug is already taken — prevents duplicate slugs."""
    query = db.query(BlogPost).filter(BlogPost.slug == slug)
    if exclude_id:
        query = query.filter(BlogPost.id != exclude_id)
    return query.first() is not None


# ── CREATE ────────────────────────────────────────────────────────────────────

def create_post(db: Session, data: dict) -> BlogPost:
    """
    Create a new blog post.
    data dict contains all post fields.
    Tags are handled separately after post creation.
    """
    # extract tags before creating post — tags go to BlogTag table
    tags = data.pop("tags", [])

    post = BlogPost(**data)
    db.add(post)
    db.flush()  # flush to get the post.id without committing yet

    # create tag rows linked to this post
    _create_tags(db, post.id, tags)

    db.commit()
    db.refresh(post)
    return post


# ── UPDATE ────────────────────────────────────────────────────────────────────

def update_post(db: Session, post: BlogPost, data: dict) -> BlogPost:
    """Update only the fields that were provided."""
    tags = data.pop("tags", None)

    for field, value in data.items():
        if value is not None:
            setattr(post, field, value)

    # if tags were provided, replace all existing tags
    if tags is not None:
        db.query(BlogTag).filter(BlogTag.post_id == post.id).delete()
        _create_tags(db, post.id, tags)

    db.commit()
    db.refresh(post)
    return post


# ── DELETE ────────────────────────────────────────────────────────────────────

def delete_post(db: Session, post: BlogPost) -> None:
    """
    Delete a post and all its tags.
    Tags are auto-deleted because of cascade="all, delete-orphan" on the relationship.
    """
    db.delete(post)
    db.commit()


# ── HELPERS ───────────────────────────────────────────────────────────────────

def _create_tags(db: Session, post_id: UUID, tag_names: List[str]) -> None:
    """Create BlogTag rows for a post from a list of tag name strings."""
    from app.shared.utils import slugify
    for name in tag_names:
        tag = BlogTag(
            post_id=post_id,
            name=name.strip(),
            slug=slugify(name),
        )
        db.add(tag)