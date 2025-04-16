import React, { useState, useEffect } from "react"; 
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState(""); 
  const [theme, setTheme] = useState("light");
  const [ratings, setRatings] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        if (!res.ok) throw new Error("Gagal mengambil komentar");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, []);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await fetch("/api/ratings");
        if (!res.ok) throw new Error("Gagal mengambil rating");
        const data = await res.json();
        setRatings(data.ratings);
      } catch (err) {
        console.error("Error fetching ratings:", err);
      }
    };
    fetchRatings();
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;
    
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName, text: newComment })
      });
      
      if (!response.ok) {
        throw new Error("Gagal mengirim komentar");
      }
      
      const updatedComments = await response.json();
      setComments(updatedComments);
      setNewName("");
      setNewComment("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleRatingSubmit = async () => {
    if (selectedRating < 1 || selectedRating > 5) return;

    try {
      const response = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: selectedRating }),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim rating");
      }

      const updatedRatings = await response.json();
      setRatings(updatedRatings.ratings);
      setSelectedRating(0); // Reset setelah kirim
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const averageRating =
    ratings.length > 0
      ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1)
      : "Belum ada rating";

        const [aiQuestion, setAiQuestion] = useState("");
        const [loading, setLoading] = useState(false);
        const [chatHistory, setChatHistory] = useState([]);
        const [showHistory, setShowHistory] = useState(false);
      
        // Ambil riwayat chat dari Firebase saat komponen pertama kali dimuat
        useEffect(() => {
          fetchChatHistory();
        }, []);
      
        // Ambil data dari Firebase API (GET)
        const fetchChatHistory = async () => {
          try {
            const res = await fetch("/api/chat");
            const history = await res.json();
            setChatHistory(history);
          } catch (err) {
            console.error("Gagal mengambil riwayat chat:", err);
          }
        };
      
        // Kirim pertanyaan ke AI, lalu simpan ke Firebase
        const handleAskAI = async () => {
          if (!aiQuestion.trim()) return;
      
          setLoading(true);
      
          try {
            // Kirim ke API AI (OpenRouter/OpenAI)
            const res = await fetch("/api/ask-ai", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ message: aiQuestion }),
            });
      
            const data = await res.json();
            const aiReply = data.reply;
      
            // Simpan ke Firebase via API chat.js
            await fetch("/api/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                question: aiQuestion,
                response: aiReply,
              }),
            });
      
            // Kosongkan input dan refresh riwayat
            setAiQuestion("");
            fetchChatHistory();
          } catch (err) {
            console.error("Terjadi kesalahan saat mengirim pertanyaan:", err);
          } finally {
            setLoading(false);
          }
        };

  const portfolios = [
    { id: "business-web", title: "Website E-Commerce", description: "Membangun platform e-commerce modern dengan fitur lengkap." },
    { id: "portfolio-app", title: "Aplikasi Portofolio Pribadi", description: "Membuat portfolio online dengan UI/UX yang menarik." },
    { id: "ecommerce", title: "Website Bisnis Internasional", description: "Mengembangkan website global dengan fitur multi-bahasa." },
  ];

  return (
    <div className={`min-h-screen flex flex-col items-center p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
        className="fixed bottom-5 left-5 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <h2 className="text-4xl font-bold mb-6 text-center">Selamat Datang di CV Saya!</h2>

      <p className="text-lg text-center leading-relaxed">
        Halo! Saya <span className="font-semibold">Raya Rizkyana</span>, seorang 
        <span className="font-semibold"> Web Developer & UI/UX Designer</span> dengan pengalaman 
        dalam pengembangan website, desain antarmuka pengguna, dan administrasi database.
      </p>

      <section id="portfolio" className="mt-12 p-6 shadow-lg rounded-lg w-full max-w-3xl bg-white border border-blue-300">
  <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">Portfolio</h3>
  {portfolios.map((item) => (
    <Link 
      key={item.id} 
      href={`/portfolio/${item.id}`} 
      className="block p-5 bg-white rounded-lg shadow-md hover:bg-indigo-100 transition duration-300 transform hover:scale-105 border border-blue-300"
    >
      <h4 className="text-lg font-semibold text-indigo-900">{item.title}</h4>
      <p className="text-gray-700">{item.description}</p>
    </Link>
  ))}
</section>

<section id="blog" className="mt-12 p-6 border border-blue-300 bg-white shadow-md rounded-lg w-full max-w-3xl">
  <h3 className="text-2xl font-bold text-indigo-800 mb-4">Artikel Terbaru</h3>
  <div className="space-y-4">
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <h4 className="text-lg font-semibold text-gray-800">5 Tips Desain Web Esensial</h4>
      <a
        href="https://www.wix.com/blog/5-design-tips-for-a-professional-site"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-700 hover:underline"
      >
        Baca Selengkapnya
      </a>
    </div>
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <h4 className="text-lg font-semibold text-gray-800">Optimalkan Website Anda</h4>
      <a
        href="https://www.hostinger.co.id/tutorial/cara-meningkatkan-kecepatan-website"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-700 hover:underline"
      >
        Baca Selengkapnya
      </a>
    </div>
  </div>
</section>

      <section id="comments" className="mt-12 p-6 shadow-lg rounded-lg w-full max-w-3xl border border-blue-300 bg-gray-50 dark:bg-gray-800">
  <h3 className="text-2xl font-bold text-indigo-800 mb-4 dark:text-indigo-300">Komentar Pengunjung</h3>
  
  <form onSubmit={handleCommentSubmit} className="mb-4">
    <input
      className="w-full p-2 border border-blue-300 rounded-lg mb-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
      type="text"
      placeholder="Nama Anda..."
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
    />

    <textarea
      className="w-full p-2 border border-blue-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
      rows="3"
      placeholder="Tulis komentar Anda..."
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
    />

    <button
      type="submit"
      disabled={!newName.trim() || !newComment.trim()}
      className={`mt-2 px-4 py-2 rounded-lg transition ${
        newName.trim() && newComment.trim()
          ? "bg-indigo-600 text-white hover:bg-indigo-800"
          : "bg-gray-400 text-gray-200 cursor-not-allowed"
      }`}
    >
      Kirim Komentar
    </button>
  </form>

  {comments.length > 0 ? (
    <ul className="mt-4 space-y-4">
      {comments.map((comment, index) => (
        <li
          key={index}
          className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition dark:border-gray-300"
        >
          <div className="mb-2 border-b border-gray-300 pb-2 dark:border-gray-300">
            <p className="font-semibold text-black">{comment.name}</p>
          </div>
          <p className="text-black">{comment.text}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500 dark:text-gray-300">Belum ada komentar.</p>
  )}
</section>

<section id="ratings" className="mt-12 p-6 shadow-lg rounded-lg w-full max-w-3xl border border-blue-300 bg-gray-50 dark:bg-gray-800">
  <h3 className="text-2xl font-bold text-indigo-800 mb-4 dark:text-indigo-300">Beri Rating</h3>

  {/* Pilihan Bintang */}
  <div className="flex justify-center space-x-2 mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        onClick={() => setSelectedRating(star)}
        className={`text-3xl ${
          selectedRating >= star ? "text-yellow-500" : "text-gray-300"
        } transition`}
      >
        ★
      </button>
    ))}
  </div>

  <div className="border-2 border-blue-300 p-4 mt-4 rounded-lg bg-blue-50 dark:bg-blue-900">
    <div className="border-2 border-blue-200 p-4 rounded-lg bg-blue-100 dark:bg-blue-700">
      <button
        onClick={handleRatingSubmit}
        disabled={selectedRating === 0}
        className={`px-4 py-2 rounded-lg border transition ${
          selectedRating > 0
            ? "bg-indigo-600 text-white hover:bg-indigo-800 border-indigo-600"
            : "bg-gray-400 text-gray-200 cursor-not-allowed border-gray-300"
        }`}
      >
        Kirim Rating
      </button>

      {/* Tampilkan Rata-rata Rating */}
      <p className="mt-4 text-lg text-black">
        Rata-rata Rating:{" "}
        <span className="font-bold text-yellow-500">{averageRating} ⭐</span>
      </p>
    </div>
  </div>
</section>

      <section id="chatbot" className="mt-12 p-6 shadow-lg rounded-lg w-full max-w-3xl mx-auto bg-gray-50 border border-blue-300">
      <h3 className="text-2xl font-bold text-indigo-800 mb-4">Tanya ke AI</h3>

      {/* Tampilan riwayat percakapan */}
      <div className="h-64 overflow-y-auto border border-blue-300 p-4 mb-4 rounded-lg bg-white space-y-2 flex flex-col">
        {chatHistory.map((msg, i) => (
          <div key={i} className="space-y-1">
            <div className="bg-indigo-500 text-white self-end ml-auto max-w-xs px-4 py-2 rounded-lg">
              {msg.question}
            </div>
            <div className="bg-gray-200 text-black self-start max-w-xs px-4 py-2 rounded-lg">
              {msg.response}
            </div>
          </div>
        ))}
      </div>

      {/* Input pertanyaan dan tombol kirim */}
      <div className="flex space-x-2">
        <input
          className="flex-1 border p-2 rounded-lg"
          type="text"
          placeholder="Tulis pertanyaan..."
          value={aiQuestion}
          onChange={(e) => setAiQuestion(e.target.value)}
        />
        <button
          onClick={handleAskAI}
          disabled={!aiQuestion.trim() || loading}
          className={`px-4 py-2 rounded-lg transition ${
            aiQuestion.trim() && !loading
              ? "bg-green-600 text-white hover:bg-green-800"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </div>

      {/* Tombol toggle riwayat chat */}
      {chatHistory.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-sm text-indigo-600 hover:underline"
          >
            {showHistory ? "Sembunyikan Riwayat Chat" : "Lihat Riwayat Chat"}
          </button>

          {showHistory && (
            <ul className="space-y-2 mt-4">
              {chatHistory.map((chat, index) => (
                <li key={index} className="border border-blue-300 p-3 rounded bg-white shadow">
                  <p className="text-sm">
                    <strong>Anda:</strong> {chat.question}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>AI:</strong> {chat.response}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
</div>
  );
}