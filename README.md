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

#Create a virtual environment for Windows user
python -m venv venv
.\venv\Scripts\Activate.ps1         # <-- For PowerShell users
# or
venv\Scripts\activate.bat           # <-- For CMD users

#Create a virtual environment for macOS and Linux user
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn app.main:app --reload --port 8000
#Runs at: http://localhost:8000

▶️ Start the Frontend (React + TypeScript) App

cd frontend

# Install dependencies
npm install

# Start the server
npm start
#Runs at: http://localhost:3000/
```

---

🙏 Thank You
Thank you for checking out the Emotion Reflection Tool!
We hope it helps you reflect, grow, and understand your emotions better.

Feel free to fork, star ⭐, or contribute to make it better!

This project is built with ❤️ for emotional well-being.
Happy building! 🚀
---


