"use client";

import React, { useEffect, useState } from 'react';
import { Heading, Paragraph } from "../../atoms";
import { ChevronsDownIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export const Accordion = ({ accordion }) => {
  // Gestion de l'état des sections ouvertes
  const [openSections, setOpenSections] = useState({});
  
  // Ouverture de la première section à l'ouverture de la page
  useEffect(() => {
    if (accordion.length > 0) {
      setOpenSections({ [accordion[0].id]: true });
    }
  }, [accordion]);
  
  if (!accordion) return;

  // Fonction pour gérer l'ouverture/fermeture des sections
  const toggleSection = (sectionId) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  return (
    <div id="Accordion" className="Accordion my-16">
      {accordion.map((item) => (
        <div key={item.id} className="Accordion__section border border-purple">
          <div id={`item-${item.id}`} className="Accordion__header">
            <button
              className="group relative flex w-full items-center bg-purple-light px-5 py-4 text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
              type="button"
              onClick={() => toggleSection(item.id)}
              aria-expanded={openSections[item.id] || false}
              aria-controls={`collapse-${item.id}`}
            >
              <Heading level={3} className="h5 !my-0 !font-medium !text-left text-white !normal-case">
                {item.title}
              </Heading>
              <span
                className={`-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
                  openSections[item.id] ? 'rotate-[-180deg]' : 'rotate-0'
                }`}
              >
                <ChevronsDownIcon
                  stroke={COLORS.tomato.DEFAULT}
                  width={24}
                  height={24}
                />
              </span>
            </button>
          </div>
          {openSections[item.id] && (
            <div
              id={`collapse-${item.id}`}
              className="Accordion__content p-4 xl:p-8 bg-purple"
              aria-labelledby={`item-${item.id}`}
              data-twe-parent="#Accordion"
            >
              <div className="Accordion__text mb-8 lg:mb-0 lg:mr-4">
                <BlocksRenderer 
                  content={item.text}
                  blocks={{
                    paragraph: ({ children }) => {
                      return (
                      <Paragraph key={`Paragraph-${item.id}`}>
                        {children}
                      </Paragraph>
                    )
                  },
                    heading: ({ children, level }) => {                    
                      return (
                        <Heading key={`Heading-${item.id}`} level={level} className="!mt-0">
                          {children}
                        </Heading>
                      )
                    },
                    link: ({ children, url }) => <a key={`link-${item.id}`} href={url} target="_blank" rel="noreferrer" title="Ouvrir le lien" className="Link font-medium text-tomato hover:!underline">{children}</a>,
                    list: ({ children }) => <ul key={`list-items-${item.id}`} className="List list-disc list-inside">{children}</ul>,
                    quote: ({ children }) => <blockquote key={`Quote-${item.id}`} className="my-6 p-4 xs:p-6 w-full max-w-full text-normal rounded bg-purple-light">{children}</blockquote>,
                    image: ({ image }) => {
                      return (
                        <figure className="Accordion__image">
                          <Image
                            src={image.url}
                            alt={image.alternativeText}
                            title={image.alternativeText}
                            width={image.width}
                            height={image.height}
                          />
                        </figure>
                      )
                    },
                  }}
                  modifiers={{
                    bold: ({ children }) => <strong className="!font-semibold text-tomato">{children}</strong>,
                    italic: ({ children }) => <span className="!italic">{children}</span>,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};