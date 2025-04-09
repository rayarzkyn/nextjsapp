let comments = []; // Simpan komentar sementara (gunakan database jika perlu)

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const { name, text } = req.body;

    if (!name || !text) {
      return res.status(400).json({ error: "Nama dan komentar tidak boleh kosong" });
    }

    const newComment = { name, text };
    comments.push(newComment);
    res.status(201).json(comments);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
