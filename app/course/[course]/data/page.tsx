"use client";
import { useEffect, useState, Suspense, useCallback } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/hero_page/footer";
import TutorialCard from "@/components/3dslicer_page/tutorial_card";
import Navigator from "@/components/course_overview/navigator";
import {
  slicerTutorial1,
  slicerTutorial2,
  slicerTutorial3,
  slicerTutorial4,
  slicerTutorial5,
  MeshTutorial,
} from "@/data/mandibular";
import { useSearchParams } from "next/navigation";
import { StaticImageData } from "next/image";
import ProgressBar from "@/components/3dslicer_page/progress_bar";

interface Params {
  params: {
    course: string;
  };
}

interface ContentProps {
  title: string;
  description: React.JSX.Element | string;
  image?: StaticImageData | null | undefined;
  alt: string;
}

const data: ContentProps[] = [
  {
    title: "",
    description: "",
    image: null,
    alt: "",
  },
];

const Home = ({ params }: Params) => {
  const course = params["course"].replaceAll("%20", " ");
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content");
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps[]>(data);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    switch (queryPage) {
      case "3D slicer Part 1":
        setContent(slicerTutorial1);
        break;
      case "3D slicer Part 2":
        setContent(slicerTutorial2);
        break;
      case "3D slicer Part 3":
        setContent(slicerTutorial3);
        break;
      case "3D slicer Part 4":
        setContent(slicerTutorial4);
        break;
      case "3D slicer Part 5":
        setContent(slicerTutorial5);
        break;
      case "MeshMixer - Virtual-Surgery":
        setContent(MeshTutorial);
        break;
    }
  }, [queryPage]);

  // Memoize navigation functions with useCallback to avoid recreating them on every render
  const goToNextQuestion = useCallback(() => {
    if (index < content.length - 1) {
      setIndex(index + 1);
    }
  }, [index, content.length]);

  const goToPreviousQuestion = useCallback(() => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }, [index]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNextQuestion();
      } else if (event.key === "ArrowLeft") {
        goToPreviousQuestion();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, goToNextQuestion, goToPreviousQuestion]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 5));
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 0.5, 0.5);
      if (newZoom === 0.5) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset position and zoom when changing images
  useEffect(() => {
    if (!zoomedImage) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [zoomedImage]);

  // Add mouse up event to window to handle cases when mouse is released outside the image
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        {zoomedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center text-white">
                <button 
                  onClick={handleCloseZoom}
                  className="mr-4 p-2 rounded-full hover:bg-gray-700"
                >
                  ✕
                </button>
                <span className="text-sm">{content[index].title}</span>
              </div>
              <div className="flex items-center">
                <button className="text-white p-2 rounded-full hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 3a2 2 0 012-2h10a2 2 0 012 2v1h-2V3H5v1H3V3zm12 10V7H5v6h10zm0 2H5v1a2 2 0 002 2h6a2 2 0 002-2v-1zm2-8v8a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h6a4 4 0 014 4z" />
                  </svg>
                </button>
                <button className="text-white p-2 rounded-full hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4.5 4.5a.5.5 0 00-1 0v11a.5.5 0 001 0v-11zm3 0a.5.5 0 00-1 0v11a.5.5 0 001 0v-11zm5 0a.5.5 0 00-1 0v11a.5.5 0 001.0v-11zm3 0a.5.5 0 00-1 0v11a.5.5 0 001 0v-11z" />
                  </svg>
                </button>
                <button className="text-white p-2 ml-2 rounded-full hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9V5a1 1 0 112 0v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Main image area - using Next.js Image component */}
            <div 
              className="flex-1 flex items-center justify-center overflow-hidden"
              style={{ cursor: isDragging ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'default') }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <div className="relative">
                {/* We keep the img tag here for the zoomed version since we need the transform styles */}
                <Image 
                  src={zoomedImage} 
                  alt="Zoomed" 
                  className="max-h-full max-w-full object-contain transition-transform duration-200"
                  style={{ 
                    transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                    transformOrigin: 'center center',
                  }}
                  draggable="false"
                />
              </div>
            </div>
            
            {/* Bottom controls - improved with current zoom level display */}
            <div className="p-3 bg-black flex items-center justify-center">
              <div className="bg-gray-800 rounded-full flex items-center px-3 py-1">
                <button 
                  onClick={handleZoomOut}
                  className="text-white p-2 opacity-80 hover:opacity-100"
                  disabled={zoomLevel <= 0.5}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <div className="flex items-center mx-2">
                  <MagnifyingGlassIcon className="h-4 w-4 mr-1 text-white" />
                  <span className="text-white text-xs">{Math.round(zoomLevel * 100)}%</span>
                </div>
                <button 
                  onClick={handleZoomIn}
                  className="text-white p-2 opacity-80 hover:opacity-100"
                  disabled={zoomLevel >= 5}
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
        <div>
          <Navigator />
          <ProgressBar currentIndex={index} totalSteps={content.length} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {index > 0 && (
            <button
              onClick={goToPreviousQuestion}
              className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hidden md:flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
            >
              <ChevronDoubleLeftIcon className="w-8 h-8" />
            </button>
          )}
          {index == 0 && (
            <Link
              href={`/course/${course}`}
              className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] hidden md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
            >
              <ChevronDoubleLeftIcon className="w-8 h-8" />
            </Link>
          )}
          {index < content.length && (
            <TutorialCard
              title={content[index].title}
              description={
                <div className="text-justify">{content[index].description}</div>
              }
              image={content[index].image}
              alt={content[index].alt}
              onClick={() => {
                const imageSrc = content[index].image?.src;
                if (imageSrc) setZoomedImage(imageSrc);
              }}
            />
          )}
          <div className="flex flex-row md:flex-col">
            {index > 0 && (
              <button
                onClick={goToPreviousQuestion}
                className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 md:hidden flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
              >
                <ChevronDoubleLeftIcon className="w-8 h-8" />
              </button>
            )}
            {index < content.length - 1 && (
              <button
                onClick={goToNextQuestion}
                className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] flex items-center justify-center mx-10 text-white p-4 font-bold rounded-full shadow-lg"
              >
                <ChevronDoubleRightIcon className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
        <div>
          <div className="h-[1px] w-full bg-[#FDCC6D]" />
          <Footer />
        </div>
      </section>
    </Suspense>
  );
};

export default Home;