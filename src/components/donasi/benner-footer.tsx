import React from 'react';
import Link from "next/link";
import { HandCoins } from 'lucide-react';

const BannerFooter: React.FC = () => {
  return (
    <div className="bg-blue-400 ">
      <div className="container mx-auto px-28">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0  md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Berbuat baik setiap hari menjadi lebih mudah</h2>
            <p className="mb-4">Mari Berdonasi Bersama Kami</p>
            <Link href="/error">
              <button className="bg-white hover:bg-gray-100 text-blue-500 px-4 py-2 rounded-lg font-medium flex items-center">
                <HandCoins size={18} className="mr-2" />
                Donasi Sekarang
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72  flex items-center justify-center overflow-hidden">
                <img src="/images/donasi/footer.png" alt="App Screenshot" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFooter;