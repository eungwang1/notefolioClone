import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useMedia() {
  const mobile = useMediaQuery({ query: "(max-width: 768px)" });
  const mobile_small = useMediaQuery({ query: "(max-width: 480px)" });
  const pc = useMediaQuery({ query: "(min-width:1024px)" });
  const tablet = useMediaQuery({ query: "(min-width:768px) and (max-width:1023px)" });
  const [isMobileSmall, setIsMobileSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPc, setIsPc] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  useEffect(() => {
    setIsPc(pc);
  }, [pc]);
  useEffect(() => {
    setIsMobileSmall(mobile_small);
  }, [mobile_small]);

  return { isMobile, isPc, isTablet, isMobileSmall };
}
