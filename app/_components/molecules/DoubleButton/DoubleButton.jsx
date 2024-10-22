import React from 'react';
import { ButtonLarge } from "../ButtonLarge";

export const DoubleButton = ({ firstButton, secondButton }) => {
  return (
    <div className="flex justify-between">
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
