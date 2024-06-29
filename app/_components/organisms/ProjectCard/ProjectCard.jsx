"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import { TagMission } from "../../atoms/TagMission";
import { cardVariants, titleVariants } from "./ProjectCard.const";
import { BASE_URL } from "@/app/_utils/strapi.utils";

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
        className="ProjectCard h-[64vh] max-h-[64vh] cursor-pointer"
      >
        <div
          onClick={handleClick}
          className="relative inline-block w-[74vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] h-full cursor-pointer"
        >
          {/* IMAGE */}
          <div className="ProjectCard__image absolute h-[62vh] w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] bg-purple-light">
            {thumbnail && (
              <figure className="h-full">
                <Image
                  src={BASE_URL + thumbnail.url} //FIXME: à changer en prod
                  alt={thumbnail.alternativeText}
                  width={thumbnail.width}
                  height={thumbnail.height}
                  blurDataURL={BASE_URL + thumbnail.url} //FIXME: à changer en prod
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
            className="ProjectCard__title drop-shadow-lg absolute flex justify-center items-center h-full w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] hover:backdrop-blur-xl text-[4.5vh] md:text-[3vh] xl:text-[2.8vw] font-black text-center uppercase font-brother text-white"
          >
            {title}
          </motion.h2>

        </div>
        {/* MISSIONS */}
        <div className="ProjectCard__missions absolute flex flex-wrap items-start w-full gap-2 bottom-[6%] left-[4%] md:top-[64vh] md:left-0">
          {missionsData && missionsData.map((mission) => (
            <TagMission key={mission.id} label={mission.attributes.name} slug={mission.attributes.slug} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
