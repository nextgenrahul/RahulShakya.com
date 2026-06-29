import uuid
from sqlalchemy import (
    Column, String, Text, Boolean,
    Integer, ForeignKey, TIMESTAMP
)
from sqlalchemy.dialects.postgresql import UUID, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base import Base


class BlogPost(Base):
    __tablename__ = "blog_posts"

    id              = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    author_id       = Column(UUID(as_uuid=True), ForeignKey("admin_users.id", ondelete="SET NULL"), nullable=True)

    # ── Content ──────────────────────────────────────────────
    title           = Column(String(255), nullable=False)
    slug            = Column(String(255), nullable=False, unique=True)
    # main article body — markdown or MDX string
    content         = Column(Text, nullable=False)
    # short preview shown on listing page (what your BlogFeaturedBook shows)
    excerpt         = Column(Text, nullable=True)
    cover_image_url = Column(String(500), nullable=True)

    # ── Meta ─────────────────────────────────────────────────
    # "draft" or "published"
    status          = Column(String(50), nullable=False, default="draft")
    # volume/chapter display e.g. "VOLUME 01 // CHAPTER 04"
    volume_label    = Column(String(100), nullable=True)
    # whether to show in featured/hero spot
    featured        = Column(Boolean, nullable=False, default=False)
    read_time_mins  = Column(Integer, default=0)
    # author display name shown in post e.g. "BY RAHUL SHAKYA"
    author_name     = Column(String(255), nullable=True, default="Rahul Shakya")

    # ── SEO ──────────────────────────────────────────────────
    seo_title       = Column(String(255), nullable=True)
    seo_description = Column(Text, nullable=True)

    # ── Timestamps ───────────────────────────────────────────
    published_at    = Column(TIMESTAMP(timezone=True), nullable=True)
    created_at      = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at      = Column(TIMESTAMP(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # ── Relationships ────────────────────────────────────────
    tags            = relationship("BlogTag", back_populates="post", cascade="all, delete-orphan")


class BlogTag(Base):
    __tablename__ = "blog_tags"

    id      = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    post_id = Column(UUID(as_uuid=True), ForeignKey("blog_posts.id", ondelete="CASCADE"), nullable=False)
    name    = Column(String(100), nullable=False)
    slug    = Column(String(100), nullable=False)

    post    = relationship("BlogPost", back_populates="tags")