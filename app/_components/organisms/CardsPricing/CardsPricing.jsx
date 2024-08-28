import React from "react";
import { PricingCard } from "../PricingCard";
import { Text } from "../../atoms";

export const CardsPricing = ({ title, pricingCards }) => {
if (!pricingCards) return;

  return (
    <div className="CardsPricing w-full">
      <Text type="custom" className="CardsPricing__title mt-16 mb-8 xl:mb-12 text-normal md:text-base lg:text-center font-black text-balance uppercase text-purple-ultraLight">
        {title}
      </Text>
      
      <div className="CardsPricing__items flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mb-12 lg:px-6">
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
