-- Migration 003: Create blog posts and tags

CREATE TABLE IF NOT EXISTS blog_posts (
    id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_id        UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    title            VARCHAR(255) NOT NULL,
    slug             VARCHAR(255) NOT NULL UNIQUE,
    content          TEXT NOT NULL,           -- MDX or markdown content
    excerpt          TEXT,                    -- short preview shown on listing page
    cover_image_url  VARCHAR(500),
    status           VARCHAR(50) NOT NULL DEFAULT 'draft',  -- draft | published
    seo_title        VARCHAR(255),
    seo_description  TEXT,
    read_time_mins   INTEGER DEFAULT 0,
    published_at     TIMESTAMP WITH TIME ZONE,
    created_at       TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_tags (
    id      UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    name    VARCHAR(100) NOT NULL,
    slug    VARCHAR(100) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug      ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status    ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_tags_post_id    ON blog_tags(post_id);