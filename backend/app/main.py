from fastapi import FastAPI
from app.core.config import add_cors
from app.api.endpoints import emotion

app = FastAPI(title="Emotion Reflection API")

# Add CORS middleware
add_cors(app)

# Register routers
app.include_router(emotion.router, prefix="/api")
