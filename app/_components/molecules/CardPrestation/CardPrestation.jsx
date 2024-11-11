"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heading, Paragraph } from "../../atoms";
import { cardVariants } from "./CardPrestation.const";

export const CardPrestation = ({
  title,
  slug,
  description 
}) => {
  return (
    <div className="CardPrestation flex-1 h-full mr-8 mb-8 text-center min-w-240 scroll-mr-8 group cursor-default">
      <div className="p-6 bg-purple">
        <Heading
          level={3}
          className="!my-0 font-extrabold uppercase text-tomato"
        >
          {title}
        </Heading>
      </div>
      <div
        className="p-6 bg-purple-light group-hover:bg-tomato transition-all ease-in-out duration-300"
      >
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};
