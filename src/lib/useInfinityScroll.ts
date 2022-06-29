import React, { MutableRefObject, useEffect, useState } from "react";
import { throttle } from "lodash";
interface useInfinityScrollProps {
  target: MutableRefObject<HTMLDivElement | null>;
  fetchAction: (page: number) => Promise<void>;
  targetArray: Array<any>;
  threshold?: number;
  rootMargin?: string;
}
const useInfinityScroll = ({
  target,
  targetArray,
  fetchAction,
  threshold = 1,
  rootMargin = "0px 0px",
}: useInfinityScrollProps) => {
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(1);

  const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
    if (count === targetArray.length) {
      return observer.disconnect();
    }
    if (entry.isIntersecting && target.current) {
      setCount(() => targetArray.length);
      setPage((prev) => prev + 1);
      observer.unobserve(target.current as HTMLDivElement);
      fetchAction(page);
      observer.observe(target.current as HTMLDivElement);
    }
  };

  const throttledOnIntersect = throttle(onIntersect, 300);

  useEffect(() => {
    const observer = new IntersectionObserver(throttledOnIntersect, { threshold, rootMargin });
    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer.disconnect();
  }, [page, throttledOnIntersect]);

  return { page };
};

export default useInfinityScroll;
