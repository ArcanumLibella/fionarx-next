import Link from "next/link";
import React from "react";

export const TagCategory = ({ name, slug }) => {
  return (
    <Link
      href={`/categories/${slug}`}
      className="TagCategory flex items-center justify-center mr-2 md:mr-4 mb-2 md:mb-4 px-3 py-1 rounded-md uppercase font-brother font-bold cursor-pointer bg-purple-ultraLight hover:bg-purple-light text-white hover:text-white text-xxs xs:text-tiny md:text-xs 2xl:text-sm group transition-all ease-in-out hover:duration-300"
    >
      {name}
    </Link>
  );
};
