import React from "react";
import CourseCard from "./course_card";
import { courses } from "@/data/mandibular/course_data";

// Component sa gawas sa card. 

const CourseSection = () => {
  return (
    <div className="flex flex-col p-4  w-full min-h-screen">
      <p className="text-md md:text-3xl font-semibold text-center text-shadow-[0_2px_2px_#696767FF] py-7 text-[#0b0d0f]">
        Mandible Course
      </p>
      <div className="grid grid-rows-2 grid-flow-row md:grid-flow-col gap-2 text-black w-full h-full">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            level={course.level}
            alt={course.alt}
            to={course.to}
            time={course.time}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
