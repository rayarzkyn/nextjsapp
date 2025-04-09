import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">Contact</h1>

      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl space-y-6">
        <p className="text-lg text-gray-700 text-center">
          Terima kasih telah mengunjungi halaman saya. Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, 
          jangan ragu untuk menghubungi saya melalui salah satu cara di bawah ini:
        </p>

        <ul className="text-lg text-gray-700 space-y-4 mt-4">
          <li>
            <strong>Email</strong>: Saya terbuka untuk proyek baru atau pertanyaan terkait pengembangan web, desain UI/UX, atau administrasi database. 
            Kirim email ke{" "}
            <a href="mailto:rayarzkyn23@gmail.com" className="text-indigo-700 hover:underline">
              rayarzkyn23@gmail.com
            </a>{" "}
            dan saya akan merespons segera.
          </li>

          <li>
            <strong>WhatsApp</strong>: Untuk percakapan langsung, Anda dapat menghubungi saya di nomor WhatsApp:{" "}
            <a href="https://wa.me/08814562441" className="text-indigo-700 hover:underline">
              08814562441
            </a>.
          </li>

          <li>
            <strong>Instagram</strong>: Jika Anda ingin melihat lebih banyak karya saya, kunjungi{" "}
            <a href="https://www.instagram.com/rayarzkyn__" className="text-indigo-700 hover:underline">
              Instagram
            </a>{" "}
            @rayarzkyn__.
          </li>
        </ul>

        <p className="text-lg text-gray-700 text-center">Saya sangat menantikan kesempatan untuk bekerja sama dengan Anda!</p>
      </div>

      {/* Tombol Kembali ke Index */}
      <div className="mt-6">
        <Link href="/" legacyBehavior>
          <a className="px-6 py-2 bg-indigo-800 text-white rounded-full hover:bg-indigo-600 transition duration-300">
            Kembali ke Home
          </a>
        </Link>
      </div>
    </div>
  );
}
