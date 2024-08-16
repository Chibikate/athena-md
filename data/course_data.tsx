import * as course from "@/public/course";
import TeamSection from "@/components/course_overview/team_section";
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

export const courses = [
  {
    image: course.Module1,
    title: "3D slicer interface (A-1)",
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
    description: "Learn how navigate dicom display in 3D slicer",
    level: "Beginner",
    time: "15mins",
    alt: "Virtual Surgical Planning for Mandibular Reconstruction course",
    to: "/course/3D slicer - Navigating DICOM display",
  },

  {
    image: course.Module5,
    title: "3D slicer - Basic-Segmentation (A-4)",
    description: "Learn the Basic Segmenation in 3D slicer",
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
  {
    image: course.Module8,
    title: "3D Modeling- Pelvis (C-1)",
    description: "Learn about the 3D slicer interface",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/course/3D Slicer Pelvis - Interface",
  },
  {
    image: course.Module9,
    title: "3D Modeling Pelvis- Adding DICOM datasets (C-2)",
    description: "Learn how to add DICOM datasets in 3D slicer",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/course/3D Slicer Pelvis - add DICOM",
  },
  {
    image: course.Module10,
    title: "3D Modeling Pelvis - Navigating DICOM datasets (C-3)",
    description: "Learn how to navigate DICOM datasets in 3D slicer",
    level: "Beginner",
    time: "10 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/course/3D slicer Pelvis - Navigating DICOM",
  },
  {
    image: course.Module11,
    title: "3D Modeling Pelvis - Basic Segmentation (C-4)",
    description: "Learn the Basic Segmenation in 3D slicer",
    level: "Hard",
    time: "30 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/course/3D slicer Pelvis - Basic-Segmentation",
  },
  {
    image: course.Module12,
    title: "3D Modeling Pelvis - Advanced Segmentation (C-5)",
    description: "Learn the Advanced Segmentation in 3D slicer",
    level: "Hard",
    time: "50 mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/course/3D slicer Pelvis - Advanced Segmentation-1",
  },
  {
    image: course.Module13,
    title: "3D Modeling Pelvis using MeshMixer Virtual-Surgery (D-1)",
    description: "Learn how to use MeshMixer for Virtual Surgery",
    level: "Difficult",
    time: "1hr and 10mins",
    alt: "Virtual Surgical Planning for Pelvis Reconstruction course",
    to: "/course/MeshMixer2 - Pelvis Virtual-Surgery",
  },
  {
    image: course.Module14,
    title: "Optimizing 3D Printing for a Mandible (E-1)",
    description: "Learn how to download Ultimaker Cura",
    level: "Easy",
    time: "10mins",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing  Part 1",
  },
  {
    image: course.Module15,
    title: "Optimizing 3D Printing for a Mandible (E-2)",
    description: "Learn about the different features of Ultimaker Cura",
    level: "Hard",
    time: "1hr",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing  Part 2",
  },
  {
    image: course.Module16,
    title: "Optimizing 3D Printing for a Mandible (E-3)",
    description: "Learn how to use Ultimaker Cura for 3D printing",
    level: "Hard",
    time: "1hr",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing  Part 3",
  },
  {
    image: course.Module17,
    title: "Optimizing 3D Printing for a Mandible (E-4)",
    description: "Learn how to print using Ultimaker Cura",
    level: "Hard",
    time: "30mins",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing  Part 4",
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
  TeamSection2
}
const pelvisInterface: CourseDataProps = {
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
const pelvisAddDICOM: CourseDataProps = {
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
const pelvisdicomDisplay: CourseDataProps = {
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

const pelvisbasicSegmentation: CourseDataProps = {
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
const pelvisadvancedSegmentation1: CourseDataProps = {
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
        "Familiarize oneself with the “grow from seeds” function",
        "Separate the right ilium from the left ilium using the “grow from seeds” function",
        "Remove unwanted artifacts using “Islands” function",
        "Save it in one file.",
      ],
    },
  },
  to: "data",
};
const MeshMixer2: CourseDataProps = {
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
const printing1: CourseDataProps = {
  hero: {
    hero: {
      title: "Optimizing 3D Printing for a Mandible (E-1)",
      difficulty: "Easy",
      duration: "10 mins",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Download Ultimaker Cura",
      ],
    },
  },
  to: "data",
};
const printing2: CourseDataProps = {
  hero: {
    hero: {
      title: "Optimizing 3D Printing for a Mandible (E-2)",
      difficulty: "Difficult",
      duration: "1hr",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Learn different features of Ultimaker Cura",
        "Familiaruze the features of the software",
      ],
    },
  },
  to: "data",
};
const printing3: CourseDataProps = {
  hero: {
    hero: {
      title: "Optimizing 3D Printing for a Mandible (E-3)",
      difficulty: "Difficult",
      duration: "50mins",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Learn how to use Ultimaker Cura for 3D printing",
      ],
    },
  },
  to: "data",
};
const printing4: CourseDataProps = {
  hero: {
    hero: {
      title: "Optimizing 3D Printing for a Mandible (E-4)",
      difficulty: "Hard",
      duration: "30mins",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Learn to print using Ultimaker Cura",
        "Add the 3D model to the software",
        "Prepare the 3D model for printing",
        "Print the 3D model",
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
  pelvisInterface,
  pelvisAddDICOM,
  pelvisdicomDisplay,
  pelvisbasicSegmentation,
  pelvisadvancedSegmentation1,
  MeshMixer2,
  printing1,
  printing2,
  printing3,
  printing4, 
};
