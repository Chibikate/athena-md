import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: React.JSX.Element | string;
  image: StaticImageData | null | undefined;
  alt: string;
}

const UltimakerCard = ({ title, description, image, alt }: Props) => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className="flex flex-col justify-center ml-40 mr-40 text-black">
      <div className="flex flex-col items-center justify-center dark:bg-white">
        <p className="p-4 text-center font-bold text-md md:text-4xl rounded-lg text-[#130e30]">
          {title}
        </p>
        <p className="text-center flex-col sm:pt-14 p-7 sm:text-lg text-[#000000db]">
          {description}
        </p>
        {image !== null && image !== undefined && (
          <div className="relative">
            <button onClick={handleZoom} className="absolute top-0 right-0 z-10 p-2 bg-gray-200   text-black rounded-full hover:bg-[#8069ff] focus:outline-none">
              +
            </button>
            <div className={`relative cursor-pointer ${zoomed ? 'zoomed' : ''}`} onClick={handleZoom}>
              <Image src={image} alt={alt} className="cursor-pointer" />
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .zoomed img {
          transform: scale(2); /* Adjust the zoom level as needed */
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default UltimakerCard;
