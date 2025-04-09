// pages/api/chat.js
import db from "@/lib/firebase";
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { question, response } = req.body;

    if (!question || !response) {
      return res.status(400).json({ error: "Pertanyaan dan jawaban wajib diisi." });
    }

    try {
      await addDoc(collection(db, "chatHistory"), {
        question,
        response,
        createdAt: Timestamp.now(),
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Gagal menyimpan chat:", err);
      return res.status(500).json({ error: "Gagal menyimpan ke Firebase." });
    }
  }

  if (req.method === "GET") {
    try {
      const q = query(collection(db, "chatHistory"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);

      const chats = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.status(200).json(chats);
    } catch (err) {
      console.error("Gagal mengambil riwayat:", err);
      return res.status(500).json({ error: "Gagal mengambil data." });
    }
  }

  return res.status(405).json({ error: "Method not allowed." });
}
