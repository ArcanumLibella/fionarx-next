"use client";

import React from "react";
import { Paragraph, Text } from "../../atoms";
import { Button } from "../../molecules";
import Link from "next/link";

export const CardOption = ({
  number,
  title,
  description,
  ctaLabel,
  ctaLink,
  isExternal
}) => {
  return (
    <div className="CardOptionFull flex flex-col justify-between h-full w-full">
      <Link href={ctaLink} className="CardOption flex flex-col justify-between h-full mb-4 lg:mb-0 p-6 bg-purple rounded-xl xl:transform hover:bg-purple-light transition-all cursor-pointer">
        <div className="CardOption__top">

          {/* NUMBER */}
          <Text
            type="custom"
            className="CardOption__number mb-6 font-brother font-black text-md tracking-normal text-white"
          >
            {number}
          </Text>

          {/* TITLE */}
          <Text
            type="custom"
            className="CardOption__title mb-6 font-brother font-bold text-2base xs:text-md md:text-2base tracking-wider text-tomato text-pretty"
          >
            {title}
          </Text>

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
            className="CardOption__button !bg-tomato border-2 border-tomato"
          />
        </div>
      </Link>
    </div>
  );
};
