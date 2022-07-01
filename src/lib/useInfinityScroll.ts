import { useAppDispatch } from "./../store/hook";
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
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
  function usePreviousValue(value: number) {
    const ref = useRef<number>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const previousPage = usePreviousValue(page);
  const dispatch = useAppDispatch();
  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (count === targetArray.length) {
        return observer.disconnect();
      }
      if (entry.isIntersecting && target.current) {
        setCount(() => targetArray.length);
        setPage((prev) => prev + 1);
        observer.disconnect();
        fetchAction({ search: searchValue, page, category });
        observer.observe(target.current as HTMLDivElement);
      }
    },
    [category, count, fetchAction, page, searchValue, target, targetArray.length]
  );
  const throttledOnIntersect = throttle(onIntersect, 300);

  useEffect(() => {
    const observer = new IntersectionObserver(throttledOnIntersect, { threshold, rootMargin });
    if (target.current) {
      observer.observe(target.current);
    }
    return () => observer.disconnect();
  }, [page, rootMargin, target, threshold, throttledOnIntersect]);

  useEffect(() => {
    if (category || searchValue) {
      setPage((prev) => 0);
      dispatch(onClearNotefolioList());
      fetchAction({ search: searchValue, page, category });
    }
  }, [category]);

  return { page };
};

export default useInfinityScroll;
