import { getAverageRating, addRating } from "@/data/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = getAverageRating();
    res.status(200).json(data); // Kirim daftar rating dan rata-rata
  } else if (req.method === "POST") {
    try {
      const { rating } = req.body;
      if (typeof rating !== "number" || rating < 1 || rating > 5) {
        throw new Error("Rating harus antara 1 dan 5");
      }

      addRating(rating);
      res.status(201).json(getAverageRating()); // Kembalikan data terbaru
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
