import React from 'react';
import BenefitCard from '@/components/Detail/benefitcard';

export interface BenefitCard {
  icon: React.ReactNode;
  title: string;
}

const Benefits: React.FC = () => {
  return (
    <div className="py-8" id="benefit">
      <h2 className="text-2xl font-bold mb-6">Benefit yang akan kamu dapatkan jika mengikuti Bootcamp ini</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BenefitCard 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="Akses Selamanya Online Mentoring Live Session"
        />
        <BenefitCard 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="Video Pembelajaran Yang Diupload Setelah Kelas Online"
        />
        <BenefitCard 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="Free Project Online Membantu Portfolio Kamu"
        />
        <BenefitCard 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="Live Technical Coding Session Langkah Pembuatan"
        />
        <BenefitCard 
          icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          title="Sertifikat Digital Setelah Selesai Bootcamp"
        />
      </div>
    </div>
  );
};

export default Benefits;