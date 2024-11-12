import React from "react";
import { CardBasic } from "../../molecules";

export const CardsBasic = ({ items }) => {
  return (
    <div className="CardsBasic flex flex-col md:grid grid-cols-2 gap-4 xl:gap-6 my-8">
      {items.map((item) => {
        return (
          <CardBasic
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        );
      })}
    </div>
  );
};
