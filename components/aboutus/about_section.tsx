import React from "react";
import kate from "@/public/kate.png";
import lemuel from "@/public/Lemuel.png";
import zyrene from "@/public/zyrene.png";
import dianne from "@/public/dianne.png";
import kaye from "@/public/kaye.png";
import AboutCard from "@/components/aboutus/about_card";

const AboutSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Leadership Row */}
          <div className="sm:col-span-2 lg:col-span-1 flex justify-center">
            <AboutCard
              image={lemuel}
              alt="Lemuel Velasco's photo"
              name="Lemuel Velasco"
              role="Project Manager"
            />
          </div>

          <AboutCard
            image={kaye}
            alt="Kaye Velarde's photo"
            name="Kaye Velarde"
            role="Pedagogy Manager"
          />

          <AboutCard
            image={dianne}
            alt="Dianne Arrubio's photo"
            name="Dianne Arrubio"
            role="Pedagogy Manager"
          />

          {/* Development Team Row - Centered in their own row on larger screens */}
          <div className="sm:col-span-1 lg:col-start-1 lg:col-end-2 flex justify-center">
            <AboutCard
              image={kate}
              alt="Kate Cabanilla's photo"
              name="Kate Cabanilla"
              role="Web Developer"
            />
          </div>

          <div className="sm:col-span-1 lg:col-start-2 lg:col-end-3 flex justify-center">
            <AboutCard
              image={zyrene}
              alt="Zyrene Alturas's photo"
              name="Zyrene Alturas"
              role="Web Developer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
