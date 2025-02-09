"use client";

import React from "react";
import { DynamicText, Heading } from "../../atoms";
import { Button } from "../../molecules";
import Link from "next/link";

export const CardList = ({
  title,
  description,
  ctaLabel,
  ctaLink,
  isDisabled,
  isExternal
}) => {
  const CardContent = (
    <>
      <div className="CardList__top">
        {/* TITLE */}
        <Heading
          level={3}
          className="CardList__title !mt-0 mb-6 font-brother !font-black text-2base md:text-2base uppercase -tracking-wide text-tomato text-pretty"
        >
          {title}
        </Heading>

        {/* DESCRIPTION */}
        <DynamicText text={description} className="CardList__description !mb-10" />
      </div>

      {ctaLabel && (
        <div className="CardList__bottom flex flex-col justify-between mt-6">
          {/* BUTTON */}
          <Button
            label={ctaLabel}
            url={ctaLink}
            isCentered
            isExternal={isExternal}
            isDisabled={isDisabled}
            className="CardList__button"
          />
        </div>
      )}
    </>
  )

  return (
    <div className="CardListFull flex flex-col justify-between h-full w-full">
      {isDisabled ? (
        <div className="CardList flex flex-col justify-between h-full mb-4 lg:mb-0 p-6 xl:p-8 2xl:p-10 bg-purple rounded-xl">
          {CardContent}
        </div>
      ) : (
        <Link href={ctaLink} target={isExternal ? '_blank' : '_self'} className="CardList flex flex-col justify-between h-full mb-4 lg:mb-0 p-6 xl:p-8 2xl:p-10 bg-purple rounded-xl xl:transform hover:bg-purple-light transition-all cursor-pointer">
          {CardContent}
        </Link>
      )}
    </div>
  );
};
