"use client";
import { useEffect, useState, Suspense, useCallback } from "react"; // Added useCallback
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

  // Wrapped in useCallback
  const goToNextQuestion = useCallback(() => {
    if (index < content.length - 1) {
      setIndex(index + 1);
    }
  }, [index, content.length]);

  // Wrapped in useCallback
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
  }, [goToNextQuestion, goToPreviousQuestion]); // Now these dependencies are stable

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setZoomedImage(null)}
          >
            <div className="relative max-w-[75%] max-h-[75%] w-auto h-auto">
              <Image 
                src={zoomedImage} 
                alt="Zoomed" 
                className="rounded-lg shadow-lg" 
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
        <div>
          <Navigator3 />
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
              href={`/ultimakercourse/${ultimakercourse}`}
              className="w-16 h-16 hover-border hover:border-white-400 hover:border-2 bg-[#160c35] hidden md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
            >
              <ChevronDoubleLeftIcon className="w-8 h-8" />
            </Link>
          )}
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