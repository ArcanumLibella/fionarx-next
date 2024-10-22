import React from 'react';
import { ButtonLarge } from "../ButtonLarge";

export const DoubleButton = ({ firstButton, secondButton }) => {
  return (
    <div className="grid md:grid-cols-2 justify-items-center place-items-stretch gap-4 mt-16">
      {firstButton && (
        <ButtonLarge
          label={firstButton.label}
          url={firstButton.url}
          isExternal={firstButton.isExternal}
          isCentered={firstButton.isCentered}
        />
      )}
      {secondButton && (
        <ButtonLarge
          label={secondButton.label}
          url={secondButton.url}
          isExternal={secondButton.isExternal}
          isCentered={secondButton.isCentered}
        />
      )}
    </div>
  );
};
