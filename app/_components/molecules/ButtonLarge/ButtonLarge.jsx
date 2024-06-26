import React from 'react';
import Link from "next/link";
import { Text } from "../../atoms/Text";

export const ButtonLarge = ({
  label,
  url,
  isExternal,
  isCentered,
  style: additionalStyle,
}) => {
  return (
    <Link
      href={url}
      className={`
        flex px-8 py-5 max-w-fit border-2 border-tomato rounded-md group transition-all ease-in-out hover:duration-300 hover:bg-tomato cursor-pointer
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
