import re
import math
from typing import Any


def slugify(text: str) -> str:
    """
    Convert a title into a URL-safe slug.
    "My First Blog Post!" → "my-first-blog-post"
    """
    # lowercase
    text = text.lower()
    # replace spaces and underscores with hyphens
    text = re.sub(r"[\s_]+", "-", text)
    # remove all characters that aren't letters, numbers, or hyphens
    text = re.sub(r"[^\w-]", "", text)
    # remove multiple consecutive hyphens
    text = re.sub(r"-+", "-", text)
    # strip leading/trailing hyphens
    return text.strip("-")


def paginate(page: int, per_page: int) -> dict:
    """
    Calculate LIMIT and OFFSET for SQL queries.

    page=1, per_page=10 → {"limit": 10, "offset": 0}
    page=2, per_page=10 → {"limit": 10, "offset": 10}
    page=3, per_page=10 → {"limit": 10, "offset": 20}
    """
    page = max(1, page)         # page can't be less than 1
    per_page = min(100, per_page)  # cap at 100 items per page
    offset = (page - 1) * per_page
    return {"limit": per_page, "offset": offset}


def total_pages(total: int, per_page: int) -> int:
    """Calculate how many pages exist given total items and page size."""
    return math.ceil(total / per_page) if per_page else 1