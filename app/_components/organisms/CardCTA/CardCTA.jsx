import React from "react";
import { Text } from "../../atoms";
import { Button } from "../../molecules";

export const CardCTA = ({
  title,
  subtitle,
  buttonLabel,
  buttonSlug,
  isExternal
}) => {
  return (
    <div className="CardCTAFull flex flex-col justify-between h-full">
      <div className="DescriptionCard flex flex-col justify-between items-center md:h-full lg:max-h-[188px] lg:min-h-[188px] xl:max-h-[220px] xl:min-h-[220px] 2xl:max-h-[180px] 2xl:min-h-[180px] md:mx-4 xl:mx-3 mb-4 p-2" />
      <div className="CardCTA flex flex-col justify-center items-center h-full md:mx-4 xl:mx-3 mb-8 lg:mb-0 p-4 cursor-pointer">
        <Text type="paragraphLarge" className="CardCTA__title mb-4 text-center text-base lg:!text-md 2xl:!text-2lg text-balance text-tomato">
          {title}
        </Text>
        <Text type="custom" className="CardCTA__subtitle mb-8 lg:mb-16 text-center font-normal text-normal xs:text-base lg:!text-2base 2xl:!text-2md text-balance">
          {subtitle}
        </Text>

        <Button
          label={buttonLabel}
          url={buttonSlug}
          isExternal={isExternal}
          isCentered
          className="CardCTA__button !w-auto lg:!w-full !text-white bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%"
        />
      </div>
    </div>
  );
};

export default CardCTA;
