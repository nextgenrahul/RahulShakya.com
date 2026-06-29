-- Ensure UUID generation engine is active
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_id UUID NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT NULL,
    cover_image_url VARCHAR(500) NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'draft',
    volume_label VARCHAR(100) NULL,
    featured BOOLEAN NOT NULL DEFAULT FALSE,
    read_time_mins INTEGER DEFAULT 0,
    author_name VARCHAR(255) DEFAULT 'Rahul Shakya',
    seo_title VARCHAR(255) NULL,
    seo_description TEXT NULL,
    published_at TIMESTAMP WITH TIME ZONE NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blog_tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL
);

-- Index optimizations for rapid sorting and sub-10ms search metrics
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published ON blog_posts(status) WHERE status = 'published';
CREATE INDEX IF NOT EXISTS idx_blog_tags_post_id ON blog_tags(post_id); 