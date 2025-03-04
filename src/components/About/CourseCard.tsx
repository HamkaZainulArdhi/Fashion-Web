import React from 'react';
import { Video, Users, Star } from 'lucide-react';
import Link from 'next/link';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    category: string;
    videos: number;
    students: number;
    rating: number;
    description: string;
    image: string;
    icon: React.ReactNode;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-blue-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group h-[350px] relative">
      <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1/2">
        <div className="h-56 relative overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            {course.icon}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-sm mb-2">{course.title}</h3>
          <div className=" items-center text-xs text-gray-500 mb-2">
            <span className="flex items-center">
              <Video className="w-3 h-3 mr-1" />
              {course.videos} Video
            </span>
            <div className="flex mt-1 items-center">
              <Users className="w-3 h-3 mr-1" />
              {course.students.toLocaleString()}
            </div>
          </div>
          <div className="flex items-center text-xs">
            <div className="flex text-yellow-400">
              <Star className="w-3 h-3 fill-current" />
              <span className="ml-1">{course.rating}</span>
            </div>
            <span className="ml-auto bg-blue-500 text-white px-2 py-0.5 rounded text-xs">
              {course.id}
            </span>
          </div>
        </div>
        {/* bagian bawah nya */}
        <div className='p-3'>
        <div className="flex-grow overflow-y-auto text-xs text-gray-600">
          <p>{course.description}</p>
        </div>
        <Link href="/about">
          <button className="mt-2 bg-teal-500 text-white text-xs py-1 px-4 rounded-full hover:bg-teal-600 transition-colors">
            View Course
          </button>
        </Link>
      </div>
      </div>
        
    </div>
  );
};

export default CourseCard;