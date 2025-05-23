import React from "react";
import kate from "@/public/kate.jpg";
import lemuel from "@/public/Lemuel.jpg";
import zyrene from "@/public/zyrene.jpg";
import dianne from "@/public/dianne.jpg";
import kaye from "@/public/kaye.jpg";
import AboutCard from "@/components/aboutus/about_card";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 place-items-center bg-white">
      <AboutCard
        image={lemuel}
        alt="User Image"
        name="Lemuel Velasco"
        role=" Project Manager"
      />
      <AboutCard
        image={kaye}
        alt="User Image"
        name="Kaye Velarde"
        role="Pedagogy Manager"
      />
      <AboutCard
        image={kate}
        alt="User Image"
        name="Kate Cabanilla"
        role=" Web Developer"
      />
      <AboutCard
        image={zyrene}
        alt="User Image"
        name="Zyrene Alturas"
        role="Web Developer"
      />
      <AboutCard
        image={dianne}
        alt="User Image"
        name="Dianne Arrubio"
        role="Pedagogy Manager"
      />
    </div>
  );
};

export default AboutSection;
