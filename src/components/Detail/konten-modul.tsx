import React from 'react';
import CourseModule from './modul'; 

export interface CourseModuleProps {
  number: number;
  title: string;
  duration: string;
  level: string;
  topics: string[];
  image: string;
}


const CourseModules: React.FC = () => {
  return (
    <div id="kurikulum" className="py-8">
      <h2 className="text-2xl font-bold mb-2">Materi yang akan kamu pelajari selama bootcamp</h2>
      
      <CourseModule 
        number={1}
        title="Pengenalan Fashion Berkelanjutan"
        duration="Minggu 1 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Beginner-Intermediate"
        topics={["Prinsip Dasar Fashion Ramah Lingkungan", "Material Berkelanjutan", "Dampak Industri Fashion", "Tren Fashion Berkelanjutan"]}
        image='/images/detail/iconmodul-1.png'
      />
      
      <CourseModule 
        number={2}
        title="Teknik Desain Fashion Ramah Lingkungan"
        duration="Minggu 2 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Intermediate"
        topics={["Zero Waste Pattern Making", "Upcycling dan Recycling", "Desain Modular", "Teknik Pewarnaan Alami"]}
        image='/images/detail/iconmodul-2.png'
      />
      
      <CourseModule 
        number={3}
        title="Pengelolaan Limbah dan Daur Ulang"
        duration="Minggu 3 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Intermediate-Advanced"
        topics={["Manajemen Limbah Tekstil", "Strategi Circular Fashion", "Inovasi Bahan Ramah Lingkungan", "Implementasi di Industri"]}
        image='/images/detail/iconmodul-3.png'
      />
      
      <CourseModule 
        number={4}
        title="Etika dan Keberlanjutan dalam Industri Fashion"
        duration="Minggu 4 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Intermediate-Advanced"
        topics={["Etika Produksi Fashion", "Sertifikasi dan Standar Berkelanjutan", "Transparansi Rantai Pasok", "Dampak Sosial dan Ekonomi"]}
        image='/images/detail/iconmodul-4.png'
      />
      
      <CourseModule 
        number={5}
        title="Teknik Digital Fashion Design"
        duration="Minggu 5 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Intermediate-Advanced"
        topics={["Desain Fashion dengan Software 3D", "Simulasi Material Berkelanjutan", "Teknik Rendering", "Virtual Fashion Show"]}
        image='/images/detail/iconmodul-5.png'
      />
      
      <CourseModule 
        number={6}
        title="Strategi Bisnis Fashion Berkelanjutan"
        duration="Minggu 6 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Intermediate"
        topics={["Model Bisnis Fashion Berkelanjutan", "Branding dan Pemasaran", "Membangun Identitas Merek", "E-commerce dan Digital Marketing"]}
        image='/images/detail/iconmodul-6.png'
      />
      
      <CourseModule 
        number={7}
        title="Fashion Teknologi dan Inovasi"
        duration="Minggu 7 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Intermediate"
        topics={["Smart Textiles", "Fashion Tech Wearable", "Blockchain dalam Fashion", "Internet of Things (IoT) di Fashion"]}
        image='/images/detail/iconmodul-7.png'
      />
      
      <CourseModule 
        number={8}
        title="Pembuatan Prototipe Koleksi Ramah Lingkungan"
        duration="Minggu 8 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Intermediate-Advanced"
        topics={["Perancangan Koleksi Sustainable", "Presentasi Desain", "Pembuatan Prototipe Digital"]}
        image='/images/detail/iconmodul-8.png'
      />
      
      <CourseModule 
        number={9}
        title="Mini Project & Q&A"
        duration="Minggu 9 - (JAM 19.30 - 21.30) | 2x pertemuan"
        level="Advanced"
        topics={["Persiapan Final Project", "Review dan Sesi Tanya Jawab"]}
        image='/images/detail/iconmodul-9.png'
      />
    </div>
  );
};

export default CourseModules;