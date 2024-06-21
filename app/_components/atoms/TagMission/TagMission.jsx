import React from "react";
import Link from "next/link";

export const TagMission = ({ label, slug }) => {
  return (
    <Link href={`/missions/${slug}`} className="TagMission flex items-center justify-center px-3 py-1 uppercase border border-white hover:border-tomato font-brother font-bold bg-clip-text cursor-pointer text-white hover:text-tomato text-xs 2xl:text-xxs group transition-all ease-in-out hover:duration-300">
      {label}
    </Link>
  );
};
