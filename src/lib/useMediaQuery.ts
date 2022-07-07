import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useMedia() {
  const mobile_small = useMediaQuery({ query: "(max-width: 480px)" });
  const mobile = useMediaQuery({ query: "(max-width: 768px)" });
  const tablet = useMediaQuery({ query: "(max-width:1024px)" });
  const pc_middle = useMediaQuery({ query: "(max-width:1340px)" });
  const pc_large = useMediaQuery({ query: "(min-width:1340px)" });
  const [isMobileSmall, setIsMobileSmall] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPcMiddle, setIsPcMiddle] = useState(false);
  const [isPcLarge, setIsPcLarge] = useState(false);
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  useEffect(() => {
    setIsMobileSmall(mobile_small);
  }, [mobile_small]);
  useEffect(() => {
    setIsPcMiddle(pc_middle);
  }, [pc_middle]);
  useEffect(() => {
    setIsPcLarge(pc_large);
  }, [pc_large]);

  return { isMobile, isTablet, isMobileSmall, isPcMiddle, isPcLarge };
}
