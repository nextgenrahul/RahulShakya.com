"""
Run all SQL migrations in order.

Usage:
    python -m app.db.migrate

This reads every .sql file from the migrations/ folder in order
and executes them against your PostgreSQL database.
Safe to run multiple times — all tables use IF NOT EXISTS.
"""
import os
import glob
from sqlalchemy import text
from app.db.session import engine


def run_migrations():
    # find all .sql files in migrations/ folder, sorted alphabetically
    # alphabetical order = numerical order because files are named 001_, 002_...
    migration_files = sorted(glob.glob("migrations/*.sql"))

    if not migration_files:
        print("No migration files found in migrations/")
        return

    with engine.connect() as conn:
        for filepath in migration_files:
            filename = os.path.basename(filepath)
            print(f"Running migration: {filename}")

            with open(filepath, "r") as f:
                sql = f.read()

            try:
                # executescript handles multiple SQL statements in one file
                conn.execute(text(sql))
                conn.commit()
                print(f"  ✅ {filename} done")
            except Exception as e:
                print(f"  ❌ {filename} failed: {e}")
                conn.rollback()
                raise

    print("\n✅ All migrations complete")


if __name__ == "__main__":
    run_migrations()