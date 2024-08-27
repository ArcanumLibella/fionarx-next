import React from "react";
import Link from "next/link";

export const TagMission = ({ label, slug }) => {
  return (
    <Link href={`/missions/${slug}`} className="TagMission flex items-center justify-center mr-2 md:mr-4 mb-2 md:mb-4 px-3 py-1 uppercase border border-white hover:border-tomato font-brother font-bold bg-clip-text cursor-pointer text-white hover:text-tomato text-xxs xs:text-tiny md:text-xs 2xl:text-sm group transition-all ease-in-out hover:duration-300">
      {label}
    </Link>
  );
};
