import React from "react";
import { CardBasicImage } from "../../molecules";

export const CardsBasicImage = ({ items }) => {
  return (
    <div className="CardsBasicImage flex flex-col xl:min-w-max md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 mt-12 mb-16 md:mb-24 lg:mt-12 overflow-x-hidden scrollbar-hidden">
      {items.map((item) => {
        return (
          <CardBasicImage
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};
