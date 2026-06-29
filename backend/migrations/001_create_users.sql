-- Migration 001: Create admin users table
-- Run this first — auth system depends on this table

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- uuid-ossp gives us uuid_generate_v4() to auto-generate unique IDs

CREATE TABLE IF NOT EXISTS admin_users (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email       VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,   -- bcrypt hash, never plain text
    name        VARCHAR(255) NOT NULL,
    role        VARCHAR(50)  NOT NULL DEFAULT 'admin',
    last_login  TIMESTAMP WITH TIME ZONE,
    created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Index on email — login queries look up by email every time
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);