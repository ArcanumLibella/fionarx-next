"use client";

import React from "react";
import { Heading, TagFormula, Text } from "../../atoms";
import { CheckIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const PricingCard = ({
  title,
  formula,
  isFrom,
  price,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
}) => {
  return (
    <div className="PricingCard px-4 py-6 bg-purple-dark outline outline-white -outline-offset-2 outline-2 hover:outline-tomato lg:transform lg:hover:scale-110 transition-all rounded-xl cursor-pointer">
      {/* TODO: FORMULA */}
      <TagFormula label={`Formule ${formula}`} additionnalStyle="mb-6" />

      {/* TITLE */}
      <Heading
        level="custom"
        className="PricingCard__title mb-6 font-brother font-black uppercase text-base tracking-wider text-white"
      >
        {title}
      </Heading>

      <div className="PricingCard__pricing relative mb-6">
        {/* ISFROM */}
        {isFrom && (
          <Text type="custom" className="PricingCard__from absolute -top-2 font-body text-tiny text-tomato" >
            à partir de
          </Text>
        )}
        {/* PRICE */}
        <Heading
          level="custom"
          className="PricingCard__price mb-6 font-body font-bold uppercase text-2lg text-tomato"
        >
          {price} €
        </Heading>
      </div>

      {/* ITEMS TODO: à améliorer */}
      <div className="PricingCard__items">
        {item1 && (
          <div className="PricingCard__item flex w-full mb-2">
            <CheckIcon 
              fill={COLORS.white.DEFAULT}
              width={16}
              height={16}
            />
            <Text type="custom" className="ml-2 font-body text-tiny">
              {item1}
            </Text>
          </div>
        )}
        {item2 && (
          <div className="PricingCard__item flex w-full mb-2">
            <CheckIcon 
              fill={COLORS.white.DEFAULT}
              width={16}
              height={16}
            />
            <Text type="custom" className="ml-2 font-body text-tiny">
              {item2}
            </Text>
          </div>
        )}
        {item3 && (
          <div className="PricingCard__item flex w-full mb-2">
            <CheckIcon 
              fill={COLORS.white.DEFAULT}
              width={16}
              height={16}
            />
            <Text type="custom" className="ml-2 font-body text-tiny">
              {item3}
            </Text>
          </div>
        )}
        {item4 && (
          <div className="PricingCard__item flex w-full mb-2">
            <CheckIcon 
              fill={COLORS.white.DEFAULT}
              width={16}
              height={16}
            />
            <Text type="custom" className="ml-2 font-body text-tiny">
              {item4}
            </Text>
          </div>
        )}
        {item5 && (
          <div className="PricingCard__item flex w-full mb-2">
            <CheckIcon 
              fill={COLORS.white.DEFAULT}
              width={16}
              height={16}
            />
            <Text type="custom" className="ml-2 font-body text-tiny">
              {item5}
            </Text>
          </div>
        )}
        {item6 && (
          <div className="PricingCard__item flex w-full mb-2">
            <CheckIcon 
              fill={COLORS.white.DEFAULT}
              width={16}
              height={16}
            />
            <Text type="custom" className="ml-2 font-body text-tiny">
              {item6}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};
