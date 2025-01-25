import React from 'react';
import { List } from "../List";
import { Paragraph, Text } from "../../atoms";
import { CtaBlob } from "../CtaBlob";
import { HeaderGradient } from "../../molecules";

export const PricingPack = ({
  title,
  description,
  button,
  items,
  hasSupport,
  supportTitle,
  supportDescription,
  mentoringTitle,
  mentoringSubtitle,
  mentoringDescription,
  ctaTitle,
  ctaPricing,
  ctaDetail,
  isDiscounted
}) => {  
  return (
    <div className="PricingPack mb-20 lg:mb-32">
      <HeaderGradient title={title} description={description} button={button} />
      <div className="PricingPack__list p-6 pb-0 border-4 border-tomato rounded-lg">
        <List items={items} className="!my-4" />
      </div>
      {(hasSupport || mentoringTitle) && (
        <div className="PricingPack__plus flex justify-center">
          <Text type="custom" className="text-bold text-xl text-tomato">+</Text>
        </div>
      )}

      {hasSupport && (
        <>
          <div className="PricingPack__support Support flex flex-col justify-center">
          <Text type="paragraphLarge" className="Support__title text-center text-base lg:!text-md 2xl:!text-2lg text-tomato text-balance">
            {supportTitle}
          </Text>
          <Text type="paragraphLarge" className="Support__description mb-4 text-center text-base md:!text-base lg:!text-2base 2xl:!text-md text-balance">
            {supportDescription}
          </Text>
          <div className="PricingPack__plus flex justify-center">
            <Text type="custom" className="text-bold text-xl text-tomato">+</Text>
          </div>
        </div>
        </>
      )}
      <div className="PricingPack__mentoring Mentoring flex flex-col justify-center">
        <Text type="paragraphLarge" className="Mentoring__title text-center text-base lg:!text-md 2xl:!text-2lg text-tomato text-balance">
          {mentoringTitle}
        </Text>
        <Text type="paragraphLarge" className="Mentoring__subtitle mb-4 text-center text-base md:!text-base lg:!text-2base 2xl:!text-md text-balance">
          {mentoringSubtitle}
        </Text>
        <Paragraph className="Mentoring__description mb-16 text-center text-balance">
          {mentoringDescription}
        </Paragraph>
      </div>
      <CtaBlob title={ctaTitle} pricing={ctaPricing} detail={ctaDetail} isDiscounted={isDiscounted} />
    </div>
  );
};