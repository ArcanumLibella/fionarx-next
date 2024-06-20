import React from 'react'

export const Text = ({
  children,
  type,
  className: additionalStyle,
}) => {
  switch (type) {
    case "paragraphLarge":
      return (
        <p
          className={`font-body text-mbase md:text-base 2xl:text-xbase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphLight":
      return (
        <p
          className={`font-body font-extralight text-normal md:text-base tracking-wider leading-relaxed selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "custom":
    default:
      return <p className={additionalStyle}>{children}</p>;
  }
};
