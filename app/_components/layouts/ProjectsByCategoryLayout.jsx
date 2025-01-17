import React from "react";
import { Heading } from "../atoms";
import { LinkButton } from "../molecules";
import { Blobs, BlobsLight } from "../organisms";

export const ProjectsByCategoryLayout = ({ name, children, noContent }) => {
  return (
    <div className="ProjectsByCategoryLayout flex flex-col justify-center h-svh min-h-svh overflow-y-hidden md:pl-20">
      <BlobsLight className="hidden fixed xl:flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[64vh]" />
      <Blobs className="fixed flex justify-center items-center -right-1/10 -top-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[72vh] !-z-1" />
      <div className="ProjectsByCategoryLayout__header flex flex-col items-start pt-8 px-8 md:px-12 lg:px-24 xl:px-32">
        <Heading level={1} className="h1 !my-0 md:!my-4 !text-md md:!text-lg 2xl:!text-3lg text-tomato">
          {name}
        </Heading>
        <LinkButton
          label="Tous les projets"
          side="left"
          path="/projets"
        />
      </div>
      <div className={`ProjectsByCategoryLayout__projects flex ${noContent && "justify-center"} items-center h-full px-8 overflow-x-auto overflow-y-hidden md:px-12 lg:px-24 xl:px-32 scrollbar-hidden`}>
        {children}
      </div>
    </div>
  );
};