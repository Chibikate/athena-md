import * as course from "@/public/course";
import TeamSection from "@/components/course_overview/team_section";
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

export const localCourses = [
     {
        image: course.Module14,
        title: "Setting Up Ultimaker Cura (E-1)",
        description: "Learn how to download Ultimaker Cura",
        level: "Easy",
        time: "10mins",
        alt: "3D printing using Ultimaker Cura course",
        to: "/course/3D Printing for a Mandible-1",
        courseName: "UltimakerCura",
      },
      {
        image: course.Module15,
        title: "Ultimaker Cura Features (E-2)",
        description: "Learn about the different features of Ultimaker Cura",
        level: "Hard",
        time: "1hr",
        alt: "3D printing using Ultimaker Cura course",
        to: "/course/3D Printing for a Mandible-2",
        courseName: "UltimakerCura",
      },
      {
        image: course.Module16,
        title: "Preparing 3D Model using Ultimaker Cura (E-3)",
        description: "Learn how to use Ultimaker Cura for 3D printing",
        level: "Hard",
        time: "1hr",
        alt: "3D printing using Ultimaker Cura course",
        to: "/course/3D Printing for a Mandible-3",
        courseName: "UltimakerCura",
      },
      {
        image: course.Module17,
        title: "Printing 3D Model using Ultimaker Cura (E-4)",
        description: "Learn 3D print using Ultimaker Cura",
        level: "Hard",
        time: "30mins",
        alt: "3D printing using Ultimaker Cura course",
        to: "/course/3D Printing for a Mandible-4",
        courseName: "UltimakerCura",
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
    const printing1: CourseDataProps = {
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
    const printing2: CourseDataProps = {
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
    const printing3: CourseDataProps = {
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
    const printing4: CourseDataProps = {
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
      localCourses as courses,
      TeamSection,
    };
    