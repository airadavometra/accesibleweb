export const navLinkVariants = {
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};
export const blobLinkVariants = {
  hover: {
    scale: 0.9,
    transition: { type: "spring", stiffness: 100 },
  },
};
export const libraryLinkVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "spring", stiffness: 90 },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};
