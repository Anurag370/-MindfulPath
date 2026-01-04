export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
     <div className="w-full max-w-4xl h-[90vh] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">


        {/* Header */}
        <div className="flex items-center justify-between bg-emerald-600 px-6 py-4 text-white">
          <div>
            <h2 className="font-semibold text-lg">Willow</h2>
            <p className="text-sm opacity-90">AI Support Companion</p>
          </div>
          <button className="text-sm hover:underline">
            Clear Chat
          </button>
        </div>

        {/* Empty Body */}
        <div className="flex-1 bg-gray-50"></div>

        {/* Input Section */}
        <div className="p-4 bg-white border-t">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 px-4 py-3 rounded-full bg-gray-100 focus:outline-none text-sm"
            />
            <button className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
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
