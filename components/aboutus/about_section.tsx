import React from "react";
import kate from "@/public/kate.jpg";
import AboutCard from "@/components/aboutus/about_card";

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 place-items-center bg-white">
      <AboutCard
        image={kate}
        alt="User Image"
        name="Lemuel Clark Velasco"
        role=" Project Manager"
      />
      <AboutCard
        image={kate}
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
        image={kate}
        alt="User Image"
        name="Zyrene Alturas"
        role="Developer"
      />
      <AboutCard
        image={kate}
        alt="User Image"
        name="Dianne Mel Arrubio"
        role="Pedagogy Manager"
      />
    </div>
  );
};

export default AboutSection;
