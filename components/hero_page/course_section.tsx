import React from "react";
import CourseCard from "./course_card";
import { courses } from "@/data/course_data";

const CourseSection = () => {
  return (
    <div className="flex flex-col p-4">
      <p className="text-2xl font-bold text-shadow-[0_4px_8px_#FFFFFF]">
        Explore Courses
      </p>
      <div className="grid grid-rows-2 grid-flow-col gap-2">
        {courses.map((course) => (
          <CourseCard
            key={course.index}
            image={course.image}
            title={course.title}
            description={course.description}
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
