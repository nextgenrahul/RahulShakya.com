from pydantic import BaseModel, field_validator
from typing import Optional, List
from datetime import datetime
from uuid import UUID

class TagResponse(BaseModel):
    id: UUID
    name: str
    slug: str

class BlogPostCreate(BaseModel):
    title: str
    content: str
    excerpt: Optional[str] = None
    cover_image_url: Optional[str] = None
    status: str = "draft"
    volume_label: Optional[str] = None
    featured: bool = False
    read_time_mins: int = 0
    author_name: str = "Rahul Shakya"
    seo_title: Optional[str] = None
    seo_description: Optional[str] = None
    tags: List[str] = []
    slug: Optional[str] = None

    @field_validator("status")
    @classmethod
    def status_must_be_valid(cls, v):
        if v not in ["draft", "published"]:
            raise ValueError("Status variable bounds must be 'draft' or 'published'")
        return v

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    cover_image_url: Optional[str] = None
    status: Optional[str] = None
    volume_label: Optional[str] = None
    featured: Optional[bool] = None
    read_time_mins: Optional[int] = None
    author_name: Optional[str] = None
    seo_title: Optional[str] = None
    seo_description: Optional[str] = None
    tags: Optional[List[str]] = None

class BlogPostResponse(BaseModel):
    id: UUID
    title: str
    slug: str
    excerpt: Optional[str]
    cover_image_url: Optional[str]
    status: str
    volume_label: Optional[str]
    featured: bool
    read_time_mins: int
    author_name: Optional[str]
    seo_title: Optional[str]
    seo_description: Optional[str]
    published_at: Optional[datetime]
    created_at: datetime
    tags: List[TagResponse] = []