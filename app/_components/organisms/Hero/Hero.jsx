import React from 'react';
import Link from "next/link";
import { Heading } from "../../atoms";
import { Blobs } from "../Blobs";
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";

export const Hero = async () => {
  const data = await fetchDataFromStrapi("global?populate=deep");
  const heroItems = data.attributes.hero;

  const renderHero = heroItems.map((item) => {
    if (item.isMainTitle) {
      return (
        <Link href={item.link} key={item.id} rel="canonical" className="z-10 no-underline mb-8">
          <h1 className="font-brother font-black uppercase text-[12vw] md:text-[10vw] lg:text-[8vh] xl:text-[12vh] text-white cursor-pointer select-none">
            {item.label}
          </h1>
          <Heading level={3} className="font-brother !my-0 font-bold uppercase xs:!text-[5vw] !text-[5vw] md:!text-[4vw] lg:!text-[3.5vh] xl:!text-[5vh] 2xl:!text-[5vh] text-white opacity-60 cursor-pointer select-none">
            Consultante en Stratégie Digitale
          </Heading>
        </Link>
      )
    } else {
      return (
        <Link
          key={item.id} rel="canonical" 
          href={`prestations/${item.link}`}
          className="select-none no-underline z-10"
        >
          <Heading key={item.id} level={2} className="font-brother !my-0 font-black leading-relaxed xl:leading-tight uppercase !text-[8vw] md:!text-[5vh] xl:!text-[8vh] !tracking-normal !text-white text-shadow text-stroke-white-DEFAULT md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40">{item.label}</Heading>
        </Link>
      )
    }
  })

  return (
    <div className="Hero flex flex-col items-center justify-center h-full min-h-svh overflow-hidden text-center px-4 md:pl-16 md:pr-8 lg:px-16 lg:py-16 md:items-end md:text-right bg-midnight">
      <Blobs className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[32vw] xl:h-[56vh]" />
      {renderHero}
    </div>
  );
};
