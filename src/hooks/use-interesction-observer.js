import { useEffect, useState } from 'react';

export default function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // setIsIntersecting(entry.isIntersecting);
      setIsIntersecting(entry.intersectionRatio < 1);
    }, options);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, ref]);

  return isIntersecting;
}
