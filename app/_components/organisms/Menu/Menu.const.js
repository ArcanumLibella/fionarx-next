export const menuItemsVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const menuItemVariants = {
  closed: {
    translateX: "-8%",
    opacity: 0,
  },
  open: {
    translateX: "8%",
    opacity: 1,
  },
};

export const socialItemsVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.4,
      staggerDirection: -1,
    },
  },
};
