"use client";

import Navigator from "@/components/course_overview/navigator";
import HeroSection from "@/components/course_overview/hero_section";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection from "@/components/course_overview/objective_section";
import { useEffect, useState } from "react";
import * as datas from "@/data/course_data";
import Link from "next/link";
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
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<datas.CourseDataProps>(dataValues);

  useEffect(() => {
    if (course === "3D slicer interface") {
      setData(datas.slicerInterface);
      setIndex(0);
    } else if (course === "3D sli cer - Adding DICOM datasets") {
      setData(datas.dicomDatasets);
      setIndex(13);
    } else if (course === "3D slicer - Navigating DICOM display") {
      setData(datas.dicomDisplay);
      setIndex(26);
    } else if (course === "3D slicer - Advanced Segmentation-1") {
      setData(datas.advancedSegmentation1);
      setIndex(31);
    } else if (course === "3D slicer - Basic-Segmentation") {
      setData(datas.basicSegmentation);
      setIndex(58);
    }
  }, [course]);

  return (
    <section>
      <Navigator />
      <div className="h-[1px] w-full bg-[#FDCC6D]" />
      <HeroSection hero={data.hero.hero} />
      <ObjectiveSection objective={data.objectives.objective} />
      <div className="flex flex-col items-center p-10 ">
        <div className="flex flex-row">
          <Link href={`${params["course"]}/${data.to}?page=${index}`}>
            <p className="p-2 rounded-md  text-white hover:font-bold font-bold cursor bg-[#772EFF] hover-border hover:ring-offset-[#b7d5eb]  hover:text-black hover:ring-2 hover:ring-offset-2">
              Start Learning
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
