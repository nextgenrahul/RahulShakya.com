-- Migration 002: Create projects table

CREATE TABLE IF NOT EXISTS projects (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_id       UUID REFERENCES admin_users(id) ON DELETE SET NULL,
    title           VARCHAR(255) NOT NULL,
    slug            VARCHAR(255) NOT NULL UNIQUE,  -- URL-safe version of title
    description     TEXT NOT NULL,
    tech_stack      TEXT[]  NOT NULL DEFAULT '{}', -- array of tech names
    live_url        VARCHAR(500),
    repo_url        VARCHAR(500),
    cover_image_url VARCHAR(500),
    featured        BOOLEAN NOT NULL DEFAULT FALSE, -- show on homepage
    sort_order      INTEGER NOT NULL DEFAULT 0,     -- manual ordering
    status          VARCHAR(50) NOT NULL DEFAULT 'published',
    created_at      TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_slug     ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_status   ON projects(status);