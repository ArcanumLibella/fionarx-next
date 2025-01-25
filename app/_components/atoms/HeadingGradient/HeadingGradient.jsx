import React from "react";
import { Heading } from "../Heading";

export const HeadingGradient = ({ title, className: additionalStyle, }) => {
  return (
    <div className="HeadingGradient flex justify-center w-full max-w-800 mx-auto">
      <Heading level="gradient" className={`h-gradient my-12 md:my-16 ${additionalStyle}`}>{title}</Heading>
    </div>
  )
}