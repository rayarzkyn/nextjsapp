import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">Services</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-6">
        <p className="text-lg text-gray-700">
          Sebagai seorang profesional di bidang pengembangan web dan desain UI/UX, saya menawarkan berbagai layanan yang dapat membantu Anda mencapai tujuan digital Anda. Layanan yang saya tawarkan mencakup:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li><strong>Pembuatan Website Profesional</strong>: Membuat website yang responsif, cepat, dan modern, disesuaikan dengan kebutuhan spesifik bisnis Anda.</li>
          <li><strong>Desain UI/UX</strong>: Menciptakan desain antarmuka pengguna yang intuitif, estetis, dan ramah pengguna untuk meningkatkan pengalaman pengguna (UX) pada aplikasi atau website Anda.</li>
          <li><strong>Pengembangan Aplikasi Web</strong>: Membangun aplikasi web yang efisien dan mudah diakses, menggunakan teknologi terbaru seperti React.js dan Next.js.</li>
          <li><strong>SEO dan Digital Marketing</strong>: Optimasi website untuk mesin pencari (SEO) dan strategi pemasaran digital yang membantu bisnis Anda untuk lebih mudah ditemukan oleh audiens target.</li>
          <li><strong>Konsultasi dan Pelatihan Teknologi</strong>: Memberikan konsultasi dan pelatihan terkait teknologi terkini dalam pengembangan web, desain UI/UX, dan pengelolaan database.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Dengan keahlian dan pengalaman yang saya miliki, saya siap membantu Anda mengembangkan solusi digital yang inovatif dan efektif.
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
}
