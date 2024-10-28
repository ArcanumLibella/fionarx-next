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
          className={`paragraphLarge font-brother font-bold -tracking-wide selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphLight":
      return (
        <p
          className={`paragraphLight font-body font-extralight tracking-wider leading-relaxed selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "custom":
    default:
      return (
        <p className={`paragraphCustom ${additionalStyle}`}>
          {children}
        </p>
      );
  }
};
