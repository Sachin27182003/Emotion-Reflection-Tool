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

emotion-reflection-tool/
├── backend/
│ ├── app ──│
│ │         │── api ─> emotion.py
│ │         │── controllers ─> emotion_controller.py
│ │         │── core ─> config.py
│ │         │── models ─> schemas.py
│ │         │── services ─> emotion_service.py
│ │         │── main.py
│ │         │
│ ├── venv ──│ ─> ...files
│ │          
│ └── requirements.txt
├── frontend/
│ ├── src/ ──│
│ │          │── components ─> Background.tsx
│ │          │── Pages ─> Homepage.tsx
│ │          │── App.tsx
│ │          │── index.css
│ │          │── index.tsx
│ │          │── ...
│ │   
│ ├── public/
│ ├── package.json
│ ├── package-lock.json
│ └── ...
├── README.md
└── ...


---

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

▶️ Start the Frontend (React + TypeScript) App

cd frontend

# Install dependencies
npm install

# Start the dev server
npm run dev

## 📌 Final Notes

Thank you for checking out the Emotion Reflection Tool!  
We hope it helps you reflect, grow, and understand your emotions better.  
Feel free to fork, star ⭐, and contribute!

## 🙏 Thank You

This project is built with ❤️ to help people reflect on their emotions.  
We welcome feedback, contributions, and creative ideas!

Happy coding! 🚀


