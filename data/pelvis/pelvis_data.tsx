import * as pelviscourse from "@/public/course";
import TeamSection2 from "@/components/course_overview/team_section2";
// * If magdungag kag another course, dani lang pag input//

{
  /*
index - course code
image - unsa ang bg image sa course
title - unsa ang title sa course
description - para asa or unsa ni sya na course
time - duration sa activity or course
alt - alternative sa image if walay net
to - link kung aha sya mapadulong
*/
}
// * If magdungag kag another course, dani lang pag input//
export const PelvisCourses = [
  {
    image: pelviscourse.Module8,
    title: "3D Modeling- Pelvis (C-1)",
    description: "Learn about the 3D slicer interface",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/pelvis/3D Slicer Pelvis - Interface",
    courseName: "Pelvis",
  },
  {
    image: pelviscourse.Module9,
    title: "3D Modeling Pelvis- Adding DICOM datasets (C-2)",
    description: "Learn how to add DICOM datasets in 3D slicer",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/pelvis/3D Slicer Pelvis - add DICOM",
    courseName: "Pelvis",
  },
  {
    image: pelviscourse.Module10,
    title: "3D Modeling Pelvis - Navigating DICOM datasets (C-3)",
    description: "Learn how to navigate DICOM datasets in 3D slicer",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/pelvis/3D slicer Pelvis - Navigating DICOM",
    courseName: "Pelvis",
  },
  {
    image: pelviscourse.Module11,
    title: "3D Modeling Pelvis - Basic Segmentation (C-4)",
    description: "Learn the Basic Segmenation in 3D slicer",
    level: "Hard",
    time: "30 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/pelvis/3D slicer Pelvis - Basic-Segmentation",
    courseName: "Pelvis",
  },
  {
    image: pelviscourse.Module12,
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description: "Learn the Advanced Segmentation in 3D slicer",
    level: "Hard",
    time: "50 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/pelvis/3D slicer Pelvis - Advanced Segmentation-1",
    courseName: "Pelvis",
  },
  {
    image: pelviscourse.Module13,
    title: "3D Modeling Pelvis using MeshMixer Virtual-Surgery (D-1)",
    description: "Learn how to use MeshMixer for Virtual Surgery",
    level: "Difficult",
    time: "1hr and 10mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/pelvis/MeshMixer2 - Pelvis Virtual-Surgery",
    courseName: "Pelvis",
  },
];

export interface HeroProps2 {
  hero: {
    title: string;
    difficulty: string;
    duration: string;
    language: string;
  };
}

export interface ObjectiveProps2 {
  objective: {
    objectives: string[];
  };
}

export interface CourseDataProps2 {
  hero: HeroProps2;
  objectives: ObjectiveProps2;
  to: string;
} 

export interface ContentProps2 {
  title: string;
  description: React.JSX.Element | string;
  image?: null | any;
  alt: string;
}

const pelvisInterface: CourseDataProps2 = {
  hero: {
    hero: {
      title: "3D Slicer Pelvis Interface (C-1)",
      difficulty: "Beginner",
      duration: "10 mins",
      language: "English",
    },
  },
  objectives: {
    objective: {
      objectives: ["Familiarize oneself with the basic 3D slicer interface"],
    },
  },
  to: "data",
};

const pelvisAddDICOM: CourseDataProps2 = {
  hero: {
    hero: {
      title: "3D Slicer Pelvis Add DICOM (C-2)",
      difficulty: "Beginner",
      duration: "10 mins",
      language: "English",
    },
  },
  objectives: {
    objective: {
      objectives: [
        "Import DICOM dataset into 3D slicer",
        "Load the imported DICOM dataset",
      ],
    },
  },
  to: "data",
};

const pelvisdicomDisplay: CourseDataProps2 = {
  hero: {
    hero: {
      title: "3D slicer Pelvis - Navigating DICOM display (C-3)",
      difficulty: "Beginner",
      duration: "15 mins",
      language: "English",
    },
  },
  objectives: {
    objective: {
      objectives: [
        "Familiarize oneself with the basic controls in navigating 3D slicer.",
      ],
    },
  },
  to: "data",
};

