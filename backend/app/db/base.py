from sqlalchemy.orm import declarative_base

# Every SQLAlchemy model in your app inherits from this Base.
# It gives SQLAlchemy a registry of all your tables.
# When you call Base.metadata.create_all(engine), it creates
# every table that has ever inherited from this Base.
Base = declarative_base()