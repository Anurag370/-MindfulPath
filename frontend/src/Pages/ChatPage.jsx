import { useEffect, useRef, useState } from "react";

export default function ChatPage() {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if(!input.trim()) return;
        const userMessage = {sender:"user",text:input};
        setMessages(prev=>[
            ...prev, userMessage]);

        setInput("");
        try{
            const res = await fetch("https://mindfulpathcodbackend.onrender.com/chat",{
                method : "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({message:input})
            });
            const data = await res.json();
            const botMessage = {sender: "bot",text:data.bot}
            setMessages(prev=>[...prev, botMessage]);
        }catch(error){
            setMessages(prev =>[...prev, {sender:"bot",text:"Sorry, something went wrong."},])
        }
    }
    const clearChat = ()=>{
        setMessages([]);
    };
    const bottomRef = useRef(null);
    useEffect(()=>{
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    },[messages]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
     <div className="w-full max-w-4xl h-[90vh] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">


        <div className="flex items-center justify-between bg-emerald-600 px-6 py-4 text-white">
          <div>
            <h2 className="font-semibold text-lg">Willow</h2>
            <p className="text-sm opacity-90">AI Support Companion</p>
          </div>
          <button className="text-sm hover:underline hover:cursor-pointer" onClick={clearChat}>
            Clear Chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg,index)=>(
                <div key={index} className={`max-w-[70%] p-3 rounded-lg
                ${msg.sender === "user"? "ml-auto bg-emerald-600 text-white":"mr-auto bg-gray-200 text-black"}`}>
                    {msg.text}
                </div>
            ))}
            <div ref={bottomRef} />
        </div>

        <div className="p-4 bg-white border-t">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e)=> setInput(e.target.value)}
              onKeyDown={(e)=>{
                if (e.key === "Enter"){
                    e.preventDefault();
                    sendMessage();
                }
              }}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none text-sm"
            />
            <button className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-emerald-700 transition" onClick={sendMessage}>
              ▲
            </button>
          </div>

          <p className="text-xs text-center text-gray-400 mt-2">
            AI can make mistakes. Consider checking important information.
          </p>
        </div>

      </div>
    </div>
  );
}
