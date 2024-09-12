'use client';

import Nav from "./components/Nav";
import react from "react";
import { useState, useRef } from "react";
import Title from "./components/Title";
import Divider from "./components/Divider";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [currentSection, setCurrentSection] = useState('Home')

  const clickChangeSection = (section) => {
    setCurrentSection(section);
    //SCROLL???
  }

  return (
    <div className="flex flex-col justify-center items-center content-center w-screen">
      <Nav navigate={clickChangeSection} selected={currentSection}/>
      <Title />
      <Divider/>
      <About/>
      <Divider/>
      <Projects/>
      <Divider/>
    </div>
  );
}
