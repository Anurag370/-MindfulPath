import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">

      <div className="flex items-center gap-2 text-xl font-semibold text-emerald-600"><Link to="/">
        <span className="text-2xl">🌿</span>
        <span className="text-gray-900">MindfulPath</span></Link>
      </div>


      <nav className="flex gap-6 text-sm font-medium text-gray-700">
        <Link to ="/chat" className="hover:text-emerald-600">
          Chat
        </Link>
        <Link to="/mood" className="hover:text-emerald-600">
          Mood Tracker
        </Link>
        <Link to="/screening" className="hover:text-emerald-600">
          Screening
        </Link>
      </nav>
    </header>
  );
}
