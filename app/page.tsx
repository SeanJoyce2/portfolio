"use client"

import Header from "./features/header/header";
import About from "./features/about/about";
import Skills from "./features/skills/skills";
import Projects from "./features/projects/projects";
import Experience from "./features/experience/experience";
import Contact from "./features/contact/contact"

export default function Home() {
    return (
        <div>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    );
}
