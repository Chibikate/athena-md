"use client";

import Navigator from "@/components/course_overview/navigator";
import HeroSection from "@/components/course_overview/hero_section";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection from "@/components/course_overview/objective_section";
import { useEffect, useState } from "react";
import * as datas from "@/data/mandibular/course_data";
import Link from "next/link";
import React, { Suspense } from "react";
import TeamSection from "@/components/course_overview/team_section";

interface Params {
  params: {
    course: string;
  };
}

const dataValues: datas.CourseDataProps = {
  hero: {
    hero: {
      title: "",
      difficulty: "",
      duration: "",
      language: "",
    },
  },
  objectives: {
    objective: {
      objectives: [""],
    },
  },
  to: "",
};

const Home = ({ params }: Params) => {
  const course = params["course"].replaceAll("%20", " ");
  const [content, setContent] = useState("");
  const [data, setData] = useState<datas.CourseDataProps>(dataValues);

  useEffect(() => {
    if (course === "3D slicer interface") {
      setData(datas.slicerInterface);
      setContent("3D slicer Part 1");
    } else if (course === "3D slicer - Adding DICOM datasets") {
      setData(datas.dicomDatasets);
      setContent("3D slicer Part 2");
    } else if (course === "3D slicer - Navigating DICOM display") {
      setContent("3D slicer Part 3");
      setData(datas.dicomDisplay);
    } else if (course === "3D slicer - Basic-Segmentation") {
      setContent("3D slicer Part 4");
      setData(datas.basicSegmentation);
    } else if (course === "3D slicer - Advanced Segmentation-1") {
      setContent("3D slicer Part 5");
      setData(datas.advancedSegmentation1);
    } else if (course === "MeshMixer - Virtual-Surgery") {
      setContent("MeshMixer - Virtual-Surgery");
      setData(datas.MeshMixer);
    } 
  },
  [course]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <Navigator />

        <HeroSection hero={data.hero.hero} />
        <ObjectiveSection objective={data.objectives.objective} />

        <div className="flex flex-col items-center p-3 ">
          <div className="flex flex-row">
            <Link href={`${params["course"]}/${data.to}?content=${content}`}>
              <p className="p-2 rounded-md  text-white hover:font-bold font-bold cursor bg-[#043873] hover-border hover:ring-offset-[#b7d5eb]   hover:ring-2 hover:ring-offset-2">
                Start Learning
              </p>
            </Link>
          </div>
          <Link href="/courses">
            <div className="flex items-center space-x-2 text-[#043873] hover:text-[#0a60b6] mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Lessons</span>
            </div>
          </Link>
        </div>
        <TeamSection/>
        <Footer />
      </section>
    </Suspense>
  );
};

export default Home;
