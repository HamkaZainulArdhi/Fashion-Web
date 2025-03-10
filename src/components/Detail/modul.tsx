import Image from 'next/image';
import React from 'react';

interface CourseModuleProps {
  number: number;
  title: string;
  duration: string;
  level: string;
  topics: string[];
  image: string;
}

const CourseModule: React.FC<CourseModuleProps> = ({ 
  number, 
  title, 
  duration, 
  level, 
  topics,
  image,
}) => {
  
  return (
    <div className="mb-8 p-3 border-2 border-gray-200 rounded-xl">
      <div className="flex justify-between items-start ">
        <h3 className="text-lg font-bold">{number}. {title}</h3>
        <img src={image} alt="modul" className={`w-12 h-13 flex items-center justify-center font-bold rounded-lg`}>
        </img>
      </div>
      <div className="text-sm text-gray-600 mb-2">
        <p>Durasi: {duration}</p>
        <p>Level: {level}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-sm">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModule;
