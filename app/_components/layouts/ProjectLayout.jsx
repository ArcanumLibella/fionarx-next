import React from "react";
import Image from "next/image";
import { Heading, Paragraph, TagTechno, Text } from "../atoms";
import { ExternalLinkButton, LinkButton } from "../molecules";
import { Blobs } from "../organisms";
import { MainLayout } from ".";
import { ChevronsDownIcon } from "../../../public/_assets/icons";
import { COLORS } from "../../_constants/Colors";
import { BASE_URL } from "@/app/_utils/strapi.utils";

export const ProjectLayout = ({title, description, preview, year, technos, links}) => {
  const imageData = preview.data.attributes;
  const technosData = technos.data;
  
  return (
    <MainLayout>
      <div className="Project flex flex-col justify-between xl:flex-row md:ml-20 xl:h-screen">
        <div className="Project__preview overflow-auto w-full h-[60vh] xl:max-h-screen xl:h-screen xl:text-center bg-purple">
          <div className="flex justify-center items-end h-full w-full">
            {imageData && (
              <figure key={imageData.id} className="Project__preview h-full">
                <Image
                  src={BASE_URL + imageData.url}
                  alt={imageData.alternativeText}
                  width={imageData.width}
                  height={imageData.height}
                />
              </figure>
            )}
            <ChevronsDownIcon 
              stroke={COLORS.tomato.DEFAULT}
              width={40}
              height={40}
              className="fixed bottom-[42vh] xl:bottom-4 justify-self-auto animate-down z-100"
            />
          </div>
        </div>
        <div className="Project__description relative flex flex-col-reverse w-full xl:h-screen p-5 pb-10 md:p-10 xl:min-w-[580px] xl:max-w-[35%]">
          <LinkButton
            label="Retour"
            side="left"
            path="/projets"
            className="absolute top-10"
          />
          <Blobs className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[40vw] xl:h-[48vh] 2xl:w-[35vw] 2xl:h-[44vh]" />
          <div className="pt-16 md:pt-12 xl:pt-0">
            {/* TITLE */}
            <Heading level={3} className="Project__title mb-4 normal-case">
              {title}
            </Heading>

            {/* TECHNOS */}
            <div className="Project__technos justify-between mb-10 md:flex">
              <div className="flex flex-wrap items-start w-full gap-2 mb-8 md:mb-0 md:gap-4">
                {technosData && technosData.map((techno) => {
                  return <TagTechno key={techno.id} label={techno.attributes.name} slug={techno.attributes.slug} />
                })}
              </div>
            </div>

            {/* DESCRIPTION */}
            <Paragraph className="Project__description mb-10 md:text-normal">
              {description}
            </Paragraph>

            <div className="flex justify-between">
              {/* LINKS */}
              <div className="Project__links flex flex-col">
                <Heading
                  level={6}
                  className="mb-2"
                >
                  Découvrir
                </Heading>
                <div>
                  {links && links.map((link, index) => {
                    return (
                      <ExternalLinkButton
                        key={index}
                        label={link.name}
                        side="right"
                        link={link.url}
                      />
                    )
                  })}
                </div>
              </div>
              {/* YEAR */}
              <div className="Project__year flex flex-col">
                <Heading
                  level={6}
                  className="mb-2"
                >
                  Année
                </Heading>
                <div>
                  <Text type="custom" className="text-sm">
                    {year}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
};