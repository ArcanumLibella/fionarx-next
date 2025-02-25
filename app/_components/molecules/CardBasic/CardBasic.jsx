import React from "react";
import { Paragraph, Text } from "../../atoms";

export const CardBasic = ({
  title,
  subtitle,
  description 
}) => {
  return (
    <div className="CardBasic p-6 text-center min-w-240 min-h-240 bg-purple-light">
      <Text
        type="custom"
        className="font-brother font-extrabold text-3base uppercase text-tomato"
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          type="custom"
          className="font-brother font-extrabold text-base text-tomato"
        >
          {subtitle}
        </Text>
      )}
      <Paragraph className="mt-4">{description}</Paragraph>
    </div>
  );
};
