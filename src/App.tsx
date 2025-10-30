import React, { useCallback, useRef, useState } from "react";
import "./index.css";
import BasicLayout from "@/layouts/Basic";
import LandingPage from "@/pages/LandingPage";
import ProjectPage from "@/pages/ProjectPage";
import SkillsPage from "@/pages/SkillsPage";
import AboutPage from "@/pages/AboutPage";
import usePageTracker from "@/hooks/usePageTracker";
import { PAGES } from "@/routes";

function App() {
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(PAGES.LANDING);

  usePageTracker(
    { landingRef, aboutRef, skillsRef, projectsRef },
    setCurrentPage,
  );

  const handlePageScroll = useCallback((pageName: string) => {
    // handle scrolling to pages here
    // Create a mapping of page names to their refs
    const refMap = {
      [PAGES.LANDING]: landingRef,
      [PAGES.ABOUT]: aboutRef,
      [PAGES.SKILLS]: skillsRef,
      [PAGES.PROJECTS]: projectsRef,
    };

    // Get the target ref for the page
    const targetRef = refMap[pageName];
    if (targetRef?.current) {
      // Scroll to the target element
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns to the top of the element
      });
    }
  }, []);

  return (
    <BasicLayout currentPage={currentPage} handleGoToPage={handlePageScroll}>
      <div ref={landingRef} data-page={PAGES.LANDING}>
        <LandingPage />
      </div>
      <div ref={aboutRef} data-page={PAGES.ABOUT}>
        <AboutPage />
      </div>
      <div ref={skillsRef} data-page={PAGES.SKILLS}>
        <SkillsPage />
      </div>
      <div ref={projectsRef} data-page={PAGES.PROJECTS}>
        <ProjectPage />
      </div>
    </BasicLayout>
  );
}

export default App;
