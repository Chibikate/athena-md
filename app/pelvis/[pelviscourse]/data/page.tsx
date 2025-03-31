"use client";
import { useEffect, useState, Suspense, useCallback } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image"; // Added import for Next.js Image component
import Footer from "@/components/hero_page/footer";
import PelvisCard from "@/components/3dslicer_page/pelvis_tutorial";
import Navigator2 from "@/components/course_overview/navigator2";
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
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
          <Navigator2 />
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
              href={`/pelviscourse/${pelviscourse}`}
              className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] hidden md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
            >
              <ChevronDoubleLeftIcon className="w-8 h-8" />
            </Link>
          )}
          {index < content.length && (
            <PelvisCard
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