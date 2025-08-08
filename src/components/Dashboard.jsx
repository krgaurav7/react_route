export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here’s a quick overview of your activity.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">📊 Stats Overview</h2>
          <p className="text-sm text-gray-500 mt-2">Track your performance metrics in real-time.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">📝 Recent Activity</h2>
          <p className="text-sm text-gray-500 mt-2">View your recent logins, updates, and actions.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">⚙️ Settings</h2>
          <p className="text-sm text-gray-500 mt-2">Manage your preferences and account options.</p>
        </div>
      </section>
    </div>
  );
}
