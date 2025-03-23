"use client";

import Navigator from "@/components/course_overview/navigator";
import HeroSection from "@/components/course_overview/hero_section";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection from "@/components/course_overview/objective_section";
import { useEffect, useState } from "react";
import * as datas from "@/data/mandibular/course_data";
import Link from "next/link";
import { Suspense } from "react";
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
        <div className="flex flex-col items-center p-10 ">
          <div className="flex flex-row">
            <Link href={`${params["course"]}/${data.to}?content=${content}`}>
              <p className="p-2 rounded-md  text-white hover:font-bold font-bold cursor bg-[#160c35] hover-border hover:ring-offset-[#b7d5eb]   hover:ring-2 hover:ring-offset-2">
                Start Learning
              </p>
            </Link>
          </div>
        </div>
        <TeamSection/>
        <Footer />
      </section>
    </Suspense>
  );
};

export default Home;
