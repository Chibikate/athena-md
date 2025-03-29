"use client";

import Navigator2 from "@/components/course_overview/navigator2";
import HeroSection2 from "@/components/course_overview/hero_section2";
import Footer from "@/components/hero_page/footer";
import ObjectiveSection2 from "@/components/course_overview/objective_section2";
import { useEffect, useState, Suspense } from "react";
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
    if (pelviscourse === "3D slicer Pelvis - Interface") {
      setContent("3D slicer Pelvis C1");
      setData(datas.pelvisInterface);
    } else if (pelviscourse === "3D slicer Pelvis - AddDICOM") {
      setContent("3D slicer Pelvis C2");
      setData(datas.pelvisAddDICOM);
    } else if (pelviscourse === "3D slicer Pelvis - Navigating DICOM") {
      setContent("3D slicer Pelvis C3");
      setData(datas.pelvisdicomDisplay);
    } else if (pelviscourse === "3D slicer Pelvis - Basic-Segmentation") {
      setContent("3D slicer Pelvis C4");
      setData(datas.pelvisbasicSegmentation);
    } else if (pelviscourse === "3D slicer Pelvis - Advanced Segmentation-1") {
      setContent("3D slicer Pelvis C5");
      setData(datas.pelvisadvancedSegmentation1);
    } else if (pelviscourse === "MeshMixer2 - Pelvis Virtual-Surgery") {
      setContent("MeshMixer2 - Pelvis Virtual-Surgery");
      setData(datas.MeshMixer2);
    }
  }, [pelviscourse]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <Navigator2 />
        <HeroSection2 hero={data.hero.hero} />
        <ObjectiveSection2 objective={data.objectives.objective} />

        <div className="flex flex-col items-center p-10">
          <div className="flex flex-row">
          <Link href={`${params.pelviscourse}/${data.to}?content=${content}`}>
              <p className="p-2 rounded-md text-white hover:font-bold font-bold cursor bg-[#043873] hover:border hover:ring-offset-[#b7d5eb] hover:ring-2 hover:ring-offset-2">
                Start Learning
              </p>
            </Link>
          </div>
        </div>

        <TeamSection2 />
        <Footer />
      </section>
    </Suspense>
  );
};

export default Home;