export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-semibold text-emerald-600"><a href="/">
        <span className="text-2xl">🌿</span>
        <span className="text-gray-900">MindfulPath</span></a>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 text-sm font-medium text-gray-700">
        <a href="/chat" className="hover:text-emerald-600">
          Chat
        </a>
        <a href="#mood" className="hover:text-emerald-600">
          Mood Tracker
        </a>
        <a href="#screening" className="hover:text-emerald-600">
          Screening
        </a>
      </nav>
    </header>
  );
}
