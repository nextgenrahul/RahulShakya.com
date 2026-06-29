-- Migration 004b: Create contacts table
 
CREATE TABLE IF NOT EXISTS contacts (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name       VARCHAR(255) NOT NULL,
    email      VARCHAR(255) NOT NULL,
    company    VARCHAR(255),
    message    TEXT NOT NULL,
    service_id UUID REFERENCES services(id) ON DELETE SET NULL,
    status     VARCHAR(50) NOT NULL DEFAULT 'new',  -- new | read | replied | archived
    source     VARCHAR(100) DEFAULT 'website',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
 
CREATE INDEX IF NOT EXISTS idx_contacts_status     ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_email      ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
 