-- Migration 004: Create services table

CREATE TABLE IF NOT EXISTS services (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title         VARCHAR(255) NOT NULL,
    slug          VARCHAR(255) NOT NULL UNIQUE,
    description   TEXT NOT NULL,
    icon          VARCHAR(100),              -- lucide icon name
    features      TEXT[] NOT NULL DEFAULT '{}',
    pricing_model VARCHAR(255),             -- e.g. "Starting at ₹15,000"
    active        BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order    INTEGER NOT NULL DEFAULT 0,
    created_at    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

