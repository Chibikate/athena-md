"use client";

import Navigator2 from "@/components/course_overview/navigator2";
import HeroSection2 from "@/components/course_overview/hero_section2";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection2 from "@/components/course_overview/objective_section2";
import React, { useEffect, useState, Suspense } from "react";
import * as datas from "@/data/pelvis/pelvis_data";
import Link from "next/link";
import TeamSection2 from "@/components/course_overview/team_section2";

interface Params {
  params: {
    pelviscourse: string;
  };
}

const defaultData: datas.CourseDataProps2 = {
  hero: { hero: { title: "", difficulty: "", duration: "", language: "" } },
  objectives: { objective: { objectives: [""] } },
  to: "",
};

const Home = ({ params }: Params) => {
  const pelviscourse = params["pelviscourse"].replaceAll("%20", " ");
  const [content, setContent] = useState("");
  const [data, setData] = useState<datas.CourseDataProps2>(defaultData);

  useEffect(() => {
    // Using nullish coalescing operator (??) instead of logical OR (||)
    const courseName = pelviscourse ?? "";
    
    if (courseName === "3D slicer Pelvis - Interface") {
      setContent("3D slicer Pelvis C1");
      setData(datas.pelvisInterface);
    } else if (courseName === "3D slicer Pelvis - AddDICOM") {
      setContent("3D slicer Pelvis C2");
      setData(datas.pelvisAddDICOM);
    } else if (courseName === "3D slicer Pelvis - Navigating DICOM") {
      setContent("3D slicer Pelvis C3");
      setData(datas.pelvisdicomDisplay);
    } else if (courseName === "3D slicer Pelvis - Basic-Segmentation") {
      setContent("3D slicer Pelvis C4");
      setData(datas.pelvisbasicSegmentation);
    } else if (courseName === "3D slicer Pelvis - Advanced Segmentation-1") {
      setContent("3D slicer Pelvis C5");
      setData(datas.pelvisadvancedSegmentation1);
    } else if (courseName === "MeshMixer2 - Pelvis Virtual-Surgery") {
      setContent("MeshMixer2 - Pelvis Virtual-Surgery");
      setData(datas.MeshMixer2);
    }
  }, [pelviscourse]);

  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen" role="status">
        <span className="sr-only">Loading...</span>
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    }>
      <main className="min-h-screen">
        <Navigator2 />
        <HeroSection2 hero={data.hero.hero} />
        <ObjectiveSection2 objective={data.objectives.objective} />

        <section className="flex flex-col items-center p-10" aria-labelledby="course-actions">
          <h2 id="course-actions" className="sr-only">Course Actions</h2>
          <div className="flex flex-row">
            <Link 
              href={`${params.pelviscourse}/${data.to ?? ""}?content=${content ?? ""}`}
              className="p-2 rounded-md text-white font-bold bg-[#043873] hover:border hover:ring-offset-[#b7d5eb] hover:ring-2 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label={`Start learning ${pelviscourse}`}
            >
              Start Learning
            </Link>
          </div>
          <Link 
            href="/pelviscourses" 
            className="flex items-center space-x-2 text-[#043873] hover:text-[#0a60b6] mt-4 focus:outline-none focus:underline"
            aria-label="Return to pelvis course list"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Lessons</span>
          </Link>
        </section>

        <TeamSection2 />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Home;