import React from "react";
import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Projects from "./components/Project/projects";
import TechSkills from "./components/Skills/techskills";
import ContactSection from "./components/Contact/contactform";

const App = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <TechSkills />
      <Projects />
      <ContactSection />
    </>
  )
}


export default App