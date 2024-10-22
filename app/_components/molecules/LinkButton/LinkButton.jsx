import React from 'react';
import Link from "next/link";
import { COLORS } from "../../../_constants/Colors";
import { ArrowLeftIcon, ArrowRightIcon } from "@/public/_assets/icons";

export const LinkButton = ({
  side = "right",
  label,
  path,
  className: additionalStyle,
}) => {
  const handleSideArrow = () => {
    if (side === "left") {
      return (
        <ArrowLeftIcon
          fill={COLORS.white.DEFAULT}
          className="mr-2 transition-all group-hover:-translate-x-1"
        />
      );
    }
    return (
      <ArrowRightIcon
        fill={COLORS.white.DEFAULT}
        className="ml-2 transition-all group-hover:translate-x-1"
      />
    );
  };

  return (
    <Link
      href={path}
      className={`
        flex items-center z-30 group 
        ${side === "left" && "flex-row-reverse"}
        ${additionalStyle}
      `}
    >
      <span className="mt-1 font-bold text-white uppercase">
        {label}
      </span>
      {handleSideArrow()}
    </Link>
  );
};
