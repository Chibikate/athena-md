import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface TutorialCardProps {
  title: string;
  description: React.ReactNode;
  image?: StaticImageData | null;
  alt: string;
  onClick?: () => void;
}

const TutorialCard = ({ title, description, image, alt, onClick }: TutorialCardProps) => {
  return (
    <div className="mb-10 mx-auto max-w-screen-md p-4 md:px-8 md:py-5 bg-white rounded-xl shadow-md">
      <h1 className="font-bold text-2xl md:text-3xl mb-4 text-center text-[#160c35]">{title}</h1>
      <div className="mb-4 text-[#323232]">{description}</div>
      {image && (
        <div 
          className="flex justify-center cursor-pointer transition-transform"
          onClick={onClick}
        >
          <Image
            src={image}
            alt={alt}
            width={800}
            height={400}
            className="rounded-lg object-contain max-h-[400px]"
            priority
            style={{ 
              width: 'auto', 
              height: 'auto',
              maxHeight: '400px'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TutorialCard;
