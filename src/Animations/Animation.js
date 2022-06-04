export const linkMovements = {
  hidden1: {
    x: -100,
    opacity: 0,
  },
  visible1: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 1.6,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const displayName = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
