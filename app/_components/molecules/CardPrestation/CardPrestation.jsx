"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Heading, Paragraph } from "../../atoms";
import { cardVariants } from "./CardPrestation.const";

export const CardPrestation = ({
  title,
  slug,
  description 
}) => {
  return (
    <AnimatePresence>
      <Link href={`prestations/${slug}`} className="CardPrestation flex-1 h-full text-center min-w-240 scroll-mr-8 cursor-pointer group">
        <motion.div
          initial="initial"
          animate="end"
          exit={{ scale: 1, transition: { delay: 0.7, duration: 0.3 } }}
          variants={cardVariants}
          whileHover={{ scale: 1.05, transition: { when: "afterChildren" } }}
        >
          <div className="p-6 bg-purple">
            <Heading
              level={5}
              className="!font-bold text-tomato"
            >
              {title}
            </Heading>
          </div>
          <div
            className="p-6 bg-purple-light group-hover:bg-tomato transition-all ease-in-out duration-300"
          >
            <Paragraph>{description}</Paragraph>
          </div>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};
