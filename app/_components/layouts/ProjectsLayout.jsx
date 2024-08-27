import React from "react";
import { Heading, TagCategory } from "../atoms";
import { Blobs, BlobsLight } from "../organisms";

export const ProjectsLayout = ({ categories, children }) => {
  return (
    <div className="ProjectsLayout flex flex-col justify-center h-screen h-svh min-h-svh max-h-svh md:pl-20 overflow-y-hidden">
      <BlobsLight className="hidden fixed xl:flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[64vh]" />
      <Blobs className="fixed flex justify-center items-center -right-1/10 -top-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[72vh] !-z-1" />
      <div className="ProjectsLayout__filter pt-8 px-8 md:px-12 lg:px-24 xl:px-32">
        <Heading level={6} className="mb-4 font-bold text-white uppercase">
          Filtrer les projets
        </Heading>
        <div className="ProjectsLayout__categories flex flex-wrap items-start w-full">
          {categories && categories.map((category) => (
            <TagCategory key={category.id} name={category.attributes.name} slug={category.attributes.slug} />
          ))}
        </div>
      </div>
      <div className="ProjectsLayout__projects flex items-center h-full px-8 overflow-x-auto overflow-y-hidden md:px-12 lg:px-24 xl:px-32 scrollbar-hidden">
        {children}
      </div>
    </div>
  );
};