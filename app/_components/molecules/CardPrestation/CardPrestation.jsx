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
      <div className="p-6 bg-purple-light">
        <Heading
          level={3}
          className="!text-base !my-0 font-extrabold text-tomato"
        >
          {title}
        </Heading>
      </div>
      <div className="p-6 bg-purple">
        <Paragraph>{description}</Paragraph>
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
    </>
  )

  return (
    slug ? (
      <Link href={slug} className="CardPrestation flex-1 mr-8 md:mr-0 mb-8 md:mb-0 text-center min-w-240 scroll-mr-8 group cursor-pointer">
        {CardContent}
      </Link>
    ) : (
      <div className="CardPrestation flex-1 mr-8 md:mr-0 mb-8 md:mb-0 text-center min-w-240 scroll-mr-8 cursor-default">
        {CardContent}
      </div>
    )
  );
};
