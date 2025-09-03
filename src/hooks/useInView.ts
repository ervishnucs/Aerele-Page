// hooks/useInView.ts
import { useEffect, useState } from 'react';

export default function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.5) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -40% 0px', // bottom margin to detect early
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isInView;
}
