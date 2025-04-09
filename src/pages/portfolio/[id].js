import { useRouter } from "next/router";
import Image from "next/image";

const portfolioData = {
  ecommerce: {
    title: "Website E-Commerce iPhone",
    description:
      "Saya pernah mengembangkan sebuah e-commerce khusus untuk penjualan iPhone, dengan desain modern dan responsif. Website ini dilengkapi dengan fitur katalog produk, detail spesifikasi, keranjang belanja, serta sistem checkout yang user-friendly. Selain itu, saya juga mengoptimalkan performa dan SEO untuk pengalaman pengguna yang lebih baik.",
    image: "/ecommerce.jpg",
  },
  "portfolio-app": {
    title: "Aplikasi Portofolio Pribadi",
    description:
      "Saya pernah membuat portofolio pribadi berbasis website untuk menampilkan profil, keterampilan, dan proyek yang telah saya kerjakan. Website ini dirancang dengan tampilan modern, responsif, dan dilengkapi dengan animasi interaktif. Selain itu, saya mengintegrasikan halaman khusus untuk menampilkan detail setiap proyek yang pernah saya buat, sehingga memudahkan pengunjung untuk melihat hasil karya saya secara lebih mendalam.",
    image: "/portfolio.png",
  },
  "business-web": {
    title: "Website Bisnis Internasional",
    description:
      "Saya pernah mengembangkan website global untuk bisnis internasional dengan fitur multi-bahasa, memungkinkan pengguna dari berbagai negara mengakses informasi dalam bahasa mereka. Website ini dirancang dengan desain responsif, memastikan tampilan optimal di berbagai perangkat. Selain itu, saya juga mengimplementasikan sistem navigasi yang intuitif, optimasi SEO internasional, serta integrasi dengan alat analitik untuk memantau performa dan engagement pengguna di berbagai wilayah.",
    image: "/business.jpeg",
  },
};

export default function PortfolioDetail() {
  const router = useRouter();
  const { id } = router.query;
  const portfolio = portfolioData[id];

  if (!portfolio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">Profil tidak ditemukan</h1>
        <p className="text-gray-700">Maaf, portofolio yang Anda cari tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-800">{portfolio.title}</h1>
      
      {/* Gambar Portofolio */}
      <div className="mt-4 w-full max-w-lg border-4 border-indigo-600 rounded-lg shadow-lg overflow-hidden">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Deskripsi dengan Justify */}
      <div className="mt-6 max-w-2xl bg-white p-6 border-l-4 border-indigo-600 shadow-lg rounded-lg">
        <p className="text-lg text-gray-700 leading-relaxed text-justify">{portfolio.description}</p>
      </div>

      {/* Tombol kembali */}
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}
