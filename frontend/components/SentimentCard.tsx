interface SentimentProps {
  summary: string;
  sentiment: "Positive" | "Mixed" | "Negative";
}

export default function SentimentCard({ summary, sentiment }: SentimentProps) {
  if (!summary || !sentiment) return null;

  const getSentimentStyle = () => {
    switch (sentiment) {
      case "Positive":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Mixed":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Negative":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 
                    bg-white/5 dark:bg-white/5 
                    backdrop-blur-lg 
                    border border-white/10 
                    rounded-2xl 
                    p-8 
                    shadow-2xl 
                    transition-all duration-300">

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">
          Audience Sentiment
        </h3>

        <span
          className={`px-4 py-1 text-sm font-medium rounded-full border ${getSentimentStyle()}`}
        >
          {sentiment}
        </span>
      </div>

      <p className="text-gray-300 leading-relaxed">
        {summary}
      </p>

    </div>
  );
}