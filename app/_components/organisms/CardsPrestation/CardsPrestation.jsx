import React from "react";
import { CardPrestation } from "../../molecules";
import { ArrowRightIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";
import { Text } from "../../atoms";

export const CardsPrestation = ({ title, cardsPrestation }) => {
if (!cardsPrestation) return;

  return (
    <div className="relative">
      <ArrowRightIcon 
        className="absolute lg:hidden -right-2 top-1/2 -translate-y-1/2 w-6 h-6 animate-pulse z-50"
        fill={COLORS.tomato.DEFAULT}
        width={24}
        height={24}
      />
      {title && (
        <Text type="custom" className="mt-16 mb-8 text-normal md:text-base lg:text-center font-black text-balance uppercase text-purple-ultraLight">{title}</Text>
      )}
      <div className="CardsPrestation flex lg:flex-wrap gap-8 px-4 mb-12 !-mx-4 overflow-x-auto lg:overflow-hidden max-w-800 lg:max-w-5xl xl:max-w-800 2xl:max-w-5xl md:px-8 md:!-mx-8 xl:!mx-0 xl:px-0 xl:gap-10 scrollbar-hidden">
        {cardsPrestation.map((card) => {
          return (
            <CardPrestation
              key={card.slug}
              title={card.title}
              slug={card.slug}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};
