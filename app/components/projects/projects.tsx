import React from 'react';
import ProjectCard from "./projectCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">

            <ProjectCard/>
            <div>Projects</div>
        </section>
    );
};

export default Projects;