from fastapi import HTTPException
from app.models.schemas import TextInput, EmotionResponse
from app.services.emotion_service import analyze_emotion

def handle_emotion_analysis(data: TextInput) -> EmotionResponse:
    try:
        return analyze_emotion(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Emotion analysis failed")
