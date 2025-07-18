"use client"

import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact"

export default function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    );
}
