import { useState } from "react";
import api from "../api";

export default function SentimentForm({ onResult }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      const res = await api.post("/analyze", { text });

      const data = await res.data;
      onResult(data);
    } catch (err) {
      console.error("Error:", err);
      onResult({ error: "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10">
      <textarea
        className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none min-h-[100px]"
        placeholder="Type something to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </form>
  );
}