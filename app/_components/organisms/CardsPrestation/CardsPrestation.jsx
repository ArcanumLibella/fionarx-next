import React from "react";
import { CardPrestation } from "../../molecules";
import { ArrowRightIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const CardsPrestation = ({ cardsPrestation }) => {
if (!cardsPrestation) return;

  return (
    <div className="relative">
      <ArrowRightIcon 
        className="absolute lg:hidden -right-2 top-1/2 -translate-y-1/2 w-12 h-12 animate-pulse"
        fill={COLORS.white.DEFAULT}
        width={40}
        height={40}
      />
      <div className="CardsPrestation flex lg:grid lg:grid-cols-3 gap-8 px-4 mb-12 !-mx-4 overflow-x-auto lg:overflow-hidden max-w-800 lg:max-w-5xl xl:max-w-800 2xl:max-w-5xl md:px-8 md:!-mx-8 xl:!mx-0 xl:px-0 xl:gap-10">
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
