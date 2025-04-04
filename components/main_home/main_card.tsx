import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MainCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
  time: string;
  lesson: string;
  to: string;
  className?: string;
}

const MainCard: React.FC<MainCardProps> = ({ title, description, time, lesson, image, alt, to, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col ${className}`}>
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-[#165388] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center text-xs text-gray-500 space-x-3 mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {time}
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {lesson}
          </div>
        </div>
        
        <div className="mt-auto">
          <Link 
            href={to} 
            className="block w-full text-center bg-[#165388] text-white py-2 rounded-md hover:bg-[#1a64a3] transition-colors duration-300"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCard;