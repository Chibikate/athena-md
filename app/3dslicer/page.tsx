"use client";
import IntroductionPage from "@/components/3dslicer_page/introduction_card";
import { slicerIntroduction, slicerTutorial } from "@/data/3dslicer_data";
import React, { use, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/hero_page/footer";
import Navigator from "@/components/3dslicer_page/navigator";
import TutorialCard from "@/components/3dslicer_page/tutorial_card";

const Home = () => {
  const [index, setIndex] = useState(0);

  const length = slicerIntroduction.length + slicerTutorial.length;

  const goToNextQuestion = () => {
    if (index < length) {
      setIndex(index + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="min-h-screen bg-[#FDF9F4] flex flex-col justify-between pt-2">
      <Navigator />

      <div className="flex flex-row items-center justify-center">
        {index > 0 && (
          <button
            onClick={goToPreviousQuestion}
            className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  
           flex items-center justify-center mx-10 text-black font-bold p-4 rounded-full shadow-lg bg-[#FDCC6D]"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>
        )}
        {index == 0 && (
          <Link
            href={"/mandiweb"}
            onClick={goToPreviousQuestion}
            className="w-16 h-16 hover-border hover:border-white-400 hover:border-2  
          bg-[#FDCC6D] flex items-center justify-center mx-10 p-4 text-black font-bold rounded-full shadow-lg"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </Link>
        )}
        {index < slicerIntroduction.length && (
          <IntroductionPage
            title={slicerIntroduction[index].title}
            description={slicerIntroduction[index].description}
          />
        )}

        {index >= slicerIntroduction.length && (
          <TutorialCard
            title={slicerTutorial[index - slicerIntroduction.length].title}
            description={
              slicerTutorial[index - slicerIntroduction.length].description
            }
            image={slicerTutorial[index - slicerIntroduction.length].image}
            alt={slicerTutorial[index - slicerIntroduction.length].alt}
          />
        )}

        {index < length - 1 && (
          <button
            onClick={goToNextQuestion}
            className="w-16 h-16 hover-border hover:border-white-400 hover:border-2
            bg-[#FDCC6D] flex items-center justify-center mx-10 text-black p-4 font-bold rounded-full shadow-lg"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        )}
      </div>

      <div className="h-[1px] w-full bg-[#FDCC6D] " />
      <Footer />
    </section>
  );
};

export default Home;
