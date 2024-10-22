import React from 'react';
import Link from "next/link";
import { Text } from "../../atoms";

export const ButtonLarge = ({
  label,
  url,
  isExternal,
  isCentered,
  className: additionalStyle,
}) => {
  return (
    <Link
      href={url}
      className={`
        flex items-center px-8 py-5 max-w-fit border-2 border-tomato rounded-md group transition-all ease-in-out hover:duration-300 hover:bg-tomato cursor-pointer
        ${isCentered && 'mx-auto'}
        ${additionalStyle}
      `}
      target={isExternal ? '_blank' : '_self'}
    >
      <Text 
        type="custom"
        className="font-brother font-black text-base text-center text-tomato group-hover:text-white group-hover:duration-300 uppercase"
      >
        {label}
      </Text>
    </Link>
  );
};
