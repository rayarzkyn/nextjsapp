let comments = [];
let ratings = []; // Menyimpan rating dari pengguna

// Fungsi untuk mendapatkan semua komentar
export function getComments() {
  return comments;
}

// Fungsi untuk menambahkan komentar baru
export function addComment(comment) {
  if (!comment || typeof comment !== "string" || comment.trim() === "") {
    throw new Error("Komentar tidak boleh kosong!");
  }
  comments.push(comment.trim()); // Trim untuk menghapus spasi ekstra
}

// Fungsi untuk mendapatkan rata-rata rating
export function getAverageRating() {
  if (ratings.length === 0) return { ratings: [], average: 0, votes: 0 };

  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  return {
    ratings, // Kembalikan daftar rating
    average: parseFloat((total / ratings.length).toFixed(1)), // Format angka dengan 1 desimal
    votes: ratings.length,
  };
}

// Fungsi untuk menambahkan rating baru
export function addRating(rating) {
  if (typeof rating !== "number" || rating < 1 || rating > 5) {
    throw new Error("Rating harus berupa angka antara 1 dan 5");
  }
  ratings.push(rating);
}
