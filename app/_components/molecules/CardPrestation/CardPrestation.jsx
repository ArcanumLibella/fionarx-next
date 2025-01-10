"use client";

import React from "react";
import Link from "next/link";
import { Heading, Paragraph } from "../../atoms";

export const CardPrestation = ({
  title,
  slug,
  description 
}) => {
  const CardContent = (
    <>
      <div className="p-6 bg-purple">
        <Heading
          level={3}
          className="!text-base !my-0 font-extrabold text-tomato"
        >
          {title}
        </Heading>
      </div>
      <div className="p-6 bg-purple-light group-hover:bg-tomato transition-all ease-in-out duration-300">
        <Paragraph>{description}</Paragraph>
      </div>
    </>
  )

  return (
    slug ? (
      <Link href={slug} className="CardPrestation flex-1 h-full mr-8 mb-8 text-center min-w-240 scroll-mr-8 group cursor-pointer">
        {CardContent}
      </Link>
    ) : (
      <div className="CardPrestation flex-1 h-full mr-8 mb-8 text-center min-w-240 scroll-mr-8 cursor-default">
        {CardContent}
      </div>
    )
  );
};
