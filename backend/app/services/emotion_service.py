from app.models.schemas import TextInput, EmotionResponse
import random

def analyze_emotion(data: TextInput) -> EmotionResponse:
    text = data.text.lower()

    # Simple keyword-based fake logic
    if any(word in text for word in ["happy", "joy", "glad", "great"]):
        emotion = "Happy"
        confidence = round(random.uniform(0.8, 0.95), 2)
    elif any(word in text for word in ["sad", "unhappy", "down", "depressed"]):
        emotion = "Sad"
        confidence = round(random.uniform(0.75, 0.9), 2)
    elif any(word in text for word in ["angry", "mad", "furious", "frustrated"]):
        emotion = "Angry"
        confidence = round(random.uniform(0.78, 0.93), 2)
    elif any(word in text for word in ["nervous", "scared", "worried", "anxious"]):
        emotion = "Anxious"
        confidence = round(random.uniform(0.8, 0.92), 2)
    elif any(word in text for word in ["excited", "thrilled", "eager"]):
        emotion = "Excited"
        confidence = round(random.uniform(0.85, 0.95), 2)
    else:
        emotion = "Neutral"
        confidence = round(random.uniform(0.6, 0.8), 2)

    return EmotionResponse(emotion=emotion, confidence=confidence)
