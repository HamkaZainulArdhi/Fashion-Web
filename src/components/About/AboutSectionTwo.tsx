"use client";
import React, { useState } from 'react';
import CourseCard from '@/components/About/CourseCard';
import { Video, Users, Star, Bookmark, Code, BarChart, FileSpreadsheet, Paintbrush, Coffee, Book } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: string;
  videos: number;
  students: number;
  rating: number;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const AboutSectionTwo = () => {
 
  const categories = [
    "Fashion Berkelanjutan",
    "Desain & Produksi Fashion",
    "Green Bisnis & Marketing",
    "Ekonomi Sirkular",
  ];


  const [selectedCategory, setSelectedCategory] = useState("Fashion Berkelanjutan");

  const courses: Course[] = [
  
    {
      id: 1,
      title: "Pengenalan Sustainable Fashion",
      category: "Fashion Berkelanjutan",
      videos: 5,
      students: 7603,
      rating: 4.7,
      description: "Memahami konsep fashion berkelanjutan dan dampaknya terhadap lingkungan serta sosial dalam industri model.",
      image: "/api/placeholder/400/320",
      icon: <Bookmark className="w-10 h-10 text-blue-500" />
    },
    {
      id: 2,
      title: "Memilih Bahan Ramah Lingkungan",
      category: "Fashion Berkelanjutan",
      videos: 9,
      students: 5980,
      rating: 4.8,
      description: "Mengenal kain organik, daur ulang, dan alternatif ramah lingkungan untuk mengurangi limbah tekstil.",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-green-500" />
    },
    {
      id: 3,
      title: "Slow Fashion vs. Fast Fashion",
      category: "Fashion Berkelanjutan",
      videos: 5,
      students: 54894,
      rating: 4.8,
      description: "Perbedaan konsumsi bertanggung jawab (slow fashion) dan dampak negatif dari produksi cepat (fast fashion).",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-red-500" />
    },
    {
      id: 4,
      title: "Teknik Pewarnaan Eco-Friendly",
      category: "Fashion Berkelanjutan",
      videos: 3,
      students: 3776,
      rating: 4.5,
      description: "Menggunakan pewarna alami dan teknik ramah lingkungan untuk mengurangi polusi air dan tanah.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-yellow-500" />
    },
    {
      id: 5,
      title: "Sertifikasi dan Standar Sustainable Fashion",
      category: "Fashion Berkelanjutan",
      videos: 7,
      students: 8925,
      rating: 4.6,
      description: "Mengenal sertifikasi seperti GOTS, OEKO-TEX, dan Fair Trade untuk memastikan keberlanjutan produk fashion.",
      image: "/api/placeholder/400/320",
      icon: <Bookmark className="w-10 h-10 text-indigo-500" />
    },
    
    // Data Science Courses
    {
      id: 6,
      title: "Teknik Zero-Waste Pattern",
      category: "Desain & Produksi Fashion",
      videos: 4,
      students: 1455,
      rating: 4.3,
      description: "Membuat pola pakaian dengan meminimalkan sisa kain agar tidak terbuang sia-sia.",
      image: "/api/placeholder/400/320",
      icon: <Code className="w-10 h-10 text-purple-500" />
    },
    {
      id: 7,
      title: "Upcycling & Daur Ulang Pakaian",
      category: "Desain & Produksi Fashion",
      videos: 8,
      students: 3245,
      rating: 4.7,
      description: "Mengubah pakaian bekas menjadi desain baru yang kreatif dan lebih bernilai.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-blue-700" />
    },
    {
      id: 8,
      title: "Inovasi Tekstil Berkelanjutan",
      category: "Desain & Produksi Fashion",
      videos: 12,
      students: 2876,
      rating: 4.6,
      description: "Mengenal material inovatif seperti kain dari jamur, nanas, dan serat daur ulang.",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-teal-500" />
    },
    {
      id: 9,
      title: "Desain Digital & 3D Fashion",
      category: "Desain & Produksi Fashion",
      videos: 15,
      students: 4532,
      rating: 4.8,
      description: "Menggunakan teknologi 3D untuk mengurangi limbah produksi dan mendesain pakaian secara digital.",
      image: "/api/placeholder/400/320",
      icon: <Code className="w-10 h-10 text-orange-500" />
    },
    {
      id: 10,
      title: "Manajemen Rantai Pasok Etis",
      category: "Desain & Produksi Fashion",
      videos: 6,
      students: 1987,
      rating: 4.4,
      description: "Mengelola produksi secara adil, transparan, dan ramah lingkungan dalam industri fashion.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-purple-700" />
    },
    
    // Microsoft Excel Courses
    {
      id: 11,
      title: "Membangun Brand Fashion Berkelanjutan",
      category: "Green Bisnis & Marketing",
      videos: 10,
      students: 12453,
      rating: 4.9,
      description: "Strategi membangun bisnis fashion yang ramah lingkungan dan memiliki nilai keberlanjutan.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-green-700" />
    },
    {
      id: 12,
      title: "Memahami Konsumen Peduli Lingkungan",
      category: "Green Bisnis & Marketing",
      videos: 8,
      students: 7824,
      rating: 4.7,
      description: "Mengetahui preferensi konsumen yang mendukung fashion berkelanjutan untuk strategi pemasaran.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-blue-500" />
    },
    {
      id: 13,
      title: "Strategi Green Marketing",
      category: "Green Bisnis & Marketing",
      videos: 7,
      students: 5629,
      rating: 4.6,
      description: "Menggunakan pemasaran berbasis keberlanjutan untuk meningkatkan daya tarik produk fashion hijau.",
      image: "/api/placeholder/400/320",
      icon: <Paintbrush className="w-10 h-10 text-red-600" />
    },
    {
      id: 14,
      title: "Harga & Biaya dalam Sustainable Fashion",
      category: "Green Bisnis & Marketing",
      videos: 6,
      students: 4231,
      rating: 4.5,
      description: "Menentukan harga produk dengan mempertimbangkan bahan, etika produksi, dan keberlanjutan.",
      image: "/api/placeholder/400/320",
      icon: <Book className="w-10 h-10 text-indigo-600" />
    },
    {
      id: 15,
      title: "Kolaborasi & Kemitraan Berkelanjutan",
      category: "Green Bisnis & Marketing",
      videos: 9,
      students: 6547,
      rating: 4.8,
      description: "Berkolaborasi dengan komunitas dan brand lain untuk memperkuat bisnis fashion berkelanjutan.",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-emerald-600" />
    },
    
    // UI-UX Courses
    {
      id: 16,
      title: "Konsep Circular Fashion",
      category: "Ekonomi Sirkular",
      videos: 8,
      students: 3762,
      rating: 4.7,
      description: "Mengembangkan produk fashion yang dapat digunakan kembali atau didaur ulang dalam sistem sirkular.",
      image: "/api/placeholder/400/320",
      icon: <Users className="w-10 h-10 text-purple-600" />
    },
    {
      id: 17,
      title: "Pasar Sewa & Fashion Second-Hand",
      category: "Ekonomi Sirkular",
      videos: 10,
      students: 5843,
      rating: 4.8,
      description: "Memanfaatkan model bisnis penyewaan dan fashion bekas untuk mengurangi limbah tekstil.",
      image: "/api/placeholder/400/320",
      icon: <Paintbrush className="w-10 h-10 text-pink-500" />
    },
    {
      id: 18,
      title: "Kain Biodegradable & Kompos",
      category: "Ekonomi Sirkular",
      videos: 12,
      students: 7921,
      rating: 4.9,
      description: "Menggunakan bahan yang dapat terurai alami untuk mengurangi jejak karbon fashion.",
      image: "/api/placeholder/400/320",
      icon: <Paintbrush className="w-10 h-10 text-blue-600" />
    },
    {
      id: 19,
      title: "Perawatan & Perbaikan Pakaian",
      category: "Ekonomi Sirkular",
      videos: 9,
      students: 4532,
      rating: 4.6,
      description: "Memperpanjang umur pakaian melalui perawatan dan teknik perbaikan sederhana.",
      image: "/api/placeholder/400/320",
      icon: <Bookmark className="w-10 h-10 text-orange-500" />
    },
    {
      id: 20,
      title: "Kebijakan & Regulasi Sustainable Fashion",
      category: "Ekonomi Sirkular",
      videos: 7,
      students: 3245,
      rating: 4.7,
      description: "Memahami regulasi dan kebijakan yang mendukung industri fashion berkelanjutan.",
      image: "/api/placeholder/400/320",
      icon: <Code className="w-10 h-10 text-teal-600" />
    },

  ];


  const filteredCourses = courses.filter(course => course.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-3 -mt-8" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <h1 className="text-2xl font-bold text-center mb-2">Ratusan Skill Impian Kini Dalam Genggamanmu</h1>
      <p className="text-center mb-6">Lihat contoh beberapa materi terpopuler rancangan experts berikut. Materi baru setiap bulan tanpa tambahan biaya.</p>
      
      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition-colors duration-200`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Course grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AboutSectionTwo;