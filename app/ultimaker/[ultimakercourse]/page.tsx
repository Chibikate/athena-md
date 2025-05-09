"use client";

import Navigator3 from "@/components/course_overview/navigator3";
import HeroSection3 from "@/components/course_overview/hero_section3";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection3 from "@/components/course_overview/objective_section3";
import React, { useEffect, useState } from "react";
import * as datas from "@/data/ultimaker/ultimaker_data";
import Link from "next/link";
import { Suspense } from "react";
import TeamSection3 from "@/components/course_overview/team_section3";


interface Params {
  params: {
    ultimakercourse: string;
  };
}

const defaultData: datas.CourseDataProps3 = {
  hero: { hero: { title: "", difficulty: "", duration: "", language: "" } },
  objectives: { objective: { objectives: [""] } },
  to: "",
};

const Home = ({ params }: Params) => {
  const ultimakercourse = params["ultimakercourse"].replaceAll("%20", " ");
  const [content, setContent] = useState("");
  const [data, setData] = useState<datas.CourseDataProps3>(defaultData);

  useEffect(() => {
    if (ultimakercourse === "3D Printing for a Mandible-1") {
      setContent("3D printing  Part 1");
      setData(datas.printing1);

    } else if (ultimakercourse === "3D Printing for a Mandible-2") {
      setContent("3D printing  Part 2");
      setData(datas.printing2);

    } else if (ultimakercourse === "3D Printing for a Mandible-3") {
      setContent("3D printing  Part 3");
      setData(datas.printing3);

    } else if (ultimakercourse === "3D Printing for a Mandible-4") {
      setContent("3D printing  Part 4");
      setData(datas.printing4);
  
    } 
  },
  [ultimakercourse]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <Navigator3 />
        <HeroSection3 hero={data.hero.hero} />
        <ObjectiveSection3 objective={data.objectives.objective} />

        <div className="flex flex-col items-center p-10 space-y-4">
          {data.to && (
            <Link href={`${params.ultimakercourse}/${data.to}?content=${content}`}>
              <p className="p-2 rounded-md text-white hover:font-bold font-bold cursor bg-[#043873] hover:border hover:ring-offset-[#b7d5eb] hover:ring-2 hover:ring-offset-2">
                Start Learning
              </p>
            </Link>
          )}
          
          <Link href="/ultimakercourses">
            <div className="flex items-center space-x-2 text-[#043873] hover:text-[#0a60b6] mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Lessons</span>
            </div>
          </Link>
        </div>

        <TeamSection3 />
        <Footer />
      </section>
    </Suspense>
  );
};
export default Home;