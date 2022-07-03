import { useAppDispatch } from "./../store/hook";
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { debounce, throttle } from "lodash";
import { onClearNotefolioList } from "../slices/notefolioSlice";
interface useInfinityScrollProps {
  target: MutableRefObject<HTMLDivElement | null>;
  fetchAction: (...params: any) => Promise<void>;
  targetArray: Array<any>;
  threshold?: number;
  rootMargin?: string;
  searchValue?: string;
  category?: string;
}
const useInfinityScroll = ({
  target,
  targetArray,
  fetchAction,
  threshold = 1,
  searchValue,
  category,
  rootMargin = "0px 0px",
}: useInfinityScrollProps) => {
  const page = useRef(0);
  const count = useRef(0);
  // const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();
  const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
    if (count.current === targetArray.length) {
      return observer.disconnect();
    }
    if (entry.isIntersecting && target.current) {
      count.current = targetArray.length;
      page.current += 1;
      observer.disconnect();
      page.current >= 1 && fetchAction({ search: searchValue, page: page.current, category });
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
  }, [throttledOnIntersect]);

  const onFirstLoadData = async () => {
    dispatch(onClearNotefolioList());
    await fetchAction({ search: searchValue, page: 0, category });
  };
  const debouncedOnFirstLoadData = debounce(onFirstLoadData, 300);
  useEffect(() => {
    page.current = 0;
    page.current === 0 && debouncedOnFirstLoadData();
  }, [category, searchValue]);

  return { page };
};

export default useInfinityScroll;
