// In your App.tsx, add this hook at the top
import { useEffect, useCallback, RefObject } from "react";

interface PageRefs {
  landingRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
}

const usePageTracker = (
  refs: PageRefs,
  setCurrentPage: (pageName: string) => void,
) => {
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the highest intersection ratio
      let mostVisible = null;
      let highestRatio = 0;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio;
          mostVisible = entry;
        }
      });

      // Update current page if we have a significantly visible page
      if (mostVisible && highestRatio > 0.3) {
        const pageName = mostVisible.target.getAttribute("data-page");
        setCurrentPage(pageName);
      }
    },
    [setCurrentPage],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use viewport
      // rootMargin: "-80px 0px", // Account for AppBar height
      threshold: [0.3, 0.5, 0.7], // Multiple thresholds
    });

    // Observe all page elements
    const refList = [
      refs.landingRef,
      refs.aboutRef,
      refs.skillsRef,
      refs.projectsRef,
    ];
    refList.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refList.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, handleIntersection]);
};

export default usePageTracker;
