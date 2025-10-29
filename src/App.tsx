import React, { useRef } from "react";
import "./index.css";
import BasicLayout from "@/layouts/Basic";
import LandingPage from "@/pages/LandingPage";
import ProjectPage from "@/pages/ProjectPage";
import SkillsPage from "@/pages/SkillsPage";
import AboutPage from "@/pages/AboutPage";

function App() {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <BasicLayout>
      <div ref={landingRef}>
        <LandingPage />
      </div>
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div>
        <SkillsPage />
      </div>
      <div>
        <ProjectPage />
      </div>
    </BasicLayout>
  );
}

export default App;
