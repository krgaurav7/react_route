

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-center text-blue-900">Daily News</h1>
        <p className="text-center text-gray-600 mt-2">Stay updated with the latest headlines from around the world</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📰 Breaking: Major Economic Shift</h2>
          <p className="text-gray-600">Experts analyze the unexpected turn in global markets this morning...</p>
        </article>

        <article className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🌍 World: UN Meets on Climate</h2>
          <p className="text-gray-600">Nations gather to discuss urgent strategies for climate change control...</p>
        </article>

        <article className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">⚽ Sports: Local Team Wins Title</h2>
          <p className="text-gray-600">An unforgettable night as the underdogs clinch the championship trophy...</p>
        </article>
      </section>
    </div>
  );
}
