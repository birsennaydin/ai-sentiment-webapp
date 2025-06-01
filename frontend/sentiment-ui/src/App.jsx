import { useState } from "react";
import Header from "./components/Header";
import SentimentForm from "./components/SentimentForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SentimentForm onResult={setResult} />
      <ResultCard result={result} />
    </div>
  );
}