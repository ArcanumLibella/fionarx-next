import React from "react";
import { PricingCard } from "../PricingCard";
import { Heading } from "../../atoms";

export const CardsPricing = ({ title, pricingCards }) => {
if (!pricingCards) return;

  return (
    <div className="CardsPricing w-full">
      <Heading
        level={5}
        className="CardsPricing__title max-w-2xl mx-auto my-16 text-center"
      >
        {title}
      </Heading>
      
      <div className="CardsPricing__items flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 lg:px-6">
        {pricingCards.map((card) => {
          return (
            <PricingCard
              key={card.formula}
              title={card.title}
              formula={card.formula}
              isFrom={card.isFrom}
              price={card.price}
              item1={card.item1}
              item2={card.item2}
              item3={card.item3}
              item4={card.item4}
              item5={card.item5}
              item6={card.item6}
            />
          );
        })}
      </div>
    </div>
  );
};
