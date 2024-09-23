import React from 'react';
import { Text } from "../../atoms";
import Image from "next/image";
import { BlobsLight } from "../BlobsLight";

export const CtaBlob = ({ title, pricing, detail }) => {  
  return (
    <div className="CtaBlob relative flex justify-center items-center !w-full !h-[240px] my-12 lg:my-16 cursor-pointer">
      <figure className="CtaBlob__image absolute w-32 h-32 md:w-40 lg:w-56 md:h-40 -top-20 xs:-top-16 md:-top-8 lg:-top-16 -right-10 xs:-right-8 md:right-4 lg:right-16 -rotate-12 md:-rotate-3 lg:-rotate-0">
        <Image
          src="/_assets/images/curved-arrow.svg"
          alt="Flèche incurvée"
          width={320}
          height={280}
        />
      </figure>
      <BlobsLight className="absolute flex justify-center items-center !w-[240px] !h-full -z-1" />
      <div className="CtaBlob__content w-48 md:w-72 lg:w-80">
        <Text type="custom" className="font-brother font-bold md:text-2base lg:text-3base text-center text-white">
          {title} 
        </Text>
        <Text type="custom" className="font-brother font-black text-2lg md:text-3lg lg:text-2xl text-center bg-gradient-to-r from-purple-light from-12% via-tomato via-44% to-orange to-96% bg-clip-text text-transparent">
          {pricing} 
        </Text>
        <Text type="custom" className="font-brother font-light text-tiny md:text-normal text-center text-white">
          {detail}
        </Text>
      </div>
    </div>
  );
};