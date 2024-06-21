import React from 'react';
import { COLORS } from "../../../_constants/Colors";
import { Heading } from "../../atoms/Heading";
import { ArrowLeftIcon, ArrowRightIcon } from "@/app/_assets/icons";
import Link from "next/link";

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
      <Heading level={6} className="font-bold text-white uppercase">
        {label}
      </Heading>
      {handleSideArrow()}
    </Link>
  );
};
