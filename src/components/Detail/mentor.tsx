import React from 'react';
import MentorCard from '@/components/Detail/mentorcard';

export interface MentorCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

const Mentors: React.FC = () => {
  return (
    <div id="mentor" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Mentor expert yang akan membimbing kamu</h2>
     <div>
        <MentorCard 
          name="Hamka Zainul Ardhi"
          position="Sustainable Fashion Strategist & CEO at EcoWear dengan 8+ tahun pengalaman dalam pengembangan mode ramah lingkungan dan berbasis keberlanjutan."
          description="Spesialisasi: Material Berkelanjutan, Circular Fashion"
          image='/images/detail/mentor-1.png'
        />
        <MentorCard 
          name="Avriel Nur Adi Pratama"
          position="Fashion Designer dengan 8+ tahun pengalaman dalam desain pakaian berkelanjutan, menggunakan bahan daur ulang dan teknik produksi yang etis."
          description="Spesialisasi: Eco-Friendly Textile, Ethical Production"
          image='/images/detail/mentor-2.png'
        />
        <MentorCard 
          name="Elwas Raharjo"  
          position="Sustainable Business Consultant dengan 6+ tahun pengalaman dalam pengembangan bisnis mode berkelanjutan dan strategi pemasaran berbasis etika."
          description="Spesialisasi: Green Marketing, Zero Waste Fashion"
          image='/images/detail/mentor-3.png'
        />
      </div>
    </div>
  );
};

export default Mentors;