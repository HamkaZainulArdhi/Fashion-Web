import React from 'react';

const PriceSection: React.FC = () => {
  return (
    <div id="biaya" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Biaya terjangkau untuk masa depan kamu</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <svg className="h-5 w-5 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm">Full Time Intensive Coaching (Expect Monday-Friday) Online</p>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="h-5 w-5 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm">Akses Selamanya Video Record Zoom dan Materi Video</p>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="h-5 w-5 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm">Akses Mentorship Grup Slack Platform Batch Kamu</p>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="h-5 w-5 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm">Mendapatkan Career Preparation Course Gratis</p>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="h-5 w-5 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-sm">Sertifikat Digital Setelah Selesai Bootcamp</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-2">Dapatkan sekarang</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="line-through text-gray-400">Rp 695.000</span>
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">HEMAT 30%</span>
            </div>
            <div className="text-3xl font-bold text-teal-600 mb-4">Rp 495.000</div>
            <button className="w-full bg-teal-600 text-white py-3 rounded-md font-medium hover:bg-teal-700 transition">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;