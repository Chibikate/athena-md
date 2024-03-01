import React from "react";
import LearningCard from "@/components/hero_page/leaning_card";
import Interactive from "@/public/interactive.svg";
import SelfDirect from "@/public/Self-direct.svg";
import Realistic from "@/public/Realistic.svg";


const LearningSection = () => {
  return (
    <div >
      <LearningCard
        title="Interactive"
        bg={true}
        large={false}
        description="Users can manipulate and visualize,  providing a hands-on approach  to learning."
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
        description="Users engage with scenarios 
        that closely mirror the real surgical environment, 
        ensuring a true-to-life learning experience."
        image={Realistic}
        alt="Realistic illustration"
        swap={false}
      />
    </div>
  );
};

export default LearningSection;
