import React from "react";
import Link from "next/link";

export const MenuItem = ({ label, path, toggleMenuItem }) => {
  return (
    <Link
      href={path}
      onClick={toggleMenuItem}
      title={label}
      className="font-brother font-black text-[10vw] xs:text-[5vh] md:text-[10vw] lg:text-[7vh] xl:text-[9vh] leading-none text-stroke-DEFAULT md:text-stroke-2 text-stroke-white text-fill-transparent uppercase text-pretty cursor-pointer"
    >
      {label}
    </Link>
  );
};
