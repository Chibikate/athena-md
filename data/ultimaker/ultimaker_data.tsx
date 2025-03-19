import * as course from "@/public/course";
import TeamSection3 from "@/components/course_overview/team_section3";
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
const ultimakercourse = {
  Module14: course.Module14,
  Module15: course.Module15,
  Module16: course.Module16,
  Module17: course.Module17,
};
export const UltimakerCourses = [
  {
    image: ultimakercourse.Module14,
    title: "Setting Up Ultimaker Cura (E-1)",
    description: "Learn how to download Ultimaker Cura",
    level: "Easy",
    time: "10mins",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing for a Mandible-1",
    courseName: "UltimakerCura",
  },
  {
    image: ultimakercourse.Module15,
    title: "Ultimaker Cura Features (E-2)",
    description: "Learn about the different features of Ultimaker Cura",
    level: "Hard",
    time: "1hr",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing for a Mandible-2",
    courseName: "UltimakerCura",
  },
  {
    image: ultimakercourse.Module16,
    title: "Preparing 3D Model using Ultimaker Cura (E-3)",
    description: "Learn how to use Ultimaker Cura for 3D printing",
    level: "Hard",
    time: "1hr",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing for a Mandible-3",
    courseName: "UltimakerCura",
  },
  {
    image: ultimakercourse.Module17,
    title: "Printing 3D Model using Ultimaker Cura (E-4)",
    description: "Learn 3D print using Ultimaker Cura",
    level: "Hard",
    time: "30mins",
    alt: "3D printing using Ultimaker Cura course",
    to: "/course/3D Printing for a Mandible-4",
    courseName: "UltimakerCura",
  },
];

export interface HeroProps3 {
  hero: {
    title: string;
    difficulty: string;
    duration: string;
    language: string;
  };
}

export interface ObjectiveProps3 {
  objective: {
    objectives: string[];
  };
}

export interface CourseDataProps3 {
  hero: HeroProps3;
  objectives: ObjectiveProps3;
  to: string;
} 

const printing1: CourseDataProps3 = {
  hero: {
    hero: {
      title: "Setting Up Ultimaker Cura (E-1)",
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
const printing2: CourseDataProps3 = {
  hero: {
    hero: {
      title: "Ultimaker Cura Features (E-2)",
      difficulty: "Hard",
      duration: "40mins",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Learn different features of Ultimaker Cura",
        "Familiarize the features of the software",
      ],
    },
  },
  to: "data",
};
const printing3: CourseDataProps3 = {
  hero: {
    hero: {
      title: "Preparing 3D Model using Ultimaker Cura (E-3)",
      difficulty: "Difficult",
      duration: "1hr",
      language: "English",
    },
  },

  objectives: {
    objective: {
      objectives: [
        "Learn how to use Ultimaker Cura for 3D printing (E-3)",
        "Use the software to prepare the 3D model for printing",
      ],
    },
  },
  to: "data",
};
const printing4: CourseDataProps3 = {
  hero: {
    hero: {
      title: "Printing 3D Model using Ultimaker Cura (E-4)",
      difficulty: "Hard",
      duration: "40mins",
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

  printing1,
  printing2,
  printing3,
  printing4,
  UltimakerCourses as ultimakercourses,
  TeamSection3,
};
