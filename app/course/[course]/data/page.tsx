"use client";
import React, { useEffect, useState, Suspense, useCallback } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
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
import ProgressBar from "@/components/3dslicer_page/progress_bar";

interface Params {
  params: {
    course: string;
  };
}

interface ContentProps {
  title: string;
  description: React.JSX.Element | string;
  image?: StaticImageData | null;
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

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_SPEED = 0.1;

const Home = ({ params }: Params) => {
  const course = params["course"].replaceAll("%20", " ");
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content");
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps[]>(data);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  // Initialize pinch-to-zoom states
  const [initialDistance, setInitialDistance] = useState<number | null>(null);
  const [initialZoom, setInitialZoom] = useState(1);

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
      default:
        setContent([]);
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
      
      // Preload image to get dimensions
      const img = new window.Image();
      img.src = zoomedImage;
      // Using destructuring to avoid unused variable warning
      img.onload = () => {
        // We don't use the dimensions, but they could be used in future implementations
        // const { width, height } = img;
      };
      
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

  // Handle zooming with wheel
  const handleZoom = useCallback((e: WheelEvent) => {
    if (zoomedImage) {
      e.preventDefault();
      
      // Calculate position relative to the image
      const container = e.currentTarget as HTMLElement;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate zoom direction and new level
      const delta = e.deltaY < 0 ? ZOOM_SPEED : -ZOOM_SPEED;
      const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomLevel + delta));
      
      // Only proceed if zoom level actually changed
      if (newZoom !== zoomLevel) {
        // Calculate how much the position needs to be adjusted to keep 
        // the point under the cursor fixed during zoom
        const zoomRatio = newZoom / zoomLevel;
        
        // Adjust position to keep the point under cursor fixed
        const newPosition = {
          x: x - (x - position.x) * zoomRatio,
          y: y - (y - position.y) * zoomRatio
        };
        
        setZoomLevel(newZoom);
        setPosition(newPosition);
      }
    }
  }, [zoomedImage, zoomLevel, position]);

// Handle keyboard navigation
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (zoomedImage) {
      if (event.key === "Escape") {
        setZoomedImage(null);
      } else if (event.key === "+" || event.key === "=") {
        setZoomLevel(prev => Math.min(MAX_ZOOM, prev + ZOOM_SPEED));
      } else if (event.key === "-") {
        setZoomLevel(prev => Math.max(MIN_ZOOM, prev - ZOOM_SPEED));
      }
    } else if (event.key === "ArrowRight") {
      goToNextQuestion();
    } else if (event.key === "ArrowLeft") {
      goToPreviousQuestion();
    }
  };
  
  window.addEventListener("keydown", handleKeyDown);
  
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [goToNextQuestion, goToPreviousQuestion, zoomedImage]);

  // Set up wheel event listener with proper cleanup
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => handleZoom(e);
    
    if (zoomedImage) {
      window.addEventListener("wheel", wheelHandler, { passive: false });
    }
    
    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [zoomedImage, handleZoom]);

  // Helper function to calculate distance between two touch points
  const getDistance = (touches: React.TouchList) => {
    return Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );
  };

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setDragging(true);
      setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault(); // Prevent other events like image selection
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

  // Touch events for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Handle pinch start
      e.preventDefault();
      setInitialDistance(getDistance(e.touches));
      setInitialZoom(zoomLevel);
    } else if (zoomLevel > 1 && e.touches.length === 1) {
      setDragging(true);
      setStartPosition({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
      e.preventDefault();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistance !== null) {
      // Handle pinch movement
      e.preventDefault();
      const currentDistance = getDistance(e.touches);
      const scale = currentDistance / initialDistance;
      const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, initialZoom * scale));
      setZoomLevel(newZoom);
    } else if (dragging && zoomLevel > 1 && e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - startPosition.x,
        y: e.touches[0].clientY - startPosition.y
      });
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    setInitialDistance(null);
  };

  // Handle closing the zoomed view
  const handleCloseZoom = (e: React.MouseEvent) => {
    // Only close if clicking the background, not the image
    if (e.target === e.currentTarget) {
      setZoomedImage(null);
    }
  };

  // Button zoom functions
  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(MAX_ZOOM, prev + ZOOM_SPEED * 5));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(MIN_ZOOM, prev - ZOOM_SPEED * 5));
  }, []);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, []);

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
          href={`/course/${course}`}
          className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] hidden md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
          aria-label="Back to Course"
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
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={handleCloseZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white text-xl font-bold w-10 h-10 flex items-center justify-center"
                onClick={zoomOut}
                aria-label="Zoom Out"
              >
                -
              </button>
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white text-xl font-bold w-10 h-10 flex items-center justify-center"
                onClick={zoomIn}
                aria-label="Zoom In"
              >
                +
              </button>
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white ml-2 text-xl font-bold w-10 h-10 flex items-center justify-center"
                onClick={resetZoom}
                aria-label="Reset Zoom"
              >
                ↺
              </button>
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white ml-2 text-xl font-bold w-10 h-10 flex items-center justify-center"
                onClick={() => setZoomedImage(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="text-white text-sm absolute bottom-4 left-4 bg-black bg-opacity-50 p-2 rounded">
              Zoom: {Math.round(zoomLevel * 100)}% 
              <span className="hidden sm:inline"> (Scroll to zoom, drag to pan)</span>
              <span className="inline sm:hidden"> (Pinch to zoom, drag to pan)</span>
            </div>
            <div 
              className={`overflow-hidden select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
              }}
            >
              <div
                style={{
                  transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                  transformOrigin: 'center',
                  transition: dragging ? 'none' : 'transform 0.05s ease-out',
                }}
              >
                <Image 
                  src={zoomedImage} 
                  alt="Zoomed" 
                  className="rounded-lg pointer-events-none"
                  width={1200}
                  height={800}
                  unoptimized={true}
                  priority={true}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Main content - only visible when not zoomed */}
        <div className={zoomedImage ? "hidden" : ""}>
          <Navigator />
          <ProgressBar currentIndex={index} totalSteps={content.length} />
        </div>
        
        <div className={`flex flex-col md:flex-row items-center justify-center ${zoomedImage ? "hidden" : ""}`}>
          {renderDesktopPreviousButton()}
          
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