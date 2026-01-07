import { Link } from "react-router-dom";
export default function HomeSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your <span className="text-emerald-600">Peace of Mind</span>
        </h1>

        <p className="text-gray-600 mb-8">
          An anonymous, safe space for mental health tracking, screening,
          and supportive conversations powered by AI.
        </p>

        <div className="flex justify-center gap-4">
        <Link to="/chat"><button className="bg-emerald-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-emerald-700 hover:cursor-pointer transition">
        Chat with Willow
        </button></Link>

          <button className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition">
            Take Screening
          </button>
        </div>
      </div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">


        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
            💬
          </div>
          <h3 className="font-semibold mb-2">AI Support Chat</h3>
          <p className="text-sm text-gray-600 mb-4">
            Talk to Willow, our empathetic AI companion, available 24/7 to listen
            and provide coping strategies.
          </p>
          <Link to="/chat"><button className="text-sm font-medium text-emerald-600 hover:underline hover:cursor-pointer">
            Start Chatting →
          </button></Link>
        </div>


        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center">
            📈
          </div>
          <h3 className="font-semibold mb-2">Mood Tracking</h3>
          <p className="text-sm text-gray-600 mb-4">
            Log your daily emotions and visualize your mental health journey
            over time with intuitive charts.
          </p>
          <button className="text-sm font-medium text-indigo-600 hover:underline">
            Track Mood →
          </button>
        </div>


        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
            📋
          </div>
          <h3 className="font-semibold mb-2">Health Screening</h3>
          <p className="text-sm text-gray-600 mb-4">
            Take a confidential assessment to understand your mental well-being
            and get personalized tips.
          </p>
          <button className="text-sm font-medium text-yellow-600 hover:underline">
            Start Screening →
          </button>
        </div>

      </div>

    </section>
  );
}
