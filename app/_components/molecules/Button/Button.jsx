import React from 'react';
import Link from "next/link";
import { Text } from "../../atoms";

export const Button = ({
  label,
  url,
  isExternal,
  isCentered,
  isDisabled,
  className: additionalStyle,
}) => {
  const ButtonContent = (
    <Text 
      type="custom"
      className="font-brother font-black text-tiny text-center text-white uppercase text-pretty"
    >
      {label}
    </Text>
  )

  return (
      isDisabled ? (
        <div
          className={`
            flex justify-center px-5 py-3 w-full rounded-md !bg-purple-dark !border-purple-dark
            ${isCentered && 'mx-auto'}
            ${additionalStyle}
          `}
        >
          {ButtonContent}
        </div>
      ) : (
        <Link
          href={url}
          className={`
            flex justify-center px-5 py-3 w-full rounded-md group transition-all ease-in-out hover:duration-300 hover:bg-tomato cursor-pointer
            ${isCentered && 'mx-auto'}
            ${additionalStyle}
          `}
          target={isExternal ? '_blank' : '_self'}
        >
          {ButtonContent}
        </Link>
      )
  );
};
