import { analyzeSentiment } from "../services/sentiment.service.js";

export const getSentiment = async (req, res) => {
  try {
    const { reviews } = req.body;

    if (!reviews || reviews.length === 0) {
      return res.status(400).json({ error: "Reviews are required for sentiment analysis" });
    }

    const sentiment = await analyzeSentiment(reviews);

    res.json(sentiment);
  } catch (error) {
    console.error("Sentiment Controller Error:", error.message);
    res.status(500).json({ error: "Failed to analyze sentiment" });
  }
};