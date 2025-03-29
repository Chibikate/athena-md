import React from "react";
import LearningCard from "@/components/hero_page/leaning_card";
import bgg8 from "@/public/bgg8.png";
import Interactive from "@/public/interactive1.svg";
import SelfDirect from "@/public/SelfDirect.svg";
import Realistic from "@/public/Realistic2.svg";
import Image from "next/image";

// Data sulod sa Leaning Card

const LearningSection = () => {
  return (
    <div>
      {/* First Learning Card - Only PNG */}
      {/* <div className="relative  flex justify-center">
        <Image
          src={bgg8}
          alt="Background image"
          objectFit="cover"
          width={1500}
        />
      </div> */}

      <LearningCard
        title="Interactive"
        bg={true}
        large={false}
        description="Users can manipulate and visualize, providing a hands-on approach to learning."
        image={Interactive}
        alt="Interactive illustration"
        swap={false}
      />
      <LearningCard
        title="Self-Direct"
        bg={false}
        large={true}
        description="They can set their own pace, choose the specific topics they want to explore, and navigate through the content independently, fostering self-directed learning."
        image={SelfDirect}
        alt="Self-Direct illustration"
        swap={true}
      />
      <LearningCard
        title="Realistic"
        bg={true}
        large={false}
        description="Users engage with scenarios that closely mirror the real surgical environment, 
        ensuring a true-to-life learning experience."
        image={Realistic}
        alt="Realistic illustration"
        swap={false}
      />
    </div>
  );
};

export default LearningSection;