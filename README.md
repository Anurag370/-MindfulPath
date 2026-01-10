Presented by Code of Duty, Members- Anurag Hom Roy, Dhurbajyoti Nath, Abhtanil Roy and Roni Gope
# MindfulPath 🧠

**MindfulPath** is an AI-powered mental health support platform designed to provide **anonymous screening**, **mood tracking**, and **guided self-help conversations**.  
The platform aims to support students and individuals experiencing stress, anxiety, or emotional pressure by offering a safe, non-judgmental digital space.

> ⚠️ **Disclaimer**: MindfulPath is **not a replacement for professional mental health care**. It is intended solely for self-help and emotional support.

---

## ✨ Features

### 📊 Mood Tracking(Under Progress)
- Daily mood logging
- Track emotional trends over time
- Helps users identify patterns and triggers

### 🤖 AI-Guided Conversations
- Chat with an AI-powered mental health companion
- Supportive, empathetic, and non-judgmental responses
- Powered by **Google Gemini API**
- Designed as a **mental health assistant (not a therapist)**

### 🌐 Modern Web Interface
- Responsive UI built with React
- Clean, accessible, and student-friendly design
- Seamless frontend–backend communication

---

## 🏗️ Tech Stack

### Frontend
- **React**
- **Tailwind CSS**
- **Vite**

### Backend
- **FastAPI**
- **Python 3.11**
- **Uvicorn**

### Database
- **MongoDB**
- **Motor (Async MongoDB Driver)**

### AI / NLP
- **Google Gemini API**

### Tooling & DevOps
- **uv** (Python dependency & environment manager)
- **Git & GitHub**
- **Render** (Deployment)

---

## 📁 Project Structure

```text
MindfulPath/
│
├── frontend/               # React frontend
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── backend/                # FastAPI backend
│   ├── app/
│   │   ├── main.py
│   │   ├── services/
│   │   │   └── gemini_services.py
│   │   ├── database.py
│   │   └── models/
│   ├── pyproject.toml
│   └── .env
│
├── README.md
└── .gitignore
```
---
## ⚙️ Environment Variables
    GOOGLE_API_KEY=your_google_gemini_api_key
    MONGODB_URI=your_mongodb_connection_string
---
## 🚀 Getting Started
### Backend Setup
    cd backend
    uv venv --python 3.11
    uv pip install -r pyproject.toml
    uv run uvicorn app.main:app --reload

### Frontend Setup
    cd frontend
    npm install
    npm run dev
---
## 🔁 API Overview
### Chat Endpoint
    POST /chat

### Request Body
    {
      "message": "I feel anxious today"
    }

### Response
    {
      "Willow": "I'm really glad you reached out. Do you want to talk about what's making you feel anxious?"
    }
---




