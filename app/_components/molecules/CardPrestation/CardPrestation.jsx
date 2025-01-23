"use client";

import React from "react";
import Link from "next/link";
import { Heading, Paragraph, Text } from "../../atoms";
import { Button } from "../Button";

export const CardPrestation = ({
  title,
  slug,
  description,
  isFrom,
  pricing,
  isDisabled,
  button
}) => {
  const CardContent = (
    <>
      <div className="CardPrestation__top flex justify-center items-center min-h-[82px] w-full p-4 bg-purple-light rounded-t-xl">
        <Heading
          level={3}
          className="!text-base !my-0 font-extrabold text-tomato"
        >
          {title}
        </Heading>
      </div>
      <div className="CardPrestation__body flex flex-col justify-between h-full p-6 bg-purple rounded-xl">
        <div className="CardPrestation__description">
          <Paragraph>{description}</Paragraph>
        </div>
        <div className="CardPrestation__bottom">
          {isFrom && pricing && (
            <div className="mt-8">
              <Text className="text-sm font-semibold text-tomato">
                à partir de
              </Text>
              <Text type="custom" className="!text-2lg !font-black !text-tomato">
                {pricing} €
              </Text>
            </div>
          )}
          {isDisabled ? (
              <Button
                label="Bientôt disponible"
                url="#"
                isCentered
                isDisabled={isDisabled}          
                className="CardPrestation__button mt-8"
              />
            ) : (
              <Button
                label={button.label}
                url={button.url}
                isCentered
                isExternal={button.isExternal}
                isDisabled={isDisabled}          
                className="CardPrestation__button mt-8 !text-white bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%"
              />
            )
          }
        </div>
      </div>
    </>
  )

  return (
    <div className="CardPrestation flex flex-col justify-between h-full w-full bg-purple rounded-xl">
      {slug ? (
        <Link href={slug} className="CardPrestation__content flex flex-col justify-between h-full md:mr-0 md:mb-0 text-center min-w-240 scroll-mr-8 group cursor-pointer">
          {CardContent}
        </Link>
      ) : (
        <div className="CardPrestation__content flex flex-col justify-between h-full md:mr-0 md:mb-0 text-center min-w-240 scroll-mr-8 cursor-default">
          {CardContent}
        </div>
      )}
    </div>
  );
};
