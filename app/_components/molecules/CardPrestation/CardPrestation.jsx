import React from "react";
import { Heading, Paragraph } from "../../atoms";

export const CardPrestation = ({ title, description }) => {
  // TODO: A transformer en élément cliquable
  return (
    <div className="CardPrestation flex-1 h-full text-center min-w-240 scroll-mr-8 cursor-pointer">
      <div className="p-6 bg-purple">
        <Heading
          level={5}
          className="!font-bold text-tomato"
        >
          {title}
        </Heading>
      </div>
      <div className="p-6 bg-purple-light">
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};
