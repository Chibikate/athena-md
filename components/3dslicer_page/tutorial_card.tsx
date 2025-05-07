import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface TutorialCardProps {
  title: string;
  description: React.ReactNode;
  image?: StaticImageData | null;
  alt: string;
  onClick?: () => void;
}

const TutorialCard = ({ title, description, image, alt, onClick }: TutorialCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="mb-10 mx-auto max-w-screen-md p-4 md:px-8 md:py-5 bg-white rounded-xl shadow-md">
      <h1 className="font-bold text-2xl md:text-3xl mb-4 text-center text-[#160c35]">{title}</h1>
      <div className="mb-4 text-[#323232]">{description}</div>
      {image && (
        <div 
          className="relative flex justify-center group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={onClick}
        >
          <Image
            src={image}
            alt={alt}
            width={800}
            height={400}
            className="rounded-lg object-contain max-h-[400px] transition-all duration-300 cursor-pointer"
            priority
            style={{ 
              width: 'auto', 
              height: 'auto',
              maxHeight: '400px'
            }}
          />
          
          {/* Zoom overlay - similar to pelvis_tutorial.tsx */}
          <div 
            className={`
              absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 
              flex items-center justify-center rounded-lg
              ${isHovering ? 'opacity-100' : 'opacity-0'}
            `}
            aria-hidden="true"
          >
            <div className="bg-white/80 p-2 rounded-full">
              <MagnifyingGlassIcon className="h-8 w-8 text-gray-800" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialCard;
