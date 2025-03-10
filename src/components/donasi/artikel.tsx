"use client";
import React, { useState } from 'react';

interface Article {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
}

const DonationArticle: React.FC = () => {
  // Define 4 specific categories for clothing donations
  const categories = [
    "Laporan Donasi", 
    "Program Rutin", 
    "Kolaborasi", 
    "Cerita Penerima"
  ];

  // Sample article data with 5 articles per category
  const allArticles: Article[] = [
    // Laporan Donasi (5 articles)
    {
      id: 1,
      title: "Peduli Palestina, Sustianstyle Salurkan Infak dan pakaian siap pakai",
      category: "Laporan Donasi",
      imageUrl: "/images/donasi/palestina.jpg",
      date: "2024-03-05",
    },
    {
      id: 2,
      title: "Distribusi Pakaian Anak & Perlengkapan Sekolah di Papua",
      category: "Laporan Donasi",
      imageUrl: "/images/donasi/papua.jpeg",
      date: "2024-02-28",
    },
    {
      id: 3,
      title: "Laporan Donasi Pakaian untuk Panti Asuhan",
      category: "Laporan Donasi",
      imageUrl: "/images/donasi/panti-lapor.jpg",
      date: "2024-02-15",
    },
    {
      id: 4,
      title: "Penyaluran Pakaian kepada masyarakat Yang terkena banjir bekasi",
      category: "Laporan Donasi",
      imageUrl: "/images/donasi/banjir.jpg",
      date: "2024-02-10",
    },
    
    // Program Rutin (5 articles)
    {
      id: 5,
      title: "Program Donasi Seragam Sekolah Bulanan untuk Siswa Prasejahtera",
      category: "Program Rutin",
      imageUrl: "/images/donasi/seragam.jpg",
      date: "2024-01-05",
    },
    {
      id: 6,
      title: "Jadwal Pengumpulan Pakaian Rutin di Kota Jakarta Tahun 2024",
      category: "Program Rutin",
      imageUrl: "/images/donasi/jadwal.jpg",
      date: "2024-01-03",
    },
    {
      id: 7,
      title: "Program Rutin Donasi Pakaian untuk Panti Asuhan",
      category: "Program Rutin",
      imageUrl: "/images/donasi/panti.jpg",
      date: "2023-12-28",
    },
    {
      id: 8,
      title: "Kegiatan Bulanan Sortir dan Distribusi Pakaian Layak Pakai",
      category: "Program Rutin",
      imageUrl: "/images/donasi/sortir.jpg",
      date: "2023-12-15",
    },
    
    // Kolaborasi (5 articles)
    {
      id: 9,
      title: "Kerjasama dengan Komunitas Jahit untuk Daur Ulang Pakaian Donasi",
      category: "Kolaborasi",
      imageUrl: "/images/donasi/sortir.jpg",
      date: "2024-02-20",
    },
    {
      id: 10,
      title: "Kolaborasi dengan Mall Jakarta untuk Pengumpulan Donasi Pakaian",
      category: "Kolaborasi",
      imageUrl: "/images/donasi/panti-lapor.jpg",
      date: "2024-02-10",
    },
    {
      id: 11,
      title: "Partnership dengan Ekspedisi untuk Pengiriman Donasi ke Daerah Terpencil",
      category: "Kolaborasi",
      imageUrl: "/images/donasi/papua.jpeg",
      date: "2023-02-25",
    },
    
    // Cerita Penerima (5 articles)
    {
      id: 12,
      title: "Sukacita Anak-anak Panti Asuhan Menerima Pakaian Baru",
      category: "Cerita Penerima",
      imageUrl: "/images/donasi/papua.jpeg",
      date: "2024-02-20",
    },
    {
      id: 13,
      title: "Daftar Penerima Donasi Pakaian  di tahun 2024",
      category: "Cerita Penerima",
      imageUrl: "/images/donasi/jadwal.jpg",
      date: "2025-02-25",
    },
    {
      id: 14,
      title: " cerita Keluarga Penerima Donasi Pakaian Pasca Bencana",
      category: "Cerita Penerima",
      imageUrl: "/images/donasi/banjir.jpg",
      date: "2025-02-15",
    },
    {
      id: 15,
      title: "Cerita Sukses: Dari Penerima Bantuan Menjadi Relawan Aktif",
      category: "Cerita Penerima",
      imageUrl: "/images/donasi/papua.jpeg",
      date: "2023-02-10",
    }
  ];

  // Get one article per category for initial display
  const featuredArticles: Article[] = categories.map(category => {
    return allArticles.find(article => article.category === category) || allArticles[0];
  });

  // State for the active category filter
  const [activeCategory, setActiveCategory] = useState("");
  
  // Function to format date to display in Indonesian format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  // Get articles to display based on selected category
  const displayArticles = activeCategory === "" 
    ? featuredArticles 
    : allArticles.filter(article => article.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg font-medium text-gray-800">Artikel & laporan donasi</h1>
          <a href="#" className="text-primary hover:text-blue-500 flex items-center text-sm">
            Lihat lainnya
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Category buttons - flatter style */}
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === activeCategory ? "" : category)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Article grid - wider and flatter */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {displayArticles.map((article) => (
            <div key={article.id} className="flex flex-col rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
              <a href="/blog-sidebar" className="block">
                <div className="w-full">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="object-cover w-full h-32"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-medium text-gray-900 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {formatDate(article.date)}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationArticle;