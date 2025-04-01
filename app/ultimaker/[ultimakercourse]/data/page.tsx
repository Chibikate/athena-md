"use client";
import React, { useEffect, useState, Suspense, useCallback } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/hero_page/footer";
import UltimakerCard from "@/components/3dslicer_page/ultimaker_tutorial";
import Navigator3 from "@/components/course_overview/navigator3";
import {
  printingTutorial1,
  printingTutorial2,
  printingTutorial3,
  printingTutorial4,
} from "@/data/ultimaker";
import { useSearchParams } from "next/navigation";
import { StaticImageData } from "next/image";
import ProgressBar from "@/components/3dslicer_page/progress_bar";

interface Params {
  params: {
    ultimakercourse: string;
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
  const ultimakercourse = params["ultimakercourse"].replaceAll("%20", " ");
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content");
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps[]>(data);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    switch (queryPage) {
      case "3D printing  Part 1":
        setContent(printingTutorial1);
        break;
      case "3D printing  Part 2":
        setContent(printingTutorial2);
        break;
      case "3D printing  Part 3":
        setContent(printingTutorial3);
        break;
      case "3D printing  Part 4":
        setContent(printingTutorial4);
        break;
    }
  }, [queryPage]);

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

  // Reset zoom level when opening a new image
  useEffect(() => {
    if (zoomedImage) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
      
      // Hide scrollbars when zoomed
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrollbars when zoom is closed
      document.body.style.overflow = '';
    }
    
    // Cleanup function to ensure scrollbars are restored
    return () => {
      document.body.style.overflow = '';
    };
  }, [zoomedImage]);

  // Handle zooming
  const handleZoom = useCallback((e: WheelEvent) => {
    if (zoomedImage) {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      const newZoom = Math.max(1, Math.min(5, zoomLevel + delta)); // Limit zoom between 1x and 5x
      setZoomLevel(newZoom);
    }
  }, [zoomedImage, zoomLevel]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (zoomedImage) {
        if (event.key === "Escape") {
          setZoomedImage(null);
        } else if (event.key === "+" || event.key === "=") {
          setZoomLevel(prev => Math.min(5, prev + 0.2));
        } else if (event.key === "-") {
          setZoomLevel(prev => Math.max(1, prev - 0.2));
        }
      } else {
        if (event.key === "ArrowRight") {
          goToNextQuestion();
        } else if (event.key === "ArrowLeft") {
          goToPreviousQuestion();
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleZoom, { passive: false });
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleZoom);
    };
  }, [goToNextQuestion, goToPreviousQuestion, handleZoom, zoomedImage]);

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setDragging(true);
      setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Handle closing the zoomed view
  const handleCloseZoom = (e: React.MouseEvent) => {
    // Only close if clicking the background, not the image
    if (e.target === e.currentTarget) {
      setZoomedImage(null);
    }
  };

  // Function to render the desktop previous button or back link
  const renderDesktopPreviousButton = () => {
    if (index > 0) {
      return (
        <button
          onClick={goToPreviousQuestion}
          className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 hidden md:flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
          aria-label="Previous Question"
        >
          <ChevronDoubleLeftIcon className="w-8 h-8" />
        </button>
      );
    } else if (index === 0) {
      return (
        <Link
          href={`/ultimaker/${ultimakercourse}`}
          className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] hidden md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
          aria-label="Back to Pelvis"
        >
          <ChevronDoubleLeftIcon className="w-8 h-8" />
        </Link>
      );
    }
    return null;
  };

  // Function to render the mobile previous button (only shown when not on first page)
  const renderMobilePreviousButton = () => {
    if (index > 0) {
      return (
        <button
          onClick={goToPreviousQuestion}
          className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 md:hidden flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
          aria-label="Previous Question"
        >
          <ChevronDoubleLeftIcon className="w-8 h-8" />
        </button>
      );
    }
    return null;
  };

  // Function to render the next button (only shown when not on last page)
  const renderNextButton = () => {
    if (index < content.length - 1) {
      return (
        <button
          onClick={goToNextQuestion}
          className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] flex items-center justify-center mx-10 text-white p-4 font-bold rounded-full shadow-lg"
          aria-label="Next Question"
        >
          <ChevronDoubleRightIcon className="w-8 h-8" />
        </button>
      );
    }
    return null;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-move"
            onClick={handleCloseZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white"
                onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.5))}
              >
                -
              </button>
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white"
                onClick={() => setZoomLevel(prev => Math.min(5, prev + 0.5))}
              >
                +
              </button>
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white ml-2"
                onClick={() => setZoomedImage(null)}
              >
                ✕
              </button>
            </div>
            <div className="text-white text-sm absolute bottom-4 left-4">
              Zoom: {Math.round(zoomLevel * 100)}% (Scroll to zoom, drag to pan)
            </div>
            <div 
              className="overflow-hidden select-none"
              style={{
                transform: `scale(${zoomLevel})`,
                transition: dragging ? 'none' : 'transform 0.1s ease-out',
              }}
            >
              <div
                style={{
                  transform: `translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                  transition: dragging ? 'none' : 'transform 0.1s ease-out',
                }}
              >
                <Image 
                  src={zoomedImage} 
                  alt="Zoomed" 
                  className="rounded-lg pointer-events-none"
                  width={1200}
                  height={800}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>
        )}

        
<div className={zoomedImage ? "hidden" : ""}>
          <Navigator3 />
          <ProgressBar currentIndex={index} totalSteps={content.length} />
        </div>
        
        <div className={`flex flex-col md:flex-row items-center justify-center ${zoomedImage ? "hidden" : ""}`}>
          {renderDesktopPreviousButton()}
          
          {index < content.length && (
            <UltimakerCard
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
            {renderMobilePreviousButton()}
            {renderNextButton()}
          </div>
        </div>
        
        <div className={zoomedImage ? "hidden" : ""}>
          <div className="h-[1px] w-full bg-[#FDCC6D]" />
          <Footer />
        </div>
      </section>
    </Suspense>
  );
};


export default Home;