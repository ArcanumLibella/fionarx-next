import React from "react";
import { PricingCard } from "../PricingCard";
import { Heading, Paragraph, Text } from "../../atoms";

export const CardsPricing = ({ title, description, pricingCards }) => {
if (!pricingCards) return;

  return (
    <div className="CardsPricing w-full my-16 2xl:mt-32">
      {title && (
        <div className="CardsPrestation__title flex justify-center w-full">
          <Heading level="gradient" className="max-w-xl mb-4">{title}</Heading>
        </div>
      )}
      {description && (
        <div className="CardsPrestation__description flex justify-center w-full">
          <Paragraph level="gradient" className="text-center">{description}</Paragraph>
        </div>
      )}
      
      <div className="CardsPricing__items flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt16 lg:px-0">
        {pricingCards.map((card) => {
          return (
            <PricingCard
              key={card.formula}
              formula={card.formula}
              title={card.title}
              slug={card.slug}
              isFrom={card.isFrom}
              price={card.price}
              time={card.time}
              item1={card.item1}
              item2={card.item2}
              item3={card.item3}
              item4={card.item4}
              item5={card.item5}
              item6={card.item6}
              item7={card.item7}
              item8={card.item8}
              item9={card.item9}
              supportTitle={card.supportTitle}
              supportDescription={card.supportDescription}
            />
          );
        })}
      </div>
    </div>
  );
};
