export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-600 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-center">
          Have a question, feedback, or suggestion? We’d love to hear from you!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Your message..."
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
