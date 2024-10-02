import React, { useState } from "react";
import Image from "next/image";
import Image6 from "@/public/Image6.png";

// Types for team members and lessons
type TeamMember = {
  name: string;
  role: string;
};

type Lesson = {
  title: string;
  description: string;
};

type TeamSectionProps = {
  isNewCourse: boolean;
};

const TeamSection2 = ({ isNewCourse }: TeamSectionProps) => {
  // Initial data for teams and lessons
  const initialTeamsData = [
    [
      { name: "Lemuel Clark Velasco", role: "Project Leader" },
      { name: "Rentor Cafino MD, DPBO-HNS", role: "Content Developer" },
      { name: "Armando T. Isla MD FPSO-HNS", role: "Medical Adviser" },
      { name: "Karen Mae Ty ", role: "Content Validator" },
      { name: "Jay Pee Amable", role: "Content Validator" },
      { name: "Isaac Cesar De Guzman", role: "Content Validator" },
      { name: "Jehan Grace Maglaya", role: "Content Validator" },
      { name: "Anna Carmina Zantua", role: "Content Validator" },
      { name: "Queenie Kate Cabanilla", role: "Web Developer" },
      { name: "Kaye Q. Velarde", role: "Pedagogy Manager" },
    ],
    [
      { name: "Lemuel Clark Velasco", role: "Project Leader" },
      { name: "Darelle Jay P. Langga", role: "Content Developer" },
      { name: "Jesronne C. Abrea", role: "Content Validator" },
      { name: "Mark Louie M. Tangalin", role: "Content Validator" },
      { name: "Abegail Jane L. Jutba", role: "Content Validator" },
      { name: "Angelo Miguel D. Achacoso", role: "Content Validator" },
      { name: "Zyrene Belle B. Alturas", role: "Web Developer" },
      { name: "Dianne Mel B. Arrubio", role: "Pedagogy Manager" },
      { name: "Isaac Cesar De Guzman", role: "Medical Adviser" },
    ],
    [
      { name: "Lemuel Clark Velasco", role: "Project Leader" },
      { name: "Isaac Cesar De Guzman", role: "Medical Adviser" },
      { name: "Queenie Kate S. Cabanilla", role: "Web Developer" },
      { name: "Jay Pee Amable", role: "Medical Adviser" },
      { name: "Jehan Grace Maglaya", role: "Content Validator" },
      { name: "Anna Carmina Zantua", role: "Content Validator" },
      { name: "John Doe", role: "Medical Adviser" },
      { name: "Zyrene Belle B. Alturas", role: "Web Developer" },
      { name: "Dianne Mel B. Arrubio", role: "Pedagogy Manager" },
    ],
  ];

  const initialLessonsData = [
    { title: "Lesson 1: Introduction to React", description: "Learn the basics of React and how to get started." },
    { title: "Lesson 2: Advanced React Patterns", description: "Deep dive into hooks, context API, and performance optimizations." },
    { title: "Lesson 3: State Management with Redux", description: "Understand state management in large applications using Redux." },
  ];

  // State to manage teams and lessons
  const [teams, setTeams] = useState<TeamMember[][]>(initialTeamsData);
  const [lessons, setLessons] = useState<Lesson[]>(initialLessonsData);
  const [selectedTeam, setSelectedTeam] = useState<number>(1);

  // State for new team and new lesson input
  const [newTeam, setNewTeam] = useState<TeamMember[]>([]);
  const [newLesson, setNewLesson] = useState<Lesson>({ title: "", description: "" });

  // Handle adding a new team member (up to 8 members per team)
  const addNewTeamMember = () => {
    if (newTeam.length < 8 && newTeam[0]?.name && newTeam[0]?.role) {
      const updatedTeams = [...teams];
      updatedTeams[selectedTeam - 1] = [...updatedTeams[selectedTeam - 1], ...newTeam];
      setTeams(updatedTeams);
      setNewTeam([]);
    } else {
      alert("Each team can only have up to 8 members!");
    }
  };

  // Handle adding a new lesson
  const addNewLesson = () => {
    if (newLesson.title && newLesson.description) {
      setLessons([...lessons, newLesson]);
      setNewLesson({ title: "", description: "" });
    }
  };

  return (
    <div className={`flex flex-col bg-[#1c1648] text-white`}>
      <div className="area">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <p className="font-bold text-4xl pt-10 text-center text-primary">THE TEAM</p>
      <div className="flex justify-center invert">
        <Image alt="Team Image" src={Image6} width={200} height={100} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between p-4 text-center">
        {/* Dynamically render selected team (up to 8 members) */}
        {teams[selectedTeam - 1].map((member, index) => (
          <div key={index} className="p-4">
            <p>
              {member.name} <br />
              <span className="font-bold text-sm text-[#ffc248]">{member.role}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Lessons Section */}
      <div className="pt-10">
        <p className="font-bold text-4xl text-center text-primary">LESSONS</p>
        <div className="flex flex-col sm:flex-row justify-between p-4 text-center">
          {lessons.map((lesson, index) => (
            <div key={index} className="p-4 bg-[#2a1f58] m-2 rounded-md">
              <h3 className="font-bold text-lg text-[#ffc248]">{lesson.title}</h3>
              <p>{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section to add new team members */}
      <div className="pt-10">
        <h3 className="font-bold text-2xl">Add New Team Member</h3>
        <div>
          <input
            type="text"
            placeholder="Team Member Name"
            value={newTeam.length > 0 ? newTeam[0].name : ""}
            onChange={(e) => setNewTeam([{ name: e.target.value, role: "New Role" }])}
            className="p-2 m-2"
          />
          <button onClick={addNewTeamMember} className="bg-[#ffc248] text-black px-4 py-2 rounded">
            Add Team Member
          </button>
        </div>
      </div>

      {/* Section to add new lesson */}
      <div className="pt-10">
        <h3 className="font-bold text-2xl">Add New Lesson</h3>
        <div>
          <input
            type="text"
            placeholder="Lesson Title"
            value={newLesson.title}
            onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
            className="p-2 m-2"
          />
          <input
            type="text"
            placeholder="Lesson Description"
            value={newLesson.description}
            onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })}
            className="p-2 m-2"
          />
          <button onClick={addNewLesson} className="bg-[#ffc248] text-black px-4 py-2 rounded">
            Add Lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection2;
