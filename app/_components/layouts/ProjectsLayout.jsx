import React from "react";
import { Heading, TagCategory } from "../atoms";
import { Blobs, BlobsLight } from "../organisms";
import { MainLayout } from ".";

export const ProjectsLayout = ({ categories, children }) => {
  return (
    <MainLayout>
      <div className="ProjectsLayout flex flex-col justify-center h-full min-h-screen md:pl-20">
        <BlobsLight className="hidden fixed xl:flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[64vh]" />
        <Blobs className="fixed flex justify-center items-center -right-1/10 -top-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[72vh] !-z-1" />
        <div className="ProjectsLayout__filter pt-8 px-8 md:px-12 lg:px-24 xl:px-32">
          <Heading level={6} className="mb-4 font-bold text-purple-ultraLight uppercase">
            Filtrer les projets
          </Heading>
          <div className="ProjectsLayout__categories flex flex-wrap items-start w-full gap-2 md:gap-4">
            {categories && categories.map((category, i) => (
              <TagCategory key={category.attributes.slug} name={category.attributes.name} slug={category.attributes.slug} />
            ))}
          </div>
        </div>
        <div className="ProjectsLayout__projects flex items-center h-full gap-8 md:gap-16 px-8 overflow-x-auto overflow-y-hidden xl:gap-[6vw] md:px-12 lg:px-24 xl:px-32">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};