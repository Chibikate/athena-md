import React from "react";
import CourseCard from "./course_card";
import { courses } from "@/data/course_data";

const CourseSection = () => {
  return (
    <div className="flex flex-col p-4">
      <p className="text-4xl font-bold text-shadow-[0_2px_4px_#000000] py-7 ">
        Explore Courses
      </p>
      <div className="grid grid-rows-2 grid-flow-col gap-2 text-black">
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
