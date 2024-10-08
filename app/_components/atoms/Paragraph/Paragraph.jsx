import React from 'react'

export const Paragraph = ({
  children,
  className: additionalStyle,
}) => {
  return (
    <p
      className={`Paragraph mb-4 font-body font-light text-2normal selection:bg-purple ${additionalStyle}`}
    >
      {children}
    </p>
  );
};
