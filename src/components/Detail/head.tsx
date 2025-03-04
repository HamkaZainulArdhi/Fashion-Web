import React from 'react';

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
      <div className="w-full md:w-1/2 bg-gray-200 rounded-lg relative">
        <div className="aspect-w-16 aspect-h-9 min-h-[300px] rounded-lg relative">
          {/* Image placeholder - you'll add your own */}
          <div className="absolute top-0 right-0 bg-white p-2 rounded-full m-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 12h14M12 5l7 7-7 7" 
              />
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-full px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="text-teal-600">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">SustainStyle</span>
            </div>
            <h2 className="text-xl font-bold mt-2">EcoFashion Academy – Desain Gaya, Lestarikan Bumi</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
