'use client';

import Nav from "./components/Nav";
import react from "react";
import { useState, useRef } from "react";
import Title from "./components/Title";
import Divider from "./components/Divider";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const refTable = {
    'Home': homeRef,
    'About': aboutRef,
    'Projects': projectsRef,
    'Experience': experienceRef,
    'Contact': contactRef,
  }

  const [currentSection, setCurrentSection] = useState('Home')

  const clickChangeSection = (section) => {
    setCurrentSection(section);
    refTable[section].current.scrollIntoView({behaivor: 'smooth'})
    //SCROLL???
  }

  return (
    <div className="flex flex-col justify-center items-center content-center w-screen">
      <Nav navigate={clickChangeSection} selected={currentSection}/>
      <Title myRef={homeRef}/>
      <Divider/>
      <About myRef={aboutRef}/>
      <Divider/>
      <Projects myRef={projectsRef}/>
      <Divider/>
      <Experience myRef={experienceRef}/>
      <Contact myRef={contactRef}/>
    </div>
  );
}
