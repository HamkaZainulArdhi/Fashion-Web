import React from 'react';
import { Linkedin } from 'lucide-react';

interface MentorCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, image, position, description }) => {
  return (
    <div className="flex gap-4 mb-6 border-2 rounded-xl p-4 bg-blue-50">
    <div className="relative w-36 h-44 flex-shrink-0">
  {/* Gambar Mentor */}
  <img 
    src={image} 
    alt="Mentor" 
    className="w-full h-full object-contain"
  />

  {/* Efek Blur + Gradient di bawah */}
  <div className="absolute bottom-[-15px] left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent blur-md"></div>
</div>

      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{position}</p>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-2">
          <a href="https://www.linkedin.com/in/mentor-profile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-slate-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;