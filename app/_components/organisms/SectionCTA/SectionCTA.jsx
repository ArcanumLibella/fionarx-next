import React from "react";
import { Separator, Text } from "../../atoms";
import { ButtonLarge } from "../../molecules";

export const SectionCTA = ({
  title,
  subtitle,
  button,
  className: additionnalStyle
}) => {
  return (
    <div className={`SectionCTA ${additionnalStyle} flex flex-col items-center px-4 md:px-20 z-50`}>
      <Text type="paragraphLarge" className="SectionCTA__title mb-4 text-center text-base lg:!text-md 2xl:!text-2lg text-balance text-tomato">
        {title}
      </Text>
      <Text type="custom" className="SectionCTA__subtitle mb-16 text-center font-normal text-normal xs:text-base lg:!text-2base 2xl:!text-2md text-balance">
        {subtitle}
      </Text>

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
