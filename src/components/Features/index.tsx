
"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Covertext } from '../aceternity/cover';
import { Glare } from '../aceternity/glare-card';
import Link from 'next/link';


const SustainaStyleInteractive = () => {
  const [activeTab, setActiveTab] = useState('elearning');

  const tabContent = {
    elearning: {
      title: <><span className="text-teal-500">Mudah</span> Belajar & Membangun<br />Karier di Sustainable Fashion.</>,
      description: "Permudah para desainer fashion untuk mengakses materi belajar, mengembangkan keterampilan, hingga mendapatkan peluang seperti:",
     features: ["Zero-Waste", "Bahan Organik", "Brand Sustainable", "Kolaborasi"],
      buttonText: "Kunjungi",
      buttonLink: "/", 
      imageSrc: "images/hero/beranda.png"
    },
    marketplace: {
      title: <><span className="text-teal-500">Marketplace</span> Produk<br />Sustainable Fashion.</>,
      description: "Jual dan beli produk sustainable fashion dari berbagai brand lokal yang ramah lingkungan:",
      features: ["Pakaian", "Aksesoris", "Eco-friendly", "Handmade"],
      buttonText: "Belanja Sekarang",
      buttonLink: "/ecommerce", 
      imageSrc: "images/hero/sustainshop.png"
    },
    tukarPakaian: {
      title: <><span className="text-teal-500">Tukar Pakaian</span> Bekas<br />Untuk Lingkungan Lebih Baik.</>,
      description: "Tukarkan pakaian bekas yang masih layak pakai untuk mengurangi limbah tekstil:",
      features: ["Tukar Tambah", "Donasi", "Daur Ulang", "Kredit Poin"],
      buttonText: "Mulai Tukar",
      buttonLink: "/tukar", 
      imageSrc: "images/hero/sustainswap.png"
    },
    challengeReward: {
      title: <><span className="text-teal-500">Challenge & Reward</span><br />Program Sustainability.</>,
      description: "Ikuti tantangan sustainability dan dapatkan reward menarik setiap bulannya:",
      features: ["Zero Waste", "Sustainable Living", "Eco Challenge", "Community Rewards"],
      buttonText: "Ayo Donasi",
      buttonLink: "/donasi", 
      imageSrc: "images/hero/sustaincare.png"
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto p-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      {/* Header */}
      <div className="flex flex-col items-center mb-8" >
        <h1 className="text-3xl font-bold mb-2">
          <Covertext />
        </h1>
        <p className="text-gray-600 text-center">
          Kami menyediakan fitur praktis untuk meningkatkan produktivitasmu di bidang Sustainable Fashion.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button 
          className={`flex items-center justify-center px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'elearning' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
          onClick={() => setActiveTab('elearning')}
        >
          Elearning
        </button>
        <button 
          className={`flex items-center justify-center px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'marketplace' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
          onClick={() => setActiveTab('marketplace')}
        >
          SustainShop
        </button>
        <button 
          className={`flex items-center justify-center px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'tukarPakaian' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
          onClick={() => setActiveTab('tukarPakaian')}
        >
          SustainSwap
        </button>
        <button 
          className={`flex items-center justify-center px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'challengeReward' ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'}`}
          onClick={() => setActiveTab('challengeReward')}
        >
          SustainCare
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex justify-center md:justify-start md:w-1/2 rounded-lg border border-gray-200 shadow-md w-full object-cover" >
        <Glare imageSrc={currentContent.imageSrc} />
        </div>


        <div className="flex flex-col md:w-1/2" >
          <h2 className="text-2xl font-bold mb-4">
            {currentContent.title}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {currentContent.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex">
           <Link href={currentContent.buttonLink}>
            <button className="bg-black text-white px-6 py-2 rounded-md font-medium">
              {currentContent.buttonText}
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainaStyleInteractive;