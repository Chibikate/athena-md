import React, { useState, useCallback, useEffect } from "react";
import { StaticImageData } from "next/image";

export interface ContentProps {
  title: string;
  description: React.ReactNode | string;
  image?: StaticImageData | null;
  alt: string;
}

/**
 * Custom hook to manage course content state and navigation
 */
export const useCourseNavigation = (initialContent: ContentProps[]) => {
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps[]>(initialContent);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter content items with images for the lightbox
  const imagesForLightbox = content.filter(item => item.image?.src);

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
    if (lightboxIndex < imagesForLightbox.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  }, [lightboxIndex, imagesForLightbox.length]);

  const goToPreviousImage = useCallback(() => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  }, [lightboxIndex]);

  // Handle closing the lightbox
  const handleCloseLightbox = useCallback((e: React.MouseEvent) => {
    // Only close if clicking the background, not the image
    if (e.target === e.currentTarget) {
      setLightboxOpen(false);
    }
  }, []);

  // Open lightbox with current content index
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

  return {
    index,
    setIndex,
    content,
    setContent,
    lightboxOpen,
    setLightboxOpen,
    lightboxIndex,
    imagesForLightbox,
    goToNextQuestion,
    goToPreviousQuestion,
    goToNextImage,
    goToPreviousImage,
    handleCloseLightbox,
    openLightbox
  };
};