import React from "react";
import Link from "next/link";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">Skills</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-6">
        <p className="text-lg text-gray-700">
          Saya memiliki berbagai keterampilan yang mendukung pengembangan website dan aplikasi yang modern, responsif, dan user-friendly. Berikut adalah beberapa keahlian yang saya kuasai:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>HTML & CSS</strong>: Dasar yang kuat dalam membangun struktur dan desain website, dari pembuatan layout hingga styling dengan menggunakan CSS.</li>
          <li><strong>JavaScript</strong>: Keahlian dalam menggunakan JavaScript untuk membuat website interaktif dan dinamis, termasuk menggunakan framework seperti React.js.</li>
          <li><strong>PHP</strong>: Pemrograman server-side dengan PHP untuk pengembangan website dinamis, baik untuk sistem manajemen konten (CMS) maupun aplikasi berbasis web lainnya.</li>
          <li><strong>UI/UX Design</strong>: Mengembangkan desain antarmuka yang menarik dan mudah digunakan, dengan fokus pada pengalaman pengguna (user experience).</li>
          <li><strong>Database Management</strong>: Pengelolaan dan optimasi database untuk aplikasi web, menggunakan MySQL dan PostgreSQL.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Selain itu, saya terus memperbarui keterampilan saya dengan mempelajari tren teknologi terbaru untuk selalu memberikan hasil terbaik pada setiap proyek yang saya kerjakan.
        </p>
      </div>

      {/* Tombol Kembali ke Index */}
      <div className="mt-6 text-center">
        <Link href="/" className="px-6 py-2 bg-indigo-800 text-white rounded-full hover:bg-indigo-600 transition duration-300">
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
};

export default SkillsPage;
