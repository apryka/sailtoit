import { useEffect, useState } from 'react';

export default function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // setIsIntersecting(entry.isIntersecting);
      setIsIntersecting(entry.intersectionRatio < 1);
    }, options);

    const element = ref.current;
    if (element) {
      observer.observe(ref.current);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, ref]);

  return isIntersecting;
}
