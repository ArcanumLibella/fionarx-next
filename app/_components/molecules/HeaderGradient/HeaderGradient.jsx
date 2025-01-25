import React from "react";
import { HeadingGradient, Paragraph } from "../../atoms";
import { Button } from "../Button";
import { ButtonLarge } from "../ButtonLarge";

export const HeaderGradient = ({ title, description, button }) => {
  if (!title) return;
  
  return (
    <div className="HeaderGradient mb-16">
      {title && (
        <HeadingGradient title={title} className="HeaderGradient__title !mb-4" />
      )}
      {description && (
        <Paragraph className="HeaderGradient__description mb-16 text-center !font-semibold !text-balance">
          {description}
        </Paragraph>
      )}
      {button && (
        <ButtonLarge
          label={button.label}
          url={button.url}
          isExternal={button.isExternal}
          isCentered={button.isCentered}
          className="mt-8 md:mt-12"
        />
      )}
    </div>
  );
};
