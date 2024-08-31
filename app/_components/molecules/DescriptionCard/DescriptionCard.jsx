"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Text } from "../../atoms";
import { ChevronsDownBigIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const DescriptionCard = ({ description }) => {
  if (!description) return;

  return (
    <div className="DescriptionCard flex flex-col justify-between items-center md:h-full md:max-h-[188px] md:min-h-[188px] xl:max-h-[220px] xl:min-h-[220px] 2xl:max-h-[180px] 2xl:min-h-[180px] md:mx-4 xl:mx-3 mb-4 p-2">
      <BlocksRenderer 
        content={description}
        blocks={{
          paragraph: ({ children }) => (
            <Text type="custom" className="font-brother text-center font-normal text-base md:text-normal text-balance leading-relaxed">
              {children}
            </Text>
          )
        }}
        modifiers={{
          bold: ({ children }) => <strong className="!font-bold text-tomato">{children}</strong>,
          italic: ({ children }) => <span className="!italic">{children}</span>,
        }}
      />
      <ChevronsDownBigIcon 
          stroke={COLORS.tomato.DEFAULT}
          width={32}
          height={32}
          className="mt-4 animate-down"
        />
    </div>
  );
};
