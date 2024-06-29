import React from 'react';

export const Spacer = ({ mobileSize, size }) => {
  return <div className={`Spacer w-full my-${mobileSize} md:my-${size} max-w-4/12 bg-tomato`} />;
};
