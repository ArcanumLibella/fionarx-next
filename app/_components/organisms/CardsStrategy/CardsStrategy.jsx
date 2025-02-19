import React from "react";
import { Heading } from "../../atoms";
import { StrategyCard } from "../StrategyCard";

export const CardsStrategy = ({ title, strategyCards }) => {
  if (!strategyCards) return;

  return (
    <div className="CardsStrategy w-full my-12 lg:mb-16 xl:mb-20">
      {title && (
        <div className="CardsStrategy__title flex justify-center w-full">
          <Heading level={4} className="mb-4 text-md xs:text-2md 2xl:text-lg font-bold text-tomato">{title}</Heading>
        </div>
      )}
      
      <div className="CardsStrategy__items flex flex-col md:grid md:grid-cols-3 mt-4 md:mt-8 lg:px-0">
        {strategyCards.map((card) => {
          return (
            <StrategyCard
              key={card.slug}
              type={card.type}
              title={card.title}
              slug={card.slug}
              description={card.description}
              item1={card.item1}
              item2={card.item2}
              item3={card.item3}
              item4={card.item4}
              item5={card.item5}
              ctaLink={card.ctaLink}
              isStrategyCard={card.isStrategyCard}
              isLastCard={card.isLastCard}
              emoji={card.emoji}
              short={card.short}
            />
          );
        })}
      </div>
    </div>
  );
};
