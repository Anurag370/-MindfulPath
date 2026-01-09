from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.services.gemini_services import generate_reply
from app.database import chats

app = FastAPI(title="MindfulPath")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessageInput(BaseModel):
    message: str

@app.post("/chat")
async def chat(message: MessageInput):
    reply = await generate_reply(message.message)
    await chats.insert_one({
        "user": message.message,
        "willow": reply,
    })
    return {"bot": reply}

@app.get("/")
def health_check():
    return {"status": "ok"}
@app.get("/chat")
def health_check():
    return {"reply": "ok"}
