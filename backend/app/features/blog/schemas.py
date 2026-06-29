from pydantic import BaseModel, field_validator
from typing import Optional, List
from datetime import datetime
from uuid import UUID


# ── Tag schemas ──────────────────────────────────────────────────────────────
class TagResponse(BaseModel):
    id:   UUID
    name: str
    slug: str

    class Config:
        from_attributes = True


# ── Blog post schemas ─────────────────────────────────────────────────────────

class BlogPostCreate(BaseModel):
    """Used when admin creates a new post."""
    title:           str
    content:         str
    excerpt:         Optional[str]   = None
    cover_image_url: Optional[str]   = None
    status:          str             = "draft"
    volume_label:    Optional[str]   = None
    featured:        bool            = False
    read_time_mins:  int             = 0
    author_name:     str             = "Rahul Shakya"
    seo_title:       Optional[str]   = None
    seo_description: Optional[str]   = None
    tags:            List[str]       = []
    # slug is auto-generated from title if not provided
    slug:            Optional[str]   = None

    @field_validator("status")
    @classmethod
    def status_must_be_valid(cls, v):
        if v not in ["draft", "published"]:
            raise ValueError("status must be 'draft' or 'published'")
        return v


class BlogPostUpdate(BaseModel):
    """Used when admin edits a post — all fields optional."""
    title:           Optional[str]   = None
    content:         Optional[str]   = None
    excerpt:         Optional[str]   = None
    cover_image_url: Optional[str]   = None
    status:          Optional[str]   = None
    volume_label:    Optional[str]   = None
    featured:        Optional[bool]  = None
    read_time_mins:  Optional[int]   = None
    author_name:     Optional[str]   = None
    seo_title:       Optional[str]   = None
    seo_description: Optional[str]   = None
    tags:            Optional[List[str]] = None


class BlogPostResponse(BaseModel):
    """
    Returned to frontend for listing and detail pages.
    Matches what your BlogFeaturedBook and BlogHero components need.
    """
    id:              UUID
    title:           str
    slug:            str
    excerpt:         Optional[str]
    cover_image_url: Optional[str]
    status:          str
    volume_label:    Optional[str]
    featured:        bool
    read_time_mins:  int
    author_name:     Optional[str]
    seo_title:       Optional[str]
    seo_description: Optional[str]
    published_at:    Optional[datetime]
    created_at:      datetime
    tags:            List[TagResponse] = []

    class Config:
        from_attributes = True


class BlogPostDetailResponse(BlogPostResponse):
    """
    Full post — includes content body.
    Only sent on single post page, not listing.
    Keeps listing API responses small and fast.
    """
    content: str

    class Config:
        from_attributes = True