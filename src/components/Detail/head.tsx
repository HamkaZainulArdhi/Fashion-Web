"use client";
import React from 'react';
import Folder from '../Folder/Folder';

const Head: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">EcoFashion Academy – Desain Gaya, Lestarikan Bumi</h1>
        <p className="text-gray-600 mb-6">
         EcoFashion Academy menyediakan kursus online lengkap untuk pemula hingga tingkat lanjutan.
          Kembangkan keterampilan Anda dalam desain fashion berkelanjutan—pelajari teknik ramah lingkungan langsung dari para ahli industri melalui bootcamp ini.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-teal-700 transition">
            Daftar Sekarang
          </button>
          <button className="border border-teal-600 text-teal-600 px-6 py-2 rounded-md hover:bg-teal-50 transition">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 rounded-lg relative">
        <div className="aspect-w-16 aspect-h-9 min-h-[300px] rounded-lg relative">
          <div className="absolute top-0 left-0 w-full px-6 py-4">
             <div className="flex items-center justify-center mt-36">
              <Folder size={3} color="#00d8ff" className="custom-folder z-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
