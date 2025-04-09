import React from "react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">Portfolio</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-6">
        <p className="text-lg text-gray-700">
          Sebagai seorang pengembang web, saya telah terlibat dalam berbagai proyek yang memungkinkan saya untuk mengasah keterampilan teknis dan kreatif saya. Berikut adalah beberapa proyek yang telah saya kerjakan:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>Website Penjualan Handphone</strong>: Saya telah membangun sebuah website e-commerce untuk penjualan handphone, yang dirancang untuk memberikan pengalaman berbelanja yang mudah dan responsif. Website ini dilengkapi dengan fitur pencarian produk, keranjang belanja, dan sistem pembayaran yang aman.</li>
          <li><strong>Aplikasi Portofolio Pribadi</strong>: Membangun aplikasi web untuk menampilkan proyek dan keterampilan saya, dengan desain UI/UX yang modern dan user-friendly.</li>
          <li><strong>Website Bisnis Internasional</strong>: Pengembangan website untuk bisnis internasional yang menyediakan informasi layanan mereka secara global, dilengkapi dengan fitur multi-bahasa, galeri foto, dan formulir kontak. Website ini bertujuan untuk menjangkau pasar yang lebih luas di luar negeri, dengan desain yang disesuaikan untuk audiens internasional.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Proyek-proyek ini menunjukkan kemampuan saya dalam menciptakan solusi web yang efektif, efisien, dan estetis, serta kemampuan untuk bekerja dengan pasar internasional.
        </p>
      </div>

      {/* Tombol Kembali ke Index */}
      <div className="mt-6 text-center">
        <Link href="/" className="px-6 py-2 bg-indigo-800 text-white rounded-full hover:bg-indigo-600 transition duration-300">
          Kembali ke Index
        </Link>
      </div>
    </div>
  );
}
