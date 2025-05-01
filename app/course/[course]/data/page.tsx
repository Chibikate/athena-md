"use client";
import React, { Suspense, useEffect } from "react";
import TutorialCard from "@/components/3dslicer_page/tutorial_card";
import { useSearchParams } from "next/navigation";
import {
  slicerTutorial1,
  slicerTutorial2,
  slicerTutorial3,
  slicerTutorial4,
  slicerTutorial5,
  MeshTutorial,
} from "@/data/mandibular";
import { ContentProps } from "@/utils/coursePageUtils";
import CourseLayout from "@/components/course/CourseLayout";

interface Params {
  params: {
    course: string;
  };
}

const initialData: ContentProps[] = [
  {
    title: "",
    description: "",
    image: null,
    alt: "",
  },
];

const Home = ({ params }: Params) => {
  const course = params["course"].replaceAll("%20", " ");
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("content");
  const [index, setIndex] = React.useState(0);
  const [content, setContent] = React.useState<ContentProps[]>(initialData);

  // Load content based on query parameter
  useEffect(() => {
    switch (queryPage) {
      case "3D slicer Part 1":
        setContent(slicerTutorial1);
        break;
      case "3D slicer Part 2":
        setContent(slicerTutorial2);
        break;
      case "3D slicer Part 3":
        setContent(slicerTutorial3);
        break;
      case "3D slicer Part 4":
        setContent(slicerTutorial4);
        break;
      case "3D slicer Part 5":
        setContent(slicerTutorial5);
        break;
      case "MeshMixer - Virtual-Surgery":
        setContent(MeshTutorial);
        break;
      default:
        setContent([]);
    }
    // Reset index when content changes
    setIndex(0);
  }, [queryPage]);

  // Render function for the tutorial card
  const renderCard = ({
    title,
    description,
    image,
    alt,
    onClick
  }: ContentProps & { onClick?: () => void }) => {
    return (
      <TutorialCard
        title={title}
        description={description}
        image={image}
        alt={alt}
        onClick={onClick}
      />
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseLayout
        index={index}
        setIndex={setIndex}
        content={content}
        coursePath={`/course/${course}`}
        renderCard={renderCard}
      />
    </Suspense>
  );
};

export default Home;