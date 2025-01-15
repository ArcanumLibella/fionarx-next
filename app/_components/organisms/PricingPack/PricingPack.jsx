import React from 'react';
import { List } from "../List";
import { Paragraph, Text } from "../../atoms";
import { CtaBlob } from "../CtaBlob";

export const PricingPack = ({
  items,
  hasSupport,
  supportTitle,
  supportDescription,
  mentoringTitle,
  mentoringSubtitle,
  mentoringDescription,
  ctaTitle,
  ctaPricing,
  ctaDetail 
}) => {  
  return (
    <div className="PricingPack">
      <div className="PricingPack__list p-6 pb-0 border-4 border-tomato rounded-lg">
        <List items={items} />
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
          <Paragraph className="Support__description mb-16 text-center text-balance">
            {supportDescription}
          </Paragraph>
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
        <Text type="paragraphLarge" className="Mentoring__subtitle mb-4 text-center text-base lg:!text-md 2xl:!text-2lg text-balance">
          {mentoringSubtitle}
        </Text>
        <Paragraph className="Mentoring__description mb-16 text-center text-balance">
          {mentoringDescription}
        </Paragraph>
      </div>
      <CtaBlob title={ctaTitle} pricing={ctaPricing} detail={ctaDetail} />
    </div>
  );
};