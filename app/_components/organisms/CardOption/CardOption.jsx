"use client";

import React from "react";
import { Heading, Paragraph, Text } from "../../atoms";
import { Button } from "../../molecules";
import Link from "next/link";

export const CardOption = ({
  tag,
  isLarge,
  title,
  description,
  ctaLabel,
  ctaLink,
  isDisabled,
  isExternal
}) => {
  const CardContent = (
    <>
      <div className="CardOption__top">
        {/* TAG */}
        <Text
          type="custom"
          className={`CardOption__tag mb-6 font-brother tracking-normal text-white ${isLarge ? "font-black text-md" : "font-bold text-normal"}`}
        >
          {tag}
        </Text>

        {/* TITLE */}
        <Heading
          level={3}
          className="CardOption__title mb-6 font-brother !font-black text-2base xs:text-md md:text-2base uppercase -tracking-wide text-tomato text-pretty"
        >
          {title}
        </Heading>

        {/* DESCRIPTION */}
        <Paragraph className="CardOption__description !mb-10">
          {description}
        </Paragraph>
      </div>

      <div className="CardOption__bottom flex flex-col justify-between">
        {/* BUTTON */}
        <Button
          label={ctaLabel}
          url={ctaLink}
          isCentered
          isExternal={isExternal}
          isDisabled={isDisabled}
          className="CardOption__button"
        />
      </div>
    </>
  )

  return (
    <div className="CardOptionFull flex flex-col justify-between h-full w-full">
      {isDisabled ? (
        <div className="CardOption flex flex-col justify-between h-full mb-4 lg:mb-0 p-6 bg-purple rounded-xl">
          {CardContent}
        </div>
      ) : (
        <Link href={ctaLink} className="CardOption flex flex-col justify-between h-full mb-4 lg:mb-0 p-6 bg-purple rounded-xl xl:transform hover:bg-purple-light transition-all cursor-pointer">
          {CardContent}
        </Link>
      )}
    </div>
  );
};
