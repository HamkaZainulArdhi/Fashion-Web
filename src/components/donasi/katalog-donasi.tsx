import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface DonationCardProps {
  title: string;
  collected: number; // Sekarang angka
  target: number; // Sekarang angka
  daysLeft: number;
  imageUrl: string;
  category: string;
  isUrgent?: boolean;
}

const DonationCard: React.FC<DonationCardProps> = ({
  title,
  collected,
  target,
  daysLeft,
  imageUrl,
  category,
  isUrgent = false
}) => {
  const progress = Math.min((collected / target) * 100, 100); // Maksimal 100%

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
      {/* Image Container */}
      <div className="relative">
        <Link href="/donasi-detail" className="block">
          <div className="h-48 bg-gray-200 relative">
            <img 
              src={imageUrl} 
              alt="foto" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-full text-xs flex items-center">
              <Tag size={12} className="mr-1" />
              {category}
            </div>
            {isUrgent && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                Mendesak
              </div>
            )}
          </div>
        </Link>
      </div>

      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 text-base line-clamp-2">
          {title}
        </h3>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2 mb-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all" 
            style={{ width: `${progress}%` }} 
          ></div>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-primary">
            Terkumpul {collected} pakaian
          </span>
          <span className="text-gray-500 text-xs flex items-center">
            <Clock size={12} className="mr-1" />
            {daysLeft} hari lagi
          </span>
        </div>

        <div className="text-gray-500 text-xs">
          Butuh {target} pakaian
        </div>
      </div>
    </div>
  );
};

const KatalogDonasi: React.FC = () => {
  return (
    <div className="w-full">
      {/* Section: Donasi Utama */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Mari Berdonasi Bersama SustainStyle</h2>
          <button className="text-sm text-blue-500 flex items-center">
            Lihat Semua <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DonationCard 
            title="Pakaian Layak Pakai untuk Pengungsi" 
            collected={70} 
            target={200}
            daysLeft={15}
            imageUrl="/images/detaildonasi/1.jpg"
            category="Kemanusiaan"
          />
          <DonationCard 
            title="Seragam Sekolah untuk Anak Yatim" 
            collected={50} 
            target={120}
            daysLeft={12}
            imageUrl="/images/detaildonasi/2.jpg"
            category="Pendidikan"
          />
          <DonationCard 
            title="Jaket Hangat untuk Anak Jalanan" 
            collected={30} 
            target={80}
            daysLeft={8}
            imageUrl="/images/detaildonasi/3.jpg"
            category="Sosial"
          />
        </div>
      </div>

      {/* Section: Kampanye Lainnya */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Kampanye Lainnya</h2>
          <button className="text-sm text-blue-500 flex items-center">
            Lihat Semua <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DonationCard 
            title="Pakaian Bayi dan balita untuk Panti Asuhan" 
            collected={40} 
            target={100}
            daysLeft={23}
            imageUrl="/images/detaildonasi/4.jpg"
            category="Kesehatan"
            isUrgent={true}
          />
          <DonationCard 
            title="Pakaian Sekolah untuk Anak-anak Pedalaman" 
            collected={25} 
            target={60}
            daysLeft={19}
            imageUrl="/images/detaildonasi/5.jpg"
            category="Pendidikan"
          />
          <DonationCard 
            title="Sepatu Sekolah untuk Anak Kurang Mampu" 
            collected={15} 
            target={50}
            daysLeft={27}
            imageUrl="/images/detaildonasi/6.jpg"
            category="Sosial"
          />
        </div>
      </div>
    </div>
  );
};

export default KatalogDonasi;
