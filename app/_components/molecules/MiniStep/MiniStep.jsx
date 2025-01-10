import React from "react";
import { Heading, Text } from "../../atoms";
import Image from "next/image";

export const MiniStep = ({
  title,
  content,
  isLast
}) => {
  return (
    <div className="MiniStep relative my-6 md:my-0 px-3 py-8 text-center bg-purple-light rounded-xl">
      <Heading
        level={4}
        className="absolute -top-4 right-2/4 translate-x-1/2 w-full font-brother font-extrabold text-2base uppercase text-tomato"
      >
        {title}
      </Heading>
      <div className="flex flex-col justify-center h-full">
        {content && (
          <Text
            type="custom"
            className="font-body font-normal text-2normal text-balance"
          >
            {content}
          </Text>
        )}
      </div>
      {!isLast && (
        <figure className="absolute -bottom-8 right-2/4 translate-x-1/2 md:top-2/4 md:-translate-y-1/2 md:-right-12 lg:-right-8 xl:-right-12 md:transform md:-rotate-90 z-50">
          <Image
            src="/_assets/images/arrow-down.svg"
            alt="Flèche"
            width={36}
            height={36}
            blurDataURL="/_assets/images/arrow-down.svg"
            placeholder="blur"
            className=" animate-down"
          />
        </figure>
      )}
    </div>
  );
};
