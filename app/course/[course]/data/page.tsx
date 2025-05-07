"use client";
import React, { useEffect, useState, Suspense, useCallback, useRef } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
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

const initialData: ContentProps[] = [
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
  const lightboxRef = useRef<HTMLDivElement>(null);
  
  // Zoom functionality states
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps[]>(initialData);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  
  // Filter content items with images for the lightbox
  const imagesForLightbox = content.filter(item => item.image?.src);

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

  // Memoize navigation functions with useCallback
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

  // Reset zoom and position
  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Lightbox navigation functions with zoom reset
  const goToNextImage = useCallback(() => {
    if (lightboxIndex < imagesForLightbox.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
      resetZoom();
    }
  }, [lightboxIndex, imagesForLightbox.length, resetZoom]);

  const goToPreviousImage = useCallback(() => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
      resetZoom();
    }
  }, [lightboxIndex, resetZoom]);

  // Open lightbox with proper index
  const openLightbox = useCallback((contentIndex: number) => {
    // Find all content items with images
    const imagesWithSrc = content.filter(item => item.image?.src);
    
    // Find index in filtered array that matches the content index
    const imageIndex = imagesWithSrc.findIndex(
      item => item.image?.src === content[contentIndex].image?.src
    );
    
    if (imageIndex !== -1) {
      setLightboxIndex(imageIndex);
      setLightboxOpen(true);
    }
  }, [content]);

  // Handle closing the lightbox
  const handleCloseLightbox = useCallback((e: React.MouseEvent) => {
    // Only close if clicking the background, not the image
    if (e.target === e.currentTarget) {
      setLightboxOpen(false);
      resetZoom();
    }
  }, [resetZoom]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.25, 5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 0.25, 0.5);
      if (newZoom <= 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  }, []);

  // Image panning functions
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  }, [zoomLevel, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
  }, [isDragging, zoomLevel, startPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle wheel for zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    }
  }, [handleZoomIn, handleZoomOut]);

  // Add mouse up event to window
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // Enhanced keyboard navigation for both content and lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxOpen) {
        if (event.key === "Escape") {
          setLightboxOpen(false);
          resetZoom();
        } else if (event.key === "ArrowRight") {
          goToNextImage();
        } else if (event.key === "ArrowLeft") {
          goToPreviousImage();
        } else if (event.key === "+" || event.key === "=") {
          handleZoomIn();
        } else if (event.key === "-") {
          handleZoomOut();
        } else if (event.key === "0") {
          resetZoom();
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
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    lightboxOpen,
    goToNextImage,
    goToPreviousImage,
    goToNextQuestion,
    goToPreviousQuestion,
    handleZoomIn,
    handleZoomOut,
    resetZoom
  ]);

  // Handle body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Function to render the desktop previous button or back link
  const renderDesktopPreviousButton = () => {
    // Always show the button, change functionality based on index
    return (
      <button
        onClick={index > 0 ? goToPreviousQuestion : () => window.location.href = `/course/${course}`}
        className={`w-16 h-16 hover-border hover:border-white-400 hover:border-2 hidden md:flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]`}
        aria-label={index > 0 ? "Previous Question" : "Back to Course"}
      >
        <ChevronDoubleLeftIcon className="w-8 h-8" />
      </button>
    );
  };

  // Function to render the mobile previous button (always shown)
  const renderMobilePreviousButton = () => {
    // If on first page, link back to course overview
    if (index === 0) {
      return (
        <Link
          href={`/course/${course}`}
          className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 md:hidden flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
          aria-label="Back to Course"
        >
          <ChevronDoubleLeftIcon className="w-8 h-8" />
        </Link>
      );
    }

    // If not on first page, show previous button
    return (
      <button
        onClick={goToPreviousQuestion}
        className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 md:hidden flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
        aria-label="Previous Question"
      >
        <ChevronDoubleLeftIcon className="w-8 h-8" />
      </button>
    );
  };

  // Function to render the next button (always shown, disabled on last page)
  const renderNextButton = () => {
    const isLastPage = index >= content.length - 1;

    return (
      <button
        onClick={!isLastPage ? goToNextQuestion : undefined}
        className={`w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] flex items-center justify-center mx-10 text-white p-4 font-bold rounded-full shadow-lg ${
          isLastPage ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLastPage}
        aria-label={isLastPage ? "Last Question" : "Next Question"}
      >
        <ChevronDoubleRightIcon className={`w-8 h-8 ${isLastPage ? "opacity-50" : ""}`} />
      </button>
    );
  };

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FEFCFA]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 bg-[#160c35] rounded-full mb-4 opacity-50"></div>
          <div className="text-[#160c35] text-lg">Loading content...</div>
        </div>
      </div>
    }>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        {/* Enhanced Lightbox with Zoom Controls */}
        {lightboxOpen && imagesForLightbox.length > 0 && (
          <div
            ref={lightboxRef}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col z-50 overflow-hidden"
            onClick={handleCloseLightbox}
            onWheel={handleWheel}
          >
            {/* Top bar with close button and title */}
            <div className="flex items-center justify-between p-3 border-b border-gray-700">
              <div className="flex items-center text-white">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(false);
                    resetZoom();
                  }}
                  className="p-2 rounded-full hover:bg-gray-700 text-white flex items-center justify-center"
                  aria-label="Close"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
                <span className="ml-3 text-sm sm:text-base font-medium truncate max-w-md">
                  {imagesForLightbox[lightboxIndex]?.title}
                </span>
              </div>
              
              <div className="hidden sm:flex items-center text-white text-sm">
                <span>Image {lightboxIndex + 1} of {imagesForLightbox.length}</span>
              </div>
            </div>
            
            {/* Main image area with navigation arrows */}
            <div 
              className="flex-1 flex items-center justify-center relative overflow-hidden"
              style={{ cursor: isDragging ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'default') }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onClick={e => e.stopPropagation()}
            >
              {/* Left arrow - positioned correctly to not overlap image */}
              <button 
                className={`absolute left-4 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 ${
                  lightboxIndex > 0 ? "opacity-70 hover:opacity-100" : "opacity-30 cursor-not-allowed"
                } rounded-full p-2 sm:p-3 text-white z-20`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (lightboxIndex > 0) goToPreviousImage();
                }}
                aria-label="Previous Image"
                disabled={lightboxIndex === 0}
              >
                <ArrowLeftIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  lightboxIndex === 0 ? "opacity-50" : "opacity-100"
                }`} />
              </button>
              
              {/* Image container with padding to avoid overlap with controls */}
              <div className="relative max-w-[80%] max-h-[80vh]">
                {imagesForLightbox[lightboxIndex]?.image?.src && (
                  <Image 
                    src={imagesForLightbox[lightboxIndex].image?.src || ""}
                    alt={imagesForLightbox[lightboxIndex].alt || "Image"}
                    className="max-h-[80vh] w-auto object-contain transition-transform duration-200"
                    style={{ 
                      transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                      transformOrigin: 'center center',
                    }}
                    width={1200}
                    height={800}
                    unoptimized={true}
                    priority={true}
                    draggable="false"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>
              
              {/* Right arrow - positioned correctly to not overlap image */}
              <button 
                className={`absolute right-4 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 ${
                  lightboxIndex < imagesForLightbox.length - 1 ? "opacity-70 hover:opacity-100" : "opacity-30 cursor-not-allowed"
                } rounded-full p-2 sm:p-3 text-white z-20`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (lightboxIndex < imagesForLightbox.length - 1) goToNextImage();
                }}
                aria-label="Next Image"
                disabled={lightboxIndex >= imagesForLightbox.length - 1}
              >
                <ArrowRightIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  lightboxIndex >= imagesForLightbox.length - 1 ? "opacity-50" : "opacity-100"
                }`} />
              </button>
            </div>
            
            {/* Bottom controls with zoom */}
            <div className="p-3 bg-black/80 flex items-center justify-center">
              <div className="bg-gray-800 rounded-full flex items-center px-3 py-1">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomOut();
                  }}
                  className="text-white p-2 opacity-80 hover:opacity-100 disabled:opacity-40"
                  disabled={zoomLevel <= 0.5}
                  aria-label="Zoom Out"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <div className="flex items-center mx-2">
                  <MagnifyingGlassIcon className="h-4 w-4 mr-1 text-white" />
                  <span className="text-white text-xs">{Math.round(zoomLevel * 100)}%</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomIn();
                  }}
                  className="text-white p-2 opacity-80 hover:opacity-100 disabled:opacity-40"
                  disabled={zoomLevel >= 5}
                  aria-label="Zoom In"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetZoom();
                  }}
                  className="ml-2 text-white text-xs px-2 py-1 rounded opacity-80 hover:opacity-100 hover:bg-gray-700"
                  aria-label="Reset Zoom"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={lightboxOpen ? "hidden" : ""}>
          <Navigator />
          <ProgressBar currentIndex={index} totalSteps={content.length} />
        </div>

        <div className={`flex flex-col md:flex-row items-center justify-center ${lightboxOpen ? "hidden" : ""}`}>
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
                if (content[index].image?.src) {
                  openLightbox(index);
                }
              }}
            />
          )}
          <div className="flex flex-row md:flex-col">
            {renderMobilePreviousButton()}
            {renderNextButton()}
          </div>
        </div>

        <div className={lightboxOpen ? "hidden" : ""}>
          <div className="h-[1px] w-full bg-[#FDCC6D]" />
          <Footer />
        </div>
      </section>
    </Suspense>
  );
};

export default Home;