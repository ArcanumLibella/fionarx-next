import React from "react";
import { CardOption } from "../CardOption";

export const Options = ({ options }) => {
if (!options) return;

  return (
    <div className="Options w-full my-16 2xl:mt-32">
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
