import os
from typing import List
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "MarketVerse API"
    
    # CORS Origins (convert comma separated string to list if loaded from env)
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]
    
    # Database Settings
    # Supabase provides PostgreSQL connections direct or via pgpool
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/marketverse")
    
    # Supabase Settings
    SUPABASE_URL: str = os.getenv("SUPABASE_URL", "https://placeholder-url.supabase.co")
    SUPABASE_KEY: str = os.getenv("SUPABASE_KEY", "placeholder-key")
    SUPABASE_JWT_SECRET: str = os.getenv("SUPABASE_JWT_SECRET", "")
    
    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
