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
  }, [index, goToNextQuestion, goToPreviousQuestion]); // Added missing dependencies


  return (
     <Suspense fallback={<div>Loading...</div>}>
       <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
         {zoomedImage && (
           <div
             className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
             onClick={() => setZoomedImage(null)}
           >
             {/* Using Next.js Image component for zoomed image view */}
             <div className="relative max-w-3/4 max-h-3/4 w-auto h-auto">
               <Image 
                 src={zoomedImage} 
                 alt="Zoomed" 
                 className="rounded-lg shadow-lg" 
                 fill
                 style={{ objectFit: 'contain' }}
                 sizes="(max-width: 768px) 100vw, 75vw"
                 priority
               />
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
              description={<div className="text-justify">{content[index].description}</div>}
              image={content[index].image}
              alt={content[index].alt}
              onClick={() => content[index].image && setZoomedImage(content[index].image.src)}
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
