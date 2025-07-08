from fastapi import APIRouter
from app.models.schemas import TextInput, EmotionResponse
from app.controllers.emotion_controller import handle_emotion_analysis

router = APIRouter()

@router.post("/analyze", response_model=EmotionResponse)
def analyze_text(data: TextInput):
    return handle_emotion_analysis(data)
