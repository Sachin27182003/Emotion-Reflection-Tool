# Emotion Reflection Tool 🧠💬

A web-based application that analyzes user reflections to detect emotional tone using a mock emotion analysis API. Built with React (TypeScript) and FastAPI for the backend.

---

## ✨ Features

- 📝 Submit text reflections
- 📊 Emotion detection with confidence score
- 🎨 Smooth animated background
- ⚡ Real-time analysis with loading state

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: FastAPI (Python)
- **API**: Mock Emotion Analyzer

---

## 🚀 Getting Started

### 📁 Project Structure

## 📁 Project Structure

```text
emotion-reflection-tool/
├── backend/
│   ├── app/
│   │   ├── api/                 # FastAPI route definitions
│   │   │   └── emotion.py
│   │   ├── controllers/         # Business logic
│   │   │   └── emotion_controller.py
│   │   ├── core/                # Config, env, startup files
│   │   │   └── config.py
│   │   ├── models/              # Pydantic schemas
│   │   │   └── schemas.py
│   │   ├── services/            # Logic or external calls
│   │   │   └── emotion_service.py
│   │   └── main.py              # App entry point
│   ├── requirements.txt
│   └── venv/ (ignored in .gitignore)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Background.tsx
│   │   ├── pages/
│   │   │   └── Homepage.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── README.md
```

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sachin27182003/Emotion-Reflection-Tool.git
cd Emotion-Reflection-Tool

▶️ Start the Backend (FastAPI Python API)
cd backend

# (Optional) Create a virtual environment
python -m venv venv
source venv/bin/activate  
# On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn main:app --reload --port 8000
#Runs at: http://localhost:8000

▶️ Start the Frontend (React + TypeScript) App

cd frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
#Runs at: http://localhost:5173

📌 Final Notes
The backend is modular with proper folders for api, controllers, services, etc.

Frontend is built with TypeScript + TailwindCSS for a clean UI.

The emotion analysis is mocked — you can later replace it with real NLP.

## 📌 Final Notes

Thank you for checking out the Emotion Reflection Tool!  
We hope it helps you reflect, grow, and understand your emotions better.  
Feel free to fork, star ⭐, and contribute!

## 🙏 Thank You

This project is built with ❤️ to help people reflect on their emotions.  
We welcome feedback, contributions, and creative ideas!

Happy coding! 🚀


