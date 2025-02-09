import React from "react";
import { DynamicText, Heading } from "../../atoms";
import { CardList } from "../CardList";

export const CardsList = ({ title, description, cards }) => {
if (!cards) return;

  return (
    <div className="CardsList w-full my-16">
      {title && (
        <div className="CardsList__title flex justify-center w-full">
          <Heading level="gradient" className="h-gradient max-w-xl mb-4">{title}</Heading>
        </div>
      )}
      {description && (
        <div className="CardsList__description text-center w-full">
          <DynamicText text={description} />
        </div>
      )}

      <div className="CardsList__items flex flex-col md:grid md:grid-cols-2 mt-12 lg:px-0 gap-3 xl:gap-12">
        {cards.map((card) => {
          return (
            <CardList
              key={card.id}
              title={card.title}
              description={card.description}
              ctaLabel={card.ctaLabel}
              ctaLink={card.ctaLink}
              isDisabled={card.isDisabled}
              isExternal={card.isExternal}
            />
          );
        })}
      </div>
    </div>
  );
};
