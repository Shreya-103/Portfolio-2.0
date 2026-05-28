import React from "react";
import AboutMe from "./components/AboutMe/aboutme";
import Projects from "./components/Project/projects";
import TechSkills from "./components/Skills/techskills";
// import contactForm from "./components/Contact/contactform"; 
import ContactSection from "./components/Contact/contactform";

const App = () =>{
  return(
    <>
    <AboutMe/>
    <TechSkills/>
    <Projects/>
    <ContactSection/>
    </>
  )
}


export default App