import React from "react";
import Link from "next/link";

export const MenuItem = ({ label, path, toggleMenuItem }) => {
  return (
    <Link
      href={path}
      onClick={toggleMenuItem}
      className="font-black uppercase cursor-pointer text-[5vh] md:text-[10vw] lg:text-[7vh] xl:text-[10vh] font-brother text-stroke-DEFAULT md:text-stroke-2 text-stroke-white text-fill-transparent"
    >
      {label}
    </Link>
  );
};
