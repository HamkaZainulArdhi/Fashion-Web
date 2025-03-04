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
          position="Frontend Developer & CEO at WPU dengan 8+ tahun menjalani dunia Front-End Developer, dan sejak 2015, telah membagikan pengetahuan melalui WPU Channel."
          description="Spesialisasi: JavaScript, React"
          image='/images/detail/mentor-1.png'
        />
        <MentorCard 
          name="Hamka Zainul Ardhi"
          position="Frontend Developer dengan 8+ tahun menjalani dunia UI Designer dengan pengalaman terkait pengembangan produk, pendekatan dan Soft-Skill yang dibutuhkan."
          description="Spesialisasi: React Native"
          image='/images/detail/mentor-1.png'
        />
        <MentorCard 
          name="Hamka Zainul Ardhi"
          position="Web Developer & CTO dengan 6+ tahun menjalani Progressive Developer, membuat custom integration dengan Eloqua sebagai Platinum Partner Eloqua."
          description="Spesialisasi: JavaScript, Node.js"
          image='/images/detail/mentor-1.png'
        />
      </div>
    </div>
  );
};

export default Mentors;