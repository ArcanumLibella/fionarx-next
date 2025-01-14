"use client";

import React from "react";
import { Heading, Paragraph, Text } from "../../atoms";
import { Button } from "../../molecules";
import { CheckIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";
import Image from "next/image";
import { useIsMobile } from "@/app/_utils/useWindowSize";

export const StrategyCard = ({
  type,
  title,
  description,
  item1,
  item2,
  item3,
  item4,
  item5,
  ctaLink,
  isStrategyCard,
  isLastCard,
  emoji,
  short
}) => {
  const isMobile = useIsMobile();
  const items = [item1, item2, item3, item4, item5];

  const emojiMapping = {
    'emoji-bad': {
      src: '/_assets/images/emoji-bad.png',
      alt: 'Emoji grimaçant',
    },
    'emoji-good': {
      src: '/_assets/images/emoji-good.png',
      alt: 'Emoji souriant',
    },
  };

  const selectedEmoji = emojiMapping[emoji];

  const CardContent = (
    <>
      <div className="StrategyCardContent flex flex-col justify-between h-full">
        <div>
          <div className="StrategyCard__top lg:min-h-[160px] pb-8 border-b border-tomato">
            {/* TYPE */}
            <Text
              type="custom"
              className="StrategyCard__type mb-2 font-brother font-bold text-sm uppercase text-purple-ultraLight"
            >
              {type}
            </Text>
            {/* TITLE */}
            <Heading
              level={4}
              className="StrategyCard__title mb-4 font-brother !font-bold text-3base lg:text-3base 2xl:text-md text-tomato"
            >
              {title}
            </Heading>
            {/* DESCRIPTION */}
            {description && (
              <Text
                type="custom"
                className="StrategyCard__description font-body text-2normal font-semibold text-pretty"
              >
                {description}
              </Text>
            )}
          </div>

          <div className="StrategyCard__middle mt-8">
            {isStrategyCard ? (
              <>
                <Text
                  type="custom"
                  className="mb-4 font-body font-normal text-tiny uppercase text-tomato"
                >
                  Exemple d'actions :
                </Text>
                {/* ITEMS */}
                <div className="StrategyCard__items">
                  {items.map((item, index) => 
                    item && (
                      <div key={index} className="StrategyCard__item flex w-full mb-1">
                        <div className="StrategyCard__icon min-w-4 pt-0.5">
                          <CheckIcon 
                            fill={COLORS.white.DEFAULT}
                            width={16}
                            height={16}
                          />
                        </div>
                        <Paragraph className="w-full ml-2 !mb-2">
                          {item}
                        </Paragraph>
                      </div>
                    )
                  )}
                </div>
                {/* BUTTON */}
                {isMobile && ctaLink && (
                  <Button
                    label="En savoir plus"
                    url={ctaLink}
                    isCentered
                    className="StrategyCard__button !text-white bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%"
                  />
                )}
              </>
            ) : (
              <>
                {/* ITEMS */}
                <div className="StrategyCard__items">
                {items.map((item, index) => 
                  item && (
                    <div key={index} className="StrategyCard__item flex w-full mb-1">
                      <div className="StrategyCard__icon min-w-4 pt-0.5">
                        <CheckIcon 
                          fill={COLORS.white.DEFAULT}
                          width={16}
                          height={16}
                        />
                      </div>
                      <Paragraph className="w-full ml-2 !mb-2">
                        {item}
                      </Paragraph>
                    </div>
                  )
                )}
                </div>
              </>
            )}
          </div>
        </div>

        {(!isMobile && isStrategyCard) && (
          <div className="StrategyCard__bottom flex flex-col justify-between mt-8">
            <figure className="flex justify-center align-center mb-8">
              <Image
                src="/_assets/images/corner-down-right.svg"
                alt="Flèche courbée sur la droite"
                width={80}
                height={80}
                blurDataURL="/_assets/images/corner-down-right.svg"
                placeholder="blur"
              />
            </figure>
            {/* BUTTON */}
            {ctaLink && (
              <Button
                label="En savoir plus"
                url={ctaLink}
                isCentered
                className="StrategyCard__button !text-white bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%"
              />
            )}
          </div>
        )}
      </div>

      {!isStrategyCard && (
        <div className="StrategyCard__bottom flex flex-col justify-between mt-8">
          {/* EMOJI */}
          {emoji && (
            <figure className="flex justify-center mb-6">
              <Image
                src={selectedEmoji.src}
                alt={selectedEmoji.alt}
                width={56}
                height={56}
                blurDataURL={selectedEmoji.src}
                placeholder="blur"
              />
            </figure>
          )}

          <Text type="custom" className="StrategyCard__short-title mb-3 font-body font-bold text-center text-2normal text-tomato" >
            BREF...
          </Text>

          {short && (
            <div className="StrategyCard__short-text flex justify-center">
              <Text type="custom" className="text-center text-bold text-2normal xs:text-base md:text-2normal lg:text-base text-white text-pretty">
                {short}
              </Text>
            </div>
          )}
        </div>
      )}
    </>
  )

  return (
    isStrategyCard ? (
      <div className="StrategyCard StrategyCard--strategy relative flex flex-col justify-between h-full md:mx-2 lg:mx-4 xl:mx-3 mb-8 lg:mb-0 p-4 md:p-3 lg:p-4 bg-purple-dark outline outline-2 outline-tomato -outline-offset-2 md:scale-105 rounded-xl">
        {CardContent}
        {isMobile && (
          <figure className="absolute -bottom-12 w-full flex justify-center -ml-4 z-50">
            <Image
              src="/_assets/images/arrow-down.svg"
              alt="Flèche vers le bas"
              width={56}
              height={56}
              blurDataURL="/_assets/images/arrow-down.svg"
              placeholder="blur"
            />
          </figure>
        )}
      </div>
    ) : (
      <div className="StrategyCard relative flex flex-col justify-between h-full md:mx-2 lg:mx-4 xl:mx-3 mb-8 lg:mb-0 p-4 md:p-3 lg:p-4 bg-purple-dark outline outline-2 outline-white -outline-offset-2 rounded-xl">
        {CardContent}
        {isMobile && !isLastCard && (
          <figure className="absolute -bottom-12 w-full flex justify-center -ml-4 z-50">
            <Image
              src="/_assets/images/arrow-down.svg"
              alt="Flèche vers le bas"
              width={56}
              height={56}
              blurDataURL="/_assets/images/arrow-down.svg"
              placeholder="blur"
            />
          </figure>
        )}
      </div>
    )
  );
};
