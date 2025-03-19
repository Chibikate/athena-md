"use client";

import Navigator from "@/components/course_overview/navigator";
import HeroSection2 from "@/components/course_overview/hero_section2";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection2 from "@/components/course_overview/objective_section2";
import { useEffect, useState } from "react";
import * as datas from "@/data/pelvis/pelvis_data";
import Link from "next/link";
import { Suspense } from "react";
import TeamSection2 from "@/components/course_overview/team_section2";

interface Params {
  params: {
    course: string;
  };
}

const dataValues: datas.CourseDataProps2 = {
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
  const [data, setData] = useState<datas.CourseDataProps2>(dataValues);
  const [isNewCourse, setNewCourse] = useState (false)

  useEffect(() => {
    if (course === "3D Slicer Pelvis - Interface") {
      setContent("3D slicer Pelvis C1");
      setNewCourse (true)
      setData(datas.pelvisInterface);
    } else if (course === "3D Slicer Pelvis - add DICOM") {
      setContent("3D slicer Pelvis C2");
      setNewCourse (true)
      setData(datas.pelvisAddDICOM);
    }  else if (course === "3D slicer Pelvis - Navigating DICOM") {
      setContent("3D slicer Pelvis C3");
      setNewCourse (true)
      setData(datas.pelvisdicomDisplay);
    } else if (course === "3D slicer Pelvis - Basic-Segmentation") {
      setContent("3D slicer Pelvis C4");
      setNewCourse (true)
      setData(datas.pelvisbasicSegmentation);
    } else if (course === "3D slicer Pelvis - Advanced Segmentation-1") {
      setContent("3D slicer Pelvis C5");
      setNewCourse (true)
      setData(datas.pelvisadvancedSegmentation1);
    } else if (course === "MeshMixer2 - Pelvis Virtual-Surgery") {
      setContent("MeshMixer2 - Pelvis Virtual-Surgery");
      setData(datas.MeshMixer2);
      setNewCourse (true)
    }
  },
  [course]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <Navigator />

        <HeroSection2 hero={data.hero.hero} />
        <ObjectiveSection2 objective={data.objectives.objective} />
        <div className="flex flex-col items-center p-10 ">
          <div className="flex flex-row">
            <Link href={`${params["course"]}/${data.to}?content=${content}`}>
              <p className="p-2 rounded-md  text-white hover:font-bold font-bold cursor bg-[#160c35] hover-border hover:ring-offset-[#b7d5eb]   hover:ring-2 hover:ring-offset-2">
                Start Learning
              </p>
            </Link>
          </div>
        </div>
        <TeamSection2/>
        <Footer />
      </section>
    </Suspense>
  );
};

export default Home;
