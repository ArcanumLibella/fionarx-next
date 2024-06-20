import React from 'react'

export const Paragraph = ({
  children,
  className: additionalStyle,
}) => {
  return (
    <p
      className={`Paragraph mb-4 font-body font-medium text-normal md:text-base selection:bg-purple ${additionalStyle}`}
    >
      {children}
    </p>
  );
};
