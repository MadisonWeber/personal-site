// In your App.tsx, add this hook at the top
import { useEffect, useCallback } from 'react';
import type { RefObject } from 'react';

interface PageRefs {
  landingRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  stackRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
}

const usePageTracker = (refs: PageRefs, setCurrentPage: (pageName: string) => void) => {
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the highest intersection ratio
      let mostVisible: IntersectionObserverEntry | null = null;
      let highestRatio = 0;

      entries.forEach(entry => {
        if (entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio;
          mostVisible = entry;
        }
      });

      // Update current page if we have a significantly visible page
      if (mostVisible && highestRatio > 0.3) {
        const target = mostVisible.target as HTMLElement;
        const pageName = target.getAttribute('data-page');
        if (pageName) {
          setCurrentPage(pageName);
        }
      }
    },
    [setCurrentPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use viewport
      // rootMargin: "-80px 0px", // Account for AppBar height
      threshold: [0.3, 0.5, 0.7], // Multiple thresholds
    });

    // Observe all page elements
    const refList = [refs.landingRef, refs.aboutRef, refs.stackRef, refs.projectsRef];
    refList.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refList.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, handleIntersection]);
};

export default usePageTracker;