const pelvisbasicSegmentation: CourseDataProps2 = {
  hero: {
    hero: {
      title: "3D slicer Pelvis-  Basic-Segmentation (C-4)",
      difficulty: "Difficult",
      duration: "30 mins",
      language: "English",
    },
  },
  objectives: {
    objective: {
      objectives: [
        "Import a DICOM dataset",
        "Navigate the Segment Editor Module",
        "Isolate the pelvis via Thresholding function",
        "Clean up 3D file using Islands function",
        "Export 3D file as .stl",
      ],
    },
  },
  to: "data",
};

const pelvisadvancedSegmentation1: CourseDataProps2 = {
  hero: {
    hero: {
      title: "3D slicer - Advanced Segmentation-1  (C-5)",
      difficulty: "Difficult",
      duration: "50 mins",
      language: "English",
    },
  },
  objectives: {
    objective: {
      objectives: [
        "Load a DICOM dataset into 3D slicer",
        "Familiarize oneself with the grow from seeds function",
        "Separate the right ilium from the left ilium using the grow from seeds function",
        "Remove unwanted artifacts using Islands function",
        "Save it in one file.",
      ],
    },
  },
  to: "data",
};

const MeshMixer2: CourseDataProps2 = {
  hero: {
    hero: {
      title: "MeshMixer2 - Pelvis Virtual-Surgery (D-1)",
      difficulty: "Difficult",
      duration: "1 hr and 10 mins",
      language: "English",
    },
  },
  objectives: {
    objective: {
      objectives: [
        "Import the .stl file from the exercise into Meshmixer",
        "Manipulate the objects for good reduction of fractured area",
        "Split a single 3D model into segments using a separate function",
        "Reconstruct the objects using the mirror function",
      ],
    },
  },
  to: "data",
};

// Define tutorial content arrays
export const slicerTutorial6: ContentProps2[] = [
  {
    title: "3D Slicer Pelvis Interface - Tutorial 1",
    description: "Introduction to the 3D Slicer interface for pelvis reconstruction",
    image: null,
    alt: "3D Slicer Interface Tutorial",
  },
  // Add more slides as needed
];

export const slicerTutorial7: ContentProps2[] = [
  {
    title: "Adding DICOM Datasets - Tutorial 2",
    description: "Learn how to add and import DICOM datasets in 3D Slicer",
    image: null,
    alt: "Adding DICOM Tutorial",
  },
  // Add more slides as needed
];

export const slicerTutorial8: ContentProps2[] = [
  {
    title: "Navigating DICOM Datasets - Tutorial 3",
    description: "Learn how to navigate and manipulate DICOM datasets in 3D Slicer",
    image: null,
    alt: "Navigating DICOM Tutorial",
  },
  // Add more slides as needed
];

export const slicerTutorial9: ContentProps2[] = [
  {
    title: "Basic Segmentation - Tutorial 4",
    description: "Learn basic segmentation techniques for pelvis reconstruction",
    image: null,
    alt: "Basic Segmentation Tutorial",
  },
  // Add more slides as needed
];

export const slicerTutorial10: ContentProps2[] = [
  {
    title: "Advanced Segmentation - Tutorial 5",
    description: "Advanced segmentation techniques for pelvis reconstruction",
    image: null,
    alt: "Advanced Segmentation Tutorial",
  },
  // Add more slides as needed
];

export const MeshTutorial2: ContentProps2[] = [
  {
    title: "MeshMixer Virtual Surgery - Tutorial",
    description: "Learn how to use MeshMixer for virtual surgery planning",
    image: null,
    alt: "MeshMixer Virtual Surgery Tutorial",
  },
  // Add more slides as needed
];

export {
  pelvisInterface,
  pelvisAddDICOM,
  pelvisdicomDisplay,
  pelvisbasicSegmentation,
  pelvisadvancedSegmentation1,
  MeshMixer2,
  PelvisCourses as pelviscourses,
  TeamSection2,
};