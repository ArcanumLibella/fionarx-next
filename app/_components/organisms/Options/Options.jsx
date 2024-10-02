import React from "react";
import { CardOption } from "../CardOption";
import { Heading, Paragraph } from "../../atoms";

export const Options = ({ title, description, options }) => {
if (!options) return;

  return (
    <div className="Options w-full my-16 2xl:mt-32">
      {title && (
        <div className="CardsPrestation__title flex justify-center w-full">
          <Heading level="gradient" className="max-w-xl mb-4">{title}</Heading>
        </div>
      )}
      {description && (
        <div className="CardsPrestation__description flex justify-center w-full">
          <Paragraph className="text-center">{description}</Paragraph>
        </div>
      )}

      <div className="Options__items flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt16 lg:px-0 gap-3 xl:gap-6">
        {options.map((option) => {
          return (
            <CardOption
              key={option.id}
              number={option.number}
              title={option.title}
              description={option.description}
              ctaLabel={option.ctaLabel}
              ctaLink={option.ctaLink}
            />
          );
        })}
      </div>
    </div>
  );
};
