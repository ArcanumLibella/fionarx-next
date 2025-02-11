import React from "react";
import { DynamicText, Heading } from "../../atoms";
import { CardCTA, PricingCard } from "../../organisms";

export const CardsPricing = ({ title, description, pricingCards, cardCTA }) => {
if (!pricingCards) return;

  return (
    <div className="CardsPricing w-full my-12 xl:mb-20">
      {title && (
        <div className="CardsPrestation__title flex justify-center w-full">
          <Heading level="gradient" className="h-gradient max-w-xl mb-4 text-pretty">{title}</Heading>
        </div>
      )}
      {description && (
        <div className="CardsPrestation__description flex justify-center w-full mb-12">
          <div className="text-center">
            <DynamicText text={description} />
          </div>
        </div>
      )}
      
      <div className="CardsPricing__items flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 lg:px-0">
        {pricingCards.map((card) => {
          return (
            <PricingCard
              key={card.formula}
              description={card.description}
              formula={card.formula}
              isDisabled={card.isDisabled}
              isLarge={card.isLarge}
              title={card.title}
              slug={card.slug}
              isExternal={card.isExternal}
              isFrom={card.isFrom}
              isMonthly={card.isMonthly}
              price={card.price}
              isFree={card.isFree}
              duration={card.duration}
              item1={card.item1}
              item2={card.item2}
              item3={card.item3}
              item4={card.item4}
              item5={card.item5}
              item6={card.item6}
              item7={card.item7}
              item8={card.item8}
              item9={card.item9}
              hasSupport={card.hasSupport}
              supportTitle={card.supportTitle}
              supportDescription={card.supportDescription}
              mentoringTitle={card.mentoringTitle}
              mentoringDescription={card.mentoringDescription}
            />
          );
        })}
        {cardCTA && (
          <div className="col-span-2 lg:col-span-1">
            <CardCTA
              title={cardCTA.title}
              subtitle={cardCTA.subtitle}
              buttonLabel={cardCTA.buttonLabel}
              buttonSlug={cardCTA.buttonSlug}
              isExternal={cardCTA.isExternal}
            />
          </div>
        )}
      </div>
    </div>
  );
};
