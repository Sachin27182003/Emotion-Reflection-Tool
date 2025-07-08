import { useState } from "react";
import axios from "axios";

function Homepage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    emotion: string;
    confidence: number;
  } | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await axios.post("http://localhost:8000/api/analyze", {
        text
      });
      setResult(res.data);
      setText("");
    } catch (err) {
      setError("API request failed, please Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 min-h-screen text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Emotion Reflection Tool
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#121224] p-6 rounded-lg shadow-lg flex flex-col gap-4 border border-violet-500"
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder="Share your thoughts or feelings..."
          className="p-3 text-white bg-[#1c1c2e] border border-violet-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded-md font-medium transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed text-white"
              : "bg-violet-600 hover:bg-violet-700 text-white"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Analyzing...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      {loading && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="w-24 h-24 border-8 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {result && (
        <div className="mt-6 p-4 w-full max-w-md bg-[#1e1e2f] border border-violet-400 rounded-md shadow-md">
          <p className="text-lg font-semibold text-violet-300">
            Emotion: {result.emotion}
          </p>
          <p className="text-sm text-violet-200">
            Confidence: {(result.confidence * 100).toFixed(1)}%
          </p>
        </div>
      )}

      {error && <p className="text-red-400 mt-4 font-medium">{error}</p>}
    </div>
  );
}

export default Homepage;
