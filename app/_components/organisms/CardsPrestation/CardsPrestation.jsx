import React from "react";
import { CardPrestation } from "../../molecules";
import { ChevronRightIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";
import { Heading } from "../../atoms";

export const CardsPrestation = ({ title, cardsPrestation }) => {
if (!cardsPrestation) return;

  return (
    <div className="CardsPrestation relative flex flex-col">
      <ChevronRightIcon 
        className="absolute md:hidden -right-2 top-1/2 w-9 h-9 animate-right z-50"
        stroke={COLORS.tomato.DEFAULT}
        width={36}
        height={36}
      />
      {title && (
        <div className="CardsPrestation__title flex justify-center w-full">
          <Heading level="gradient" className="h-gradient max-w-xl my-12 md:my-16">{title}</Heading>
        </div>
      )}
      <div className="CardsPrestation__wrapper flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-12 !-mx-4 md:!-mx-8 xl:!mx-0 px-4 md:px-8 xl:px-0 overflow-x-auto lg:overflow-hidden max-w-800 lg:max-w-5xl xl:max-w-800 2xl:max-w-5xl scrollbar-hidden">
        {cardsPrestation.map((card) => {
          return (
            <CardPrestation
              key={card.id}
              title={card.title}
              slug={card.slug}
              description={card.description}
              isFrom={card.isFrom}
              pricing={card.pricing}
              isDisabled={card.isDisabled}
              button={card.button}
            />
          );
        })}
      </div>
    </div>
  );
};
