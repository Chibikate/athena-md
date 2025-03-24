"use client";
import { useEffect, useState, Suspense } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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

interface ContentProps2 {
  title: string;
  description: React.JSX.Element | string;
  image?: StaticImageData | null | undefined;
  alt: string;
}

const defaultData: ContentProps2[] = [
  { title: "", description: "", image: null, alt: "" },
];

const Home = ({ params }: Params) => {
  const pelviscourse = decodeURIComponent(params?.pelviscourse || "");
  console.log("PelvisCourse:", pelviscourse);

  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content");

  const [index, setIndex] = useState(0);
  const [content, setContent] = useState<ContentProps2[]>(defaultData);

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
    setIndex(0); // Reset index when content changes
  }, [queryPage]);

  // Navigation handlers
  const goToNext = () => {
    if (index < content.length - 1) setIndex((prev) => prev + 1);
  };

  const goToPrevious = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  // Listen for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goToNext();
      else if (event.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="min-h-screen bg-[#FEFCFA] flex flex-col justify-between overflow-x-hidden">
        <div>
          <Navigator />
          <ProgressBar currentIndex={index} totalSteps={content.length} />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left Navigation Button */}
          {index > 0 ? (
            <button
              onClick={goToPrevious}
              className="w-16 h-16 hover:border hover:border-white-400 hidden md:flex items-center justify-center mx-10 text-white font-bold p-4 rounded-full shadow-lg bg-[#160c35]"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>
          ) : (            <Link
          href={`/pelviscourse/${pelviscourse}`}
          className="w-16 h-16 hover:border hover:border-white-400 bg-[#160c35] md:flex items-center justify-center mx-10 p-4 text-white font-bold rounded-full shadow-lg"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </Link>
      )}

      {content.length > 0 && (
        <PelvisCard
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