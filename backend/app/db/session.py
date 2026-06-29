import os
import asyncpg
from contextlib import asynccontextmanager

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://username:password@localhost:5432/rahulshakya_studio")

class RawDatabasePool:
    def __init__(self):
        self.pool = None

    async def connect(self):
        if not self.pool:
            self.pool = await asyncpg.create_pool(
                dsn=DATABASE_URL,
                min_size=5,
                max_size=25,
                command_timeout=30.0
            )

    async def disconnect(self):
        if self.pool:
            await self.pool.close()

db_pool = RawDatabasePool()

async def get_raw_conn():
    """Dependency injection yield token for route paths"""
    async with db_pool.pool.acquire() as connection:
        yield connection