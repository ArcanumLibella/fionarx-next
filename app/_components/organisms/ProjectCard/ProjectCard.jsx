"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import { TagMission } from "../../atoms";
import { cardVariants, titleVariants } from "./ProjectCard.const";

export const ProjectCard = ({
  title,
  missions,
  slug,
  thumbnail,
}) => {
  // TODO: Ajouter le loading avec un skeleton dans le composant ?
  const router = useRouter();
  const handleClick = () => {
    router.push(`/projets/${slug}`);
  };
  const missionsData = missions?.data;

  return (
    <AnimatePresence>
      {/* TODO: Add animation on page loading */}
      <motion.div
        initial="initial"
        animate="end"
        exit={{ scale: 1, transition: { delay: 0.7, duration: 0.3 } }}
        variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { when: "afterChildren" } }}
        className="ProjectCard h-[56vh] max-h-[56vh] mr-8 md:mr-16 xl:mr-32 cursor-pointer"
      >
        <div
          onClick={handleClick}
          className="relative inline-block w-[74vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] h-full cursor-pointer"
        >
          {/* IMAGE */}
          <div className="ProjectCard__image absolute h-full w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] bg-purple-light">
            {thumbnail && (
              <figure className="h-full">
                <Image
                  src={thumbnail.url}
                  alt={thumbnail.alternativeText}
                  width={thumbnail.width}
                  height={thumbnail.height}
                  blurDataURL={thumbnail.url}
                  placeholder="blur"
                  className="h-full object-cover"
                />
              </figure>
            )}
          </div>

          {/* TITLE */}
          <motion.h2
            variants={titleVariants}
            whileHover="hover"
            className="ProjectCard__title drop-shadow-2xl absolute flex justify-center items-center h-full w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] hover:backdrop-blur-xl text-[6svh] xs:text-[4svh] md:text-[3vh] xl:text-[2.8vw] font-black text-center uppercase font-brother text-white hover:text-tomato"
          >
            {title}
          </motion.h2>

        </div>
        {/* MISSIONS */}
        <div className="ProjectCard__missions absolute flex flex-wrap items-start w-full bottom-[2%] left-[4%] md:top-[58vh] md:left-0">
          {missionsData && missionsData.map((mission) => (
            <TagMission key={mission.id} label={mission.attributes.name} slug={mission.attributes.slug} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
