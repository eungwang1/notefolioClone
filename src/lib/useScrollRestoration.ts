import { useCallback, useLayoutEffect } from "react";

const useScrollRestoration = (key: string, deps: string[]) => {
  const scrollSave = useCallback(() => {
    const scrollPos = window.scrollY + "";
    return localStorage.setItem(`${key}_scroll_pos`, scrollPos);
  }, []);

  const scrollRemove = useCallback(() => {
    return localStorage.removeItem(`${key}_scroll_pos`);
  }, []);

  const scrollMove = useCallback(() => {
    const scrollPos = localStorage.getItem(`${key}_scroll_pos`);
    localStorage.removeItem(`${key}_scroll_pos`);
    return window.scrollTo(0, Number(scrollPos));
  }, []);

  useLayoutEffect(() => {
    let boolean = false;
    for (let i = 0; i < deps.length; i++) {
      if (deps[i] !== undefined) {
        boolean = true;
        break;
      }
    }
    if (boolean) {
      scrollMove();
    } else {
      scrollRemove();
    }
    return () => scrollSave();
  }, deps);

  return { scrollSave, scrollRemove, scrollMove };
};

export default useScrollRestoration;
