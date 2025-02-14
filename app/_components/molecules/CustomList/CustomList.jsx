"use client";

import React from "react";
import { Paragraph } from "../../atoms";
import { CheckBigIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const CustomList = ({ children }) => {
  if (!children) return;

  return (
    <ul className="list-none">
      {React.Children.map(children, (child, index) => (
        <li key={index} className="Checklist flex items-start mb-6 not-italic">
          <CheckBigIcon
            fill={COLORS.tomato.DEFAULT}
            width={24}
            height={24}
            className="min-w-6 mr-2"
          />
        <Paragraph className="!mb-0 text-normal xs:text-2normal">
          {child}
        </Paragraph>
      </li>
      ))}
    </ul>
  );
};
