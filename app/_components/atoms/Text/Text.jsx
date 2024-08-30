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
          className={`ParagraphLarge font-brother font-bold text-base xs:text-2base md:text-3base 2xl:text-md -tracking-wide selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "paragraphLight":
      return (
        <p
          className={`ParagraphLight font-body font-extralight text-normal md:text-base tracking-wider leading-relaxed selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </p>
      );
    case "custom":
    default:
      return (
        <p className={`ParagraphCustom ${additionalStyle}`}>
          {children}
        </p>
      );
  }
};
