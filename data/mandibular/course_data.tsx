import * as course from "@/public/course";
import TeamSection from "@/components/course_overview/team_section";
// * If magdungag kag another course, dani lang pag input//


export const localCourses = [
  {
    image: course.Module1,
    title: "3D slicer interface- Mandibular (A-1)",
    description: "Learn about the 3D slicer interface",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Mandibular Reconstruction course",
    to: "/course/3D slicer interface",
  },
  {
    image: course.Module2,
    title: "3D slicer - Adding DICOM datasets (A-2)",
    description: "Learn how to add dicom datasets in 3D slcier",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Mandibular Reconstruction course",
    to: "/course/3D slicer - Adding DICOM datasets",
  },
  {
    image: course.Module3,
    title: "3D slicer - Navigating DICOM display (A-3)",
    description: "Learn how to navigate dicom display",
    level: "Beginner",
    time: "15mins",
    alt: "Virtual Surgical Planning for Mandibular Reconstruction course",
    to: "/course/3D slicer - Navigating DICOM display",
  },

  {
    image: course.Module5,
    title: "3D slicer - Basic-Segmentation (A-4)",
    description: "Learn the Basic Segmenation in 3D slicer for Mandibular",
    level: "Hard",
    time: "30 mins",
    alt: "Virtual Surgical Planning for Mandibular Reconstruction course",
    to: "/course/3D slicer - Basic-Segmentation",
  },
  {
    image: course.Module4,
    title: "3D slicer - Advanced Segmentation-1 (A-5)",
    description: "Learn the Advanced Segmentation in 3D slicer",
    level: "Hard",
    time: "50 mins",
    alt: "Virtual Surgical Planning for Mandibular Reconstruction course",
    to: "/course/3D slicer - Advanced Segmentation-1",
  },
  {
    image: course.Module6,
    title: "MeshMixer - Virtual-Surgery (B-1)",
    description: "Learn how to use MeshMixer for Virtual Surgery",
    level: "Difficult",
    time: "1hr and 10mins",
    alt: "Virtual Surgical Planning for Mandibular Reconstruction course",
    to: "/course/MeshMixer - Virtual-Surgery",
  },
];

export interface HeroProps {
  hero: {
    title: string;
    difficulty: string;
    duration: string;
    language: string;
  };
}

export interface ObjectiveProps {
  objective: {
    objectives: string[];
  };
}

export interface CourseDataProps {
  hero: HeroProps;
  objectives: ObjectiveProps;
  to: string;
} 
const slicerInterface: CourseDataProps = {
  hero: {
    hero: {
      title: "3D Slicer Interface (A-1)",
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

const dicomDatasets: CourseDataProps = {
  hero: {
    hero: {
      title: "3D slicer - Adding DICOM datasets (A-2)",
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

const dicomDisplay: CourseDataProps = {
  hero: {
    hero: {
      title: "3D slicer - Navigating DICOM display (A-3)",
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

const basicSegmentation: CourseDataProps = {
  hero: {
    hero: {
      title: "3D slicer -  Basic-Segmentation (A-4)",
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
        "Isolate the mandible via Thresholding function",
        "Clean up 3D file using Islands function",
        "Export 3D file as .stl",
      ],
    },
  },
  to: "data",
};
const advancedSegmentation1: CourseDataProps = {
  hero: {
    hero: {
      title: "3D slicer - Advanced Segmentation-1  (A-5)",
      difficulty: "Difficult",
      duration: "50 mins",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Load a DICOM dataset into 3D slicer",
        "Familiarize oneself with the “grow from seeds” function",
        "Separate the mandible and maxilla of the skull using the “grow from seeds” function",
        "Remove unwanted artifacts using “Islands” function",
        "Save both maxilla and mandible in one file.",
      ],
    },
  },
  to: "data",
};
const MeshMixer: CourseDataProps = {
  hero: {
    hero: {
      title: "MeshMixer - Virtual-Surgery (B-1)",
      difficulty: "Difficult",
      duration: "1 hr and 10 mins",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Import the .stl file from the exercise into Meshmixer",
        "Separate the mandible from the rest of the skull",
        "Remove the tumor side of the mandible using plane cut function",
        "Reconstruct the tumor side using mirror function",
        
      ],
    },
  },
  to: "data",
};

export {
  slicerInterface,
  dicomDatasets,
  dicomDisplay,
  basicSegmentation,
  advancedSegmentation1,
  MeshMixer,
  localCourses as courses,
  TeamSection,
};
