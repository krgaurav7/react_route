
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-blue-700">NewsSphere</span>, your go-to platform for accurate, unbiased, and timely news.
          We are committed to delivering top stories across the globe — from politics and economy to sports and technology.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">🧠 Our Mission</h2>
          <p className="text-gray-600">
            To inform and empower individuals by providing news that is factual, fast, and free from bias.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">🌍 Global Reach</h2>
          <p className="text-gray-600">
            With a network of reporters and sources worldwide, we bring you news as it happens, wherever it happens.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-gray-500 text-sm">
          Built with 💙 using React and Tailwind CSS · &copy; 2025 NewsSphere
        </p>
      </div>
    </div>
  );
}
