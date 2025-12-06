import { useCallback, useRef, useState } from 'react';
import './index.css';
import BasicLayout from '@/layouts/Basic';
import LandingPage from '@/pages/LandingPage';
import ProjectPage from '@/pages/Projects';
import AboutPage from '@/pages/AboutPage';
import TechStack from './pages/TechStack';
import usePageTracker from '@/hooks/usePageTracker';
import { PAGES } from '@/routes';

function App() {
  const landingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(PAGES.LANDING);

  usePageTracker({ landingRef, aboutRef, stackRef, projectsRef }, setCurrentPage);

  const handlePageScroll = useCallback((pageName: string) => {
    // handle scrolling to pages here
    // Create a mapping of page names to their refs
    const refMap = {
      [PAGES.LANDING]: landingRef,
      [PAGES.ABOUT]: aboutRef,
      [PAGES.STACK]: stackRef,
      [PAGES.PROJECTS]: projectsRef,
    };

    // Get the target ref for the page
    const targetRef = refMap[pageName];
    if (targetRef?.current) {
      // Scroll to the target element
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Aligns to the top of the element
      });
    }
  }, []);

  return (
    <BasicLayout
      currentPage={currentPage}
      handleGoToPage={handlePageScroll}
    >
      <div
        ref={landingRef}
        data-page={PAGES.LANDING}
      >
        <LandingPage />
      </div>
      <div
        ref={aboutRef}
        data-page={PAGES.ABOUT}
      >
        <AboutPage isInViewport={currentPage === PAGES.ABOUT} />
      </div>
      <div
        ref={stackRef}
        data-page={PAGES.STACK}
      >
        <TechStack isInViewport={currentPage === PAGES.STACK} />
      </div>
      <div
        ref={projectsRef}
        data-page={PAGES.PROJECTS}
      >
        <ProjectPage isInViewport={currentPage === PAGES.PROJECTS} />
      </div>
    </BasicLayout>
  );
}

export default App;

// TODO
// Redesign Landing Page
