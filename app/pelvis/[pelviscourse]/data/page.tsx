"use client";
import React, { useEffect, useState, Suspense, useCallback } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/hero_page/footer";
import PelvisCard from "@/components/3dslicer_page/pelvis_tutorial";
import Navigator from "@/components/course_overview/navigator";
import {
  slicerTutorial6,
  slicerTutorial7,
  slicerTutorial8,
  slicerTutorial9,
  slicerTutorial10,
  MeshTutorial2,
} from "@/data/pelvis";
import { useSearchParams } from "next/navigation";
import { StaticImageData } from "next/image";
import ProgressBar from "@/components/3dslicer_page/progress_bar";

interface Params {
  params: {
    pelviscourse: string;
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
  const pelviscourse = params["pelviscourse"].replaceAll("%20", " ");
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content");
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps[]>(data);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  useEffect(() => {
    switch (queryPage) {
      case "3D slicer Pelvis C1":
        setContent(slicerTutorial6);
        break;
      case "3D slicer Pelvis C2":
        setContent(slicerTutorial7);
        break;
      case "3D slicer Pelvis C3":
        setContent(slicerTutorial8);
        break;
      case "3D slicer Pelvis C4":
        setContent(slicerTutorial9);
        break;
      case "3D slicer Pelvis C5":
        setContent(slicerTutorial10);
        break;
      case "MeshMixer2 - Pelvis Virtual-Surgery":
        setContent(MeshTutorial2);
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

  // Lightbox navigation
  const goToNextImage = useCallback(() => {
    const imagesWithSrc = content.filter(item => item.image?.src);
    if (lightboxIndex < imagesWithSrc.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  }, [lightboxIndex, content]);

  const goToPreviousImage = useCallback(() => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  }, [lightboxIndex]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxOpen) {
        if (event.key === "Escape") {
          setLightboxOpen(false);
        } else if (event.key === "ArrowRight") {
          goToNextImage();
        } else if (event.key === "ArrowLeft") {
          goToPreviousImage();
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
  }, [goToNextQuestion, goToPreviousQuestion, lightboxOpen, goToNextImage, goToPreviousImage]);

  // When opening lightbox
  useEffect(() => {
    if (lightboxOpen) {
      // Hide scrollbars when lightbox is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrollbars when lightbox is closed
      document.body.style.overflow = '';
    }
    
    // Cleanup function to ensure scrollbars are restored
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Handle closing the lightbox
  const handleCloseLightbox = (e: React.MouseEvent) => {
    // Only close if clicking the background, not the image
    if (e.target === e.currentTarget) {
      setLightboxOpen(false);
    }
  };

  // Open lightbox with current content index
  const openLightbox = (contentIndex: number) => {
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
  };

  // Filter content items with images for the lightbox
  const imagesForLightbox = content.filter(item => item.image?.src);

  // Function to render the desktop previous button or back link
  const renderDesktopPreviousButton = () => {
    // Always show the button, change functionality based on index
    return (
      <button
        onClick={index > 0 ? goToPreviousQuestion : () => window.location.href = `/pelvis/${pelviscourse}`}
        className={`w-16 h-16 hover-border hover:border-white-400 hover:border-2 hidden md:flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]`}
        aria-label={index > 0 ? "Previous Question" : "Back to Pelvis"}
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
          href={`/pelvis/${pelviscourse}`}
          className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 md:hidden flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
          aria-label="Back to Pelvis"
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
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        {lightboxOpen && imagesForLightbox.length > 0 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={handleCloseLightbox}
          >
            <div className="absolute top-4 right-4 z-10">
              <button 
                className="bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 text-white text-xl font-bold w-10 h-10 flex items-center justify-center"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              {/* Left arrow - Always shown, disabled on first image */}
              <button 
                className={`absolute left-2 sm:left-4 md:left-8 bg-black ${
                  lightboxIndex > 0 ? "bg-opacity-50 hover:bg-opacity-70" : "bg-opacity-30 cursor-not-allowed"
                } rounded-full p-2 text-white z-10`}
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
              
              {/* Image */}
              <div className="max-w-4xl max-h-[80vh] px-4">
                <Image 
                  src={imagesForLightbox[lightboxIndex].image?.src || ""}
                  alt={imagesForLightbox[lightboxIndex].alt}
                  className="rounded-lg max-h-[80vh] w-auto object-contain"
                  width={1200}
                  height={800}
                  unoptimized={true}
                  priority={true}
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Caption */}
                <div className="text-center text-white mt-4 px-4">
                  {imagesForLightbox[lightboxIndex].title}
                </div>
              </div>
              
              {/* Right arrow - Always shown, disabled on last image */}
              <button 
                className={`absolute right-2 sm:right-4 md:right-8 bg-black ${
                  lightboxIndex < imagesForLightbox.length - 1 ? "bg-opacity-50 hover:bg-opacity-70" : "bg-opacity-30 cursor-not-allowed"
                } rounded-full p-2 text-white z-10`}
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
            
            {/* Image counter */}
            <div className="absolute bottom-4 text-white text-center w-full">
              {lightboxIndex + 1} / {imagesForLightbox.length}
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
            <PelvisCard
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