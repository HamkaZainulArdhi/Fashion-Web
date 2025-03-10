"use client"
import React, { useState } from 'react';

const Video = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Content data for the sections
const sections = [
  {
    id: 0,
    title: "Belajar Kapan Saja, Di Mana Saja",
    description: "Akses kelas online kapan pun sesuai ritme belajarmu. Materi dirancang oleh expert fashion designer yang berpengalaman dalam industri sustainable fashion.",

  },
  {
    id: 1,
    title: "Dapatkan Ilmu Praktis & Langsung Terapkan",
    description: "Pelajari teknik sustainable fashion mulai dari pemilihan bahan, zero-waste cutting, hingga strategi pemasaran brand fashion ramah lingkungan.",
  },
  {
    id: 2,
    title: "Bangun Jaringan Profesional & Kesempatan Karier",
    description: "Terhubung dengan komunitas desainer, mentor industri, serta peluang kerja dan kolaborasi di dunia fashion berkelanjutan.",
  },
  {
    id: 3,
    title: "Bersertifikat & Dapatkan Portofolio Profesional",
    description: "Setiap kursus dilengkapi e-certificate dan proyek nyata yang bisa dimasukkan ke dalam portofoliomu untuk menarik klien atau employer.",
  }
];

  // Handle section change with animation
  const changeSection = (index) => {
    if (isAnimating || index === activeSection) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveSection(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  // Get animation classes
  const getAnimationClass = () => {
    if (!isAnimating) return 'translate-x-0 opacity-100';
    return 'translate-x-full opacity-0';
  };

  return (
    <div className="w-full my-20 rounded-[25px] bg-gradient-to-t from-primary to-teal-600 p-6 max-w-6xl mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
  {/* Desktop layout */}
  <div className="hidden md:flex md:flex-row gap-6">
    <div className="md:w-1/2 md:m-10">
      {sections.map((section, index) => (
        <div 
          key={section.id}
          onClick={() => changeSection(index)}
          className={`border-2 hover:bg-slate-200 bg-white border-blue-400 rounded-lg p-5 mb-4 cursor-pointer transition-all duration-200 ${
            activeSection === index ? 'border-l-8 border-primary shadow-sm' : ''
          }`}
        >
          <h3 className="font-bold text-lg text-gray-800">{section.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{section.description}</p>
        </div>
      ))}
    </div>
    
    {/* Right side - Images with animation - Desktop */}
  
  <div className="md:w-1/2 flex items-center justify-center relative overflow-hidden h-auto">
  <div
    className={`absolute w-full h-full transition-all mt-20 duration-300 ${getAnimationClass()}`}
  >
    {activeSection === 0 && (
      <div className="relative w-full h-auto flex items-center py-14 justify-center">
        <img 
          src="images/eco/benefit-1.png" 
          alt="Certificate display"
          className="w-full h-full object-cover"
        />
      </div>
    )}
    {activeSection === 1 && (
      <div className="relative w-full h-auto flex items-center justify-center">
        <img 
          src="images/eco/benefit-2.png" 
          alt="Certificate display"
          className="w-full h-full object-cover"
        />
      </div>
    )}
    {activeSection === 2 && (
      <div className="relative w-full h-auto flex items-center justify-center">
        <img 
          src="images/eco/benefit-3.png" 
          alt="Certificate display"
          className="w-full h-full object-cover"
        />
        
      </div>
    )}
    {activeSection === 3 && (
      <div className="relative w-full h-auto flex items-center py-14 justify-center">
        <img 
          src="images/eco/benefit-4.png" 
          alt="Certificate display"
          height={400}
          width={500}
          className="w-full h-full object-cover"
        />

      </div>
    )}
    

  </div>
</div>

  </div>

  {/* Mobile layout */}
  <div className="flex flex-col md:hidden">
    {/* 2x2 Grid for sections */}
    <div className="grid grid-cols-2 gap-2 mb-4">
      {sections.map((section, index) => (
        <div 
          key={section.id}
          onClick={() => changeSection(index)}
          className={`border-2 hover:bg-slate-200 bg-white border-blue-400 rounded-lg p-2 cursor-pointer transition-all duration-200 ${
            activeSection === index ? 'border-l-4 border-primary shadow-sm' : ''
          }`}
        >
          <h3 className="font-bold text-sm text-gray-800">{section.title}</h3>
          <p className="text-gray-600 text-xs mt-1">{section.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Video;