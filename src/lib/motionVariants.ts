export const horizontalVariants = (startX: number, endX: number) => {
  const variants = {
    initial: {
      transform: `translateX(${startX}px)`,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    animate: {
      transform: `translateX(0px)`,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    leaving: {
      transform: `translateX(${endX}px)`,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return variants;
};

export const opacityVariants = (duration: number) => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    animate: {
      opacity: 1,
      transition: { duration: duration },
    },
    leaving: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return variants;
};

export const verticalVariants = (startY: number, endY: number) => {
  const variants = {
    initial: {
      transform: `translateY(${startY}px)`,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    animate: {
      transform: `translateY(0px)`,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    leaving: {
      transform: `translateY(${endY}px)`,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return variants;
};
