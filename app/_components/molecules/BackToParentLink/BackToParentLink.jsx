"use client";

import Link from 'next/link';
import { ArrowLeftIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const BackToParentLink = ({ parentPath }) => {
  return (
    <Link href={parentPath} className="flex items-center mb-8">
      <ArrowLeftIcon
        fill={COLORS.white.DEFAULT}
        width={24}
        height={24}
      />
      <span className="h6 font-bold text-white uppercase hover:text-tomato transition-all ease-in-out">
        Retour
      </span>
  </Link>
  );
};
