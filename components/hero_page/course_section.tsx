import React from "react";
import CourseCard from "./course_card";
import { courses } from "@/data/mandibular/course_data";

const CourseSection = () => {
  return (
    <div className="flex flex-col p-4 w-full min-h-screen">
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-shadow-[0_2px_2px_#696767FF] py-5 md:py-7 text-[#0b0d0f]">
        Mandible Course
      </p>
      
      {/* Responsive grid layout with improved breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 text-black w-full">
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