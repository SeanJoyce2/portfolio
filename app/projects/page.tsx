import React from "react";

const placeholderProjects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS to showcase my work and skills.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack productivity app for managing tasks, deadlines, and priorities. Features authentication and real-time updates.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A customizable blog platform with markdown support, comments, and a rich text editor.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <main className="max-w-5xl mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold text-primary mb-2">Projects</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Explore some of my featured projects below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {placeholderProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-card/80 border border-primary/20 rounded-2xl shadow-md p-6 flex flex-col gap-2 hover:shadow-primary/30 transition-shadow duration-300"
          >
            <div className="h-32 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-xl mb-2 flex items-center justify-center">
              <span className="text-2xl text-primary-foreground font-bold opacity-80 text-center">
                {project.title}
              </span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              {project.description}
            </div>
            <div className="flex gap-2 flex-wrap mt-auto">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded bg-secondary text-xs text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="mt-4 text-primary underline text-sm font-semibold hover:text-accent transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
