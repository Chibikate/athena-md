"use client";
import { useEffect, useState, Suspense } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/hero_page/footer";
import UltimakerCard from "@/components/3dslicer_page/ultimaker_tutorial";
import Navigator from "@/components/course_overview/navigator";
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

interface ContentProps3 {
  title: string;
  description: React.JSX.Element | string;
  image?: StaticImageData | null;
  alt: string;
}

const defaultData: ContentProps3[] = [{ title: "", description: "", image: null, alt: "" }];

const Home = ({ params }: Params) => {
  const ultimakercourse = decodeURIComponent(params?.ultimakercourse || "");
  console.log("UltimakerCourse:", ultimakercourse);

  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content") || "";

  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps3[]>(defaultData);

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
  const goToNext = () => {
    if (index < content.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goToNext();
      else if (event.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, content.length]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        <div>
          <Navigator />
          <ProgressBar currentIndex={index} totalSteps={content.length} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {index > 0 ? (
            <button
              onClick={goToPrevious}
              className="w-16 h-16 hover:border hover:border-white-400 md:flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
          ) : (
            <Link
              href={`/ultimakercourse/${ultimakercourse}`}
              className="w-16 h-16 hover:border hover:border-white-400 bg-[#160c35] md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </Link>
          )}

          {content.length > 0 && (
            <UltimakerCard
              title={content[index]?.title || ""}
              description={content[index]?.description || ""}
              image={content[index]?.image}
              alt={content[index]?.alt || ""}
            />
          )}

          <div className="flex flex-row md:flex-col">
            {index < content.length - 1 && (
              <button
                onClick={goToNext}
                className="w-16 h-16 hover:border hover:border-white-400 bg-[#160c35] flex items-center justify-center mx-10 text-white p-4 font-bold rounded-full shadow-lg"
              >
                <ChevronRightIcon className="w-8 h-8" />
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