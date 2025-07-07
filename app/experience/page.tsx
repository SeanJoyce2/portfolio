import React from "react";
import { experiences } from "../features/experience/data";
import ExperienceCard from "../features/experience/experienceCard";

const ExperiencePage: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold text-primary mb-2">Experience</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Welcome to my experience page. Here you will find information about my
        professional background and skills.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </main>
  );
};

export default ExperiencePage;
