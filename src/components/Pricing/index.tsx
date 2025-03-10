"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isMiddleCardHovered, setIsMiddleCardHovered] = useState(false);
  
  const cards = [
    {
      id: 1,
      title: '12 Bulan',
      subtitle: 'PAKET VIDEO E-LEARNING',
      originalPrice: 'Rp 2.000.000',
      price: 'Rp 179.000',
      periodText: 'Untuk akses semua, setara Rp 14.916 / bulan',
      features: [
        '1400+ Materi Video',
        '1400+ Modul Praktik Portfolio',
        'Sertifikat di Tiap Materi',
        'Grup Komunitas',
        'FREE 6-12x Webinar Series',
        'Diskon untuk Bootcamp'
      ],
      buttonText: 'Mulai Berlangganan',
      secondaryText: 'Segera Habis',
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: '6 Bulan',
      subtitle: 'PAKET VIDEO E-LEARNING',
      originalPrice: 'Rp 1.250.000',
      price: 'Rp 99.000',
      periodText: 'Untuk akses semua, setara Rp 16.500 / bulan',
      features: [
        '1400+ Materi Video',
        '1400+ Modul Praktik Portfolio',
        'Sertifikat di Tiap Materi',
        'Grup Komunitas',
        'FREE 6-12x Webinar Series',
        'Diskon untuk Bootcamp'
      ],
      buttonText: 'Mulai Berlangganan',
      secondaryText: 'Segera Habis',
      bgColor: 'bg-primary',
      textColor: 'text-white',
      popular: true
    },
    {
      id: 3,
      title: '1 Bulan',
      subtitle: 'PAKET VIDEO E-LEARNING',
      originalPrice: 'Rp 400.000',
      price: 'Rp 29.000',
      periodText: 'Untuk akses semua, setara Rp 7.250 / minggu',
      features: [
        '1400+ Materi Video',
        '1400+ Modul Praktik Portfolio',
        'Sertifikat di Tiap Materi',
        'Grup Komunitas'
      ],
      buttonText: 'Mulai Berlangganan',
      secondaryText: 'Segera Habis',
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-teal-100 p-6 rounded-lg" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800">Langganan Sekarang dan Jadi Lebih Hebat</h2>
        <p className="text-gray-600 text-sm mt-1">Langganan bulanan untuk akses semua materi, tanpa batas. Makin lama, makin hemat dan untung banyak.</p>
      </div>

      <div className="flex items-start justify-center gap-4 flex-col md:flex-row md:px-8">
        {/*  Card kiri */}
        <div className="w-full md:w-1/3 md:self-start md:mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <div className={`${cards[0].bgColor} ${cards[0].textColor} p-4`}>
              <h3 className="text-xl font-bold">{cards[0].title}</h3>
              <p className="text-xs mb-2">{cards[0].subtitle}</p>
              
              <div className="mb-2">
                <p className="text-xs line-through opacity-80">{cards[0].originalPrice}</p>
                <p className="text-3xl font-bold">{cards[0].price}</p>
                <p className="text-xs mt-1">{cards[0].periodText}</p>
              </div>
            </div>
            
            <div className="p-4">
              <ul className="space-y-3 mb-6">
                {cards[0].features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check size={18} className="text-teal-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className="w-full py-2 rounded-lg font-medium transition-colors bg-blue-500 text-white hover:bg-blue-600">
                  {cards[0].buttonText}
                </button>
                
                <div className="text-center mt-3">
                  <span className="text-xs font-medium text-primary inline-flex items-center">
                    {cards[0].secondaryText} 
                    <svg className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="w-full md:w-1/3 z-10 md:-mt-4 relative"
          onMouseEnter={() => setIsMiddleCardHovered(true)}
          onMouseLeave={() => setIsMiddleCardHovered(false)}
        >
          <div 
            className={`absolute inset-0 bg-primary rounded-lg transition-all duration-300 ease-in-out ${
              isMiddleCardHovered ? 'opacity-100 -right-2 -left-2 -bottom-2 -top-2' : 'opacity-0'
            }`}
          ></div>
          
          {/* Main card tengah*/}
          <div className="relative">
            <div className={`bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col transition-transform duration-300 ${
              isMiddleCardHovered ? 'transform -translate-y-2' : ''
            }`}>
              <div className={`${cards[1].bgColor} ${cards[1].textColor} p-4 `}>
                <h3 className="text-xl font-bold">{cards[1].title}</h3>
                <p className="text-xs mb-2">{cards[1].subtitle}</p>
                
                <div className="mb-2">
                  <p className="text-xs line-through opacity-80">{cards[1].originalPrice}</p>
                  <p className="text-3xl font-bold">{cards[1].price}</p>
                  <p className="text-xs mt-1">{cards[1].periodText}</p>
                </div>
              </div>
              
              <div className="p-4">
                <ul className="space-y-3 mb-6">
                  {cards[1].features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Check size={18} className="text-teal-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <button className="w-full py-2 rounded-lg font-medium transition-colors bg-primary text-white hover:bg-teal-600">
                    {cards[1].buttonText}
                  </button>
                  
                  <div className="text-center mt-3">
                    <span className="text-xs font-medium text-primary inline-flex items-center">
                      {cards[1].secondaryText} 
                      <svg className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card kanan */}
        <div className="w-full md:w-1/3 md:self-start md:mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <div className={`${cards[2].bgColor} ${cards[2].textColor} p-4`}>
              <h3 className="text-xl font-bold">{cards[2].title}</h3>
              <p className="text-xs mb-2">{cards[2].subtitle}</p>
              
              <div className="mb-2">
                <p className="text-xs line-through opacity-80">{cards[2].originalPrice}</p>
                <p className="text-3xl font-bold">{cards[2].price}</p>
                <p className="text-xs mt-1">{cards[2].periodText}</p>
              </div>
            </div>
            
            <div className="p-4">
              <ul className="space-y-4 py-6 mb-6">
                {cards[2].features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check size={18} className="text-teal-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <button className="w-full py-2 rounded-lg font-medium transition-colors bg-blue-500 text-white hover:bg-blue-600">
                  {cards[2].buttonText}
                </button>
                
                <div className="text-center mt-3">
                  <span className="text-xs font-medium text-teal-500 inline-flex items-center">
                    {cards[2].secondaryText} 
                    <svg className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;