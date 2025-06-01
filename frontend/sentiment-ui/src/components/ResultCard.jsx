export default function ResultCard({ result }) {
  if (!result || result.error) {
    return (
      <div className="max-w-2xl mx-auto mt-6 text-red-500 text-center">
        {result?.error || "No result yet."}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">Sentiment Result</h2>
      <p><strong>Label:</strong> {result.sentiment}</p>
      <p><strong>Polarity:</strong> {result.polarity}</p>
    </div>
  );
}