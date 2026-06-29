from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.core.dependencies import get_admin_user
from app.features.blog import service
from app.features.blog.schemas import (
    BlogPostCreate,
    BlogPostUpdate,
    BlogPostResponse,
    BlogPostDetailResponse,
)
from app.shared.responses import success, paginated

router = APIRouter()

# ────────────────────────────────────────────────────────────────────────────
# PUBLIC ROUTES — no auth needed
# Called by your Next.js frontend
# ────────────────────────────────────────────────────────────────────────────

@router.get("/", response_model=None)
def list_posts(
    page: int = Query(default=1, ge=1),
    per_page: int = Query(default=10, ge=1, le=50),
    db: Session = Depends(get_db),
):
    """
    GET /api/v1/blog
    Returns paginated published blog posts for the listing page.
    Your BlogHero and blog grid components call this.
    """
    posts, total = service.get_published_posts(db, page, per_page)
    return paginated(
        data=[BlogPostResponse.model_validate(p) for p in posts],
        total=total,
        page=page,
        per_page=per_page,
    )


@router.get("/featured", response_model=None)
def get_featured(db: Session = Depends(get_db)):
    """
    GET /api/v1/blog/featured
    Returns the single featured post for your BlogFeaturedBook component.
    This is the big hero card at the top of the blog page.
    """
    post = service.get_featured_post(db)
    return success(
        data=BlogPostDetailResponse.model_validate(post),
        message="Featured post retrieved",
    )


@router.get("/{slug}", response_model=None)
def get_post(slug: str, db: Session = Depends(get_db)):
    """
    GET /api/v1/blog/{slug}
    Returns a single published post by slug.
    e.g. /api/v1/blog/autonomous-agent-architecture
    Your single blog post page calls this.
    """
    post = service.get_post_by_slug(db, slug)
    return success(
        data=BlogPostDetailResponse.model_validate(post),
        message="Post retrieved",
    )


# ────────────────────────────────────────────────────────────────────────────
# ADMIN ROUTES — JWT required
# Called by your admin dashboard
# ────────────────────────────────────────────────────────────────────────────

@router.get("/admin/all", response_model=None)
def admin_list_posts(
    page: int = Query(default=1, ge=1),
    per_page: int = Query(default=20, ge=1, le=100),
    db: Session = Depends(get_db),
    _=Depends(get_admin_user),
):
    """
    GET /api/v1/blog/admin/all
    Returns ALL posts including drafts — for admin dashboard.
    """
    posts, total = service.get_all_posts_admin(db, page, per_page)
    return paginated(
        data=[BlogPostResponse.model_validate(p) for p in posts],
        total=total,
        page=page,
        per_page=per_page,
    )


@router.post("/admin", response_model=None, status_code=201)
def create_post(
    payload: BlogPostCreate,
    db: Session = Depends(get_db),
    _=Depends(get_admin_user),
):
    """
    POST /api/v1/blog/admin
    Admin creates a new blog post.
    """
    post = service.create_post(db, payload)
    return success(
        data=BlogPostDetailResponse.model_validate(post),
        message="Blog post created",
    )


@router.patch("/admin/{post_id}", response_model=None)
def update_post(
    post_id: str,
    payload: BlogPostUpdate,
    db: Session = Depends(get_db),
    _=Depends(get_admin_user),
):
    """
    PATCH /api/v1/blog/admin/{post_id}
    Admin updates a post — only provided fields are updated.
    """
    from uuid import UUID
    post = service.update_post(db, UUID(post_id), payload)
    return success(
        data=BlogPostDetailResponse.model_validate(post),
        message="Blog post updated",
    )


@router.delete("/admin/{post_id}", response_model=None)
def delete_post(
    post_id: str,
    db: Session = Depends(get_db),
    _=Depends(get_admin_user),
):
    """
    DELETE /api/v1/blog/admin/{post_id}
    Admin deletes a post and all its tags.
    """
    from uuid import UUID
    service.delete_post(db, UUID(post_id))
    return success(message="Blog post deleted")