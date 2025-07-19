import React from 'react';
import Image from "next/image";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ExternalLink, Github} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

const Projects = () => {

    const projects = [
        {
            title: "Tasks",
            description: "A modern task management application built with React and JavaScript, featuring intuitive task organization, priority management, and a clean, responsive interface powered by Tailwind CSS.",
            image: "/tasks.png",
            technologies: ["React", "Javascript", "Tailwind CSS", "Vite"],
            liveUrl: "https://tasks.seanjoyce.dev",
            githubUrl: "https://github.com"
        },
    ];


    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl text-center mb-12">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2"/>
                                                Live Demo
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4 mr-2"/>
                                                Code
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;