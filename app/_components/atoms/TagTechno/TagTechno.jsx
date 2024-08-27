import React from "react";
import Link from "next/link";

export const TagTechno = ({ label, slug }) => {
  return (
    <Link href={`/technos/${slug}`} className="TagTechno flex items-center justify-center mr-2 md:mr-4 px-3 py-1 rounded-lg uppercase font-brother font-medium bg-purple-light text-white text-xs 2xl:text-xxs">
      {label}
    </Link>
  );
};
