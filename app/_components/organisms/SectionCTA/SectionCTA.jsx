import React from "react";
import { Text } from "../../atoms";
import { ButtonLarge } from "../../molecules";

export const SectionCTA = ({
  title,
  subtitle,
  button,
  isLarge,
  className: additionnalStyle
}) => {
  return (
    <div className={`SectionCTA my-16 ${isLarge && "isLarge my-0"} ${additionnalStyle} flex flex-col xs:px-4 lg:px-12 z-50`}>
      <Text type="custom" className="SectionCTA__title mb-4 text-center font-bold text-base lg:text-3base 2xl:text-lg text-balance text-tomato">
        {title}
      </Text>
      {subtitle && (
        <Text type="custom" className="SectionCTA__subtitle mb-12 md:mb-16 text-center font-normal text-normal xs:text-base 2xl:!text-3base text-balance">
          {subtitle}
        </Text>
      )}

      {button && (
        <ButtonLarge
          label={button.label}
          url={button.url}
          isExternal={button.isExternal}
          isCentered={button.isCentered}
        />
      )}
    </div>
  );
};

export default SectionCTA;
