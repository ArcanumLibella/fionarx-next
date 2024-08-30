"use client";

import React from "react";
import { Heading, Paragraph, TagFormula, Text } from "../../atoms";
import { CheckIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";
import { Button } from "../../molecules";
import Link from "next/link";

export const PricingCard = ({
  title,
  slug,
  formula,
  isFrom,
  price,
  time,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  supportTitle,
  supportDescription
}) => {
  const items = [item1, item2, item3, item4, item5, item6, item7, item8, item9];

  return (
    <Link href={`prestations/${slug}`} className="PricingCard flex flex-col justify-between md:mx-4 xl:mx-3 mb-8 lg:mb-0 p-4 bg-purple-dark outline outline-2 outline-white -outline-offset-2 hover:outline-tomato xl:transform xl:hover:scale-110 transition-all rounded-xl cursor-pointer">
      <div className="PricingCard__top">
        {/* FORMULA */}
        <TagFormula label={formula} additionnalStyle="mb-6" />

        {/* TITLE */}
        <Heading
          level="custom"
          className="PricingCard__title mb-6 lg:min-h-[72px] font-brother font-black uppercase text-2base xs:text-md md:text-2base tracking-wider text-white"
        >
          {title}
        </Heading>

        {/* PRICING */}
        <div className="PricingCard__pricing relative">
          {/* ISFROM */}
          {isFrom && (
            <Text type="custom" className="PricingCard__from absolute -top-2 font-body text-tiny text-tomato" >
              à partir de
            </Text>
          )}
          {/* PRICE */}
          <Heading
            level="custom"
            className="PricingCard__price font-body font-bold uppercase text-2lg text-tomato"
          >
            {price} €
          </Heading>
          <Text type="custom">➤ {time} mois à vos côtés 💪🏻</Text>
        </div>

        {/* SEPARATOR */}
        <div className="PricingCard__separator flex justify-between items-center my-6 xs:my-8 lg:my-6">
          <div className="Separator w-full h-px max-w-4/12 bg-gradient-to-r from-purple-light from-12% via-tomato via-44% to-orange to-96%" />
          <Text type="custom" className="px-2 font-body !font-light text-tiny xs:text-normal md:text-tiny uppercase text-tomato">
            Contenu
          </Text>
          <div className="Separator w-full h-px max-w-4/12 bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%" />
        </div>

        {/* ITEMS */}
        <div className="PricingCard__items">
          {items.map((item, index) => 
            item && (
              <div key={index} className="PricingCard__item flex w-full mb-1">
                <div className="PricingCard__icon min-w-4 pt-0.5">
                  <CheckIcon 
                    fill={COLORS.white.DEFAULT}
                    width={16}
                    height={16}
                  />
                </div>
                <Paragraph className="w-full ml-2 !mb-2 !text-normal">
                  {item}
                </Paragraph>
              </div>
            )
          )}
        </div>
      </div>

      <div className="PricingCard__bottom flex flex-col justify-between">
        {/* SEPARATOR */}
        <div className="PricingCard__separator flex justify-between items-center my-6 xs:my-8 lg:my-6">
          <div className="Separator w-full h-px max-w-4/12 bg-gradient-to-r from-purple-light from-12% via-tomato via-44% to-orange to-96%" />
          <Text type="custom" className="px-2 font-body !font-light text-tiny xs:text-normal md:text-tiny uppercase text-tomato">
            Accompagnement
          </Text>
          <div className="Separator w-full h-px max-w-4/12 bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%" />
        </div>

        {/* SUPPORT */}
        <Text type="custom" className="PricingCard__support-title mb-6 font-brother font-bold text-center text-base text-white" >
          {supportTitle}
        </Text>
        <Text type="custom" className="PricingCard__support-description mb-6 font-body text-center text-normal text-white" >
          {supportDescription}
        </Text>
        
        {/* BUTTON */}
        <Button label="En savoir plus" url={`prestations/${slug}`} isCentered className="PricingCard__button !text-white bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%" />
      </div>
    </Link>
  );
};
