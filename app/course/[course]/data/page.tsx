"use client";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
} from "@/data";
import { useSearchParams } from "next/navigation";
import { StaticImageData } from "next/image";
import { Suspense } from "react";
import ProgressBar from "@/components/3dslicer_page/progress_bar";

interface Params {
  params: {
    course: string;
  };
}

interface ContentProps {
  title: string;
  description: React.JSX.Element | string;
  image?: null | StaticImageData | undefined;
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

/// mao ni sya nag pag fetch sa data//
const Home = ({ params }: Params) => {
  const course = params["course"].replaceAll("%20", " ");
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content");

  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps[]>(data);

  /// mao nani sya magpakita ang data sa 5 ka module sa slicer pero wala pani nato gi tawag para ma display and data
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

  const goToNextQuestion = () => {
    console.log(index);
    if (index < content.length) {
      setIndex(index + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

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
  }, [index]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        <Navigator />
        <ProgressBar currentIndex={index} totalSteps={content.length} />
        <div className="flex flex-col md:flex-row items-center justify-center ">
          {index > 0 && (
            <button
              onClick={goToPreviousQuestion}
              className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  
          hidden md:flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35] "
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
          )}

          {index == 0 && (
            <Link
              href={`/course/${course}`}
              onClick={goToPreviousQuestion}
              className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  
            bg-[#160c35] hidden md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </Link>
          )}

          {index < content.length && (
            <TutorialCard
              title={content[index].title}
              description={content[index].description}
              image={content[index].image}
              alt={content[index].alt}
            />
          )}
          <div className="flex flex-row md:flex-col">
            {index > 0 && (
              <button
                onClick={goToPreviousQuestion}
                className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  
           md:hidden flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </button>
            )}

            {index == 0 && (
              <Link
                href={`/course/${course}`}
                onClick={goToPreviousQuestion}
                className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  
            bg-[#160c35] md:hidden flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
              >
                <ChevronLeftIcon className="w-8 h-8 " />
              </Link>
            )}

            {index < content.length - 1 && (
              <button
                onClick={goToNextQuestion}
                className="w-16 h-16 hover-border hover:border-white-400 hover:border-2
          bg-[#160c35] flex items-center justify-center mx-10 text-white p-4 font-bold rounded-full shadow-lg"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>

        <div>
          <div className="h-[1px] w-full bg-[#FDCC6D] " />
          <Footer />
        </div>
      </section>
    </Suspense>
  );
};

export default Home;
