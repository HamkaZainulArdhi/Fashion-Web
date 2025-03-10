import { BadgeCheck } from 'lucide-react';
import React from 'react';

const PriceSection: React.FC = () => {
  return (
    <div id="biaya" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Biaya terjangkau untuk masa depan kamu</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="space-y-4 font-semibold">
          <div className="flex items-start space-x-2">
            <BadgeCheck className="h-5 w-5 text-primary mt-1" />
            <p className="text-sm">Intensive Full-Time Coaching (Senin-Jumat) Secara Online dan Offline</p>
          </div>
          <div className="flex items-start space-x-2">
            <BadgeCheck className="h-5 w-5 text-primary mt-1" />
            <p className="text-sm">Akses Seumur Hidup ke Rekaman Zoom & Materi Pembelajaran</p>
          </div>
          <div className="flex items-start space-x-2">
            <BadgeCheck className="h-5 w-5 text-primary mt-1" />
            <p className="text-sm">Mentorship Eksklusif di Grup Slack dengan Batch Kamu</p>
          </div>
          <div className="flex items-start space-x-2">
            <BadgeCheck className="h-5 w-5 text-primary mt-1" />
            <p className="text-sm">Gratis Course Persiapan Karier di Industri Fashion Berkelanjutan</p>
          </div>
          <div className="flex items-start space-x-2">
            <BadgeCheck className="h-5 w-5 text-primary mt-1" />
            <p className="text-sm">Sertifikat Digital sebagai Bukti Keahlianmu</p>
          </div>
        </div>

          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-2">Dapatkan sekarang</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="line-through text-gray-400">Rp 2.495.000</span>
              <span className="bg-teal-100 text-primary text-xs px-2 py-1 rounded">HEMAT 30%</span>
            </div>
            <div className="text-3xl font-bold text-primary mb-4">Rp 1.495.000</div>
            <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-teal-500 transition">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;