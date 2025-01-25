import React from 'react';
import { TagDiscount, Text } from "../../atoms";
import Image from "next/image";
import { BlobsLight } from "../BlobsLight";

export const CtaBlob = ({ title, pricing, detail, isDiscounted }) => {  
  return (
    <div className="CtaBlob relative flex justify-center items-center !w-full !h-[240px] my-12 lg:my-16">
      <figure className="CtaBlob__image absolute w-20 h-20 md:w-24 lg:w-32 md:h-24 lg:h-32 -top-16 xs:-top-12 md:-top-8 lg:-top-16 -right-4 xs:-right-0 md:right-12 lg:right-32 xl:right-24 2xl:right-48">
        <Image
          src="/_assets/images/curved-arrow.svg"
          alt="Flèche incurvée"
          width={320}
          height={280}
        />
      </figure>
      <BlobsLight className="absolute flex justify-center items-center !w-[240px] !h-full -z-1" />
      <div className="CtaBlob__content w-56 xs:w-64 md:w-72 lg:w-96">
        <Text type="custom" className="font-brother font-bold xs:text-base md:text-2base lg:text-3base text-center text-white">
          {title} 
        </Text>
        <Text type="custom" className="font-brother font-black text-2lg xs:text-3lg lg:text-2xl text-center bg-gradient-to-r from-purple-light from-12% via-tomato via-44% to-orange to-96% bg-clip-text text-transparent">
          {pricing} 
        </Text>
        <Text type="custom" className="font-brother font-light text-tiny xs:text-normal text-center text-white">
          {detail}
        </Text>
        {isDiscounted && <TagDiscount className="mx-auto mt-8" />}
      </div>
    </div>
  );
};