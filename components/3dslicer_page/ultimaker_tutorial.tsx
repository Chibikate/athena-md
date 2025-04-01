import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: React.ReactNode;
  image?: StaticImageData | null;
  alt: string;
  onClick?: () => void;
}

const UltimakerCard = ({ title, description, image, alt, onClick }: Props) => {
  const [zoomed, setZoomed] = useState(false);
  
  const handleZoom = () => {
    setZoomed(!zoomed);
    if (onClick) onClick();
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-6xl mx-auto bg-white dark:bg-white-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#130e30] mb-4">
            {title}
          </h2>
          
          <div className="text-center text-sm sm:text-base md:text-lg text-[#000000db] mb-6">
            {description}
          </div>
          
          {image && (
            <div className="relative max-w-xl mx-auto">
              <button 
                onClick={handleZoom} 
                className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 text-black rounded-full hover:bg-[#8069ff] focus:outline-none transition-colors"
              >
                +
              </button>
              
              <div 
                className={`relative cursor-pointer overflow-hidden ${zoomed ? 'zoomed' : ''}`} 
                onClick={handleZoom}
              >
                <Image 
                  src={image} 
                  alt={alt} 
                  className="w-full h-auto object-contain" 
                  priority 
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default UltimakerCard;
