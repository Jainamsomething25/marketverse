from fastapi import APIRouter

api_router = APIRouter()

# Core v1 API router combiner
# Endpoint modules will be linked dynamically as they are developed
# Example: api_router.include_router(stocks.router, prefix="/stocks", tags=["stocks"])
