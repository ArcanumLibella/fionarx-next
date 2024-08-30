import React from "react";
import { CardPrestation } from "../../molecules";
import { ArrowRightIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";
import { Heading, Text } from "../../atoms";

export const CardsPrestation = ({ title, cardsPrestation }) => {
if (!cardsPrestation) return;

  return (
    <div className="CardsPrestation relative flex flex-col">
      <ArrowRightIcon 
        className="absolute lg:hidden -right-2 top-1/2 -translate-y-1/2 w-6 h-6 animate-pulse z-50"
        fill={COLORS.tomato.DEFAULT}
        width={24}
        height={24}
      />
      {title && (
        <div className="CardsPrestation__title flex justify-center w-full">
          <Heading level="gradient" className="max-w-xl my-12 md:my-16">{title}</Heading>
        </div>
      )}
      <div className="CardsPrestation__wrapper flex lg:flex-wrap mb-12 !-mx-4 md:!-mx-8 xl:!mx-0 px-4 md:px-8 xl:px-0 overflow-x-auto lg:overflow-hidden max-w-800 lg:max-w-5xl xl:max-w-800 2xl:max-w-5xl scrollbar-hidden">
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
