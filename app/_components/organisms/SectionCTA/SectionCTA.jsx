import React from "react";
import { Separator, Text } from "../../atoms";
import { ButtonLarge } from "../../molecules";

export const SectionCTA = ({ title, subtitle, button }) => {
  return (
    <div className="SectionCTA relative -bottom-16 md:-bottom-24 xl:-bottom-48 2xl:-bottom-96 flex flex-col items-center md:ml-24 px-4 md:px-20 pb-24 md:pb-48 z-50">
      <Text type="paragraphLarge" className="SectionCTA__title mb-4 text-base lg:!text-md 2xl:!text-2lg text-center text-tomato">
        {title}
      </Text>
      <Text type="custom" className="SectionCTA__subtitle font-normal text-normal xs:text-base lg:!text-2base 2xl:!text-2md text-center">
        {subtitle}
      </Text>

      <Separator />
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
