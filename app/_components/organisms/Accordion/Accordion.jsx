"use client";

import React, { useEffect, useState } from 'react';
import { Heading } from "../../atoms";
import { ChevronsDownIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";
import { Checklist } from "../../molecules";

export const Accordion = ({ accordion }) => {  
  
  // Gestion de l'état des sections ouvertes
  const [openSections, setOpenSections] = useState({});
  
  // Ouverture de la première section à l'ouverture de la page
  useEffect(() => {
    if (accordion.length > 0) {
      setOpenSections({ [accordion[0].slug]: true });
    }
  }, [accordion]);
  
  if (!accordion) return;

  // Fonction pour gérer l'ouverture/fermeture des sections
  const toggleSection = (sectionSlug) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionSlug]: !prevState[sectionSlug],
    }));
  };

  return (
    <div id="Accordion" className="Accordion my-16">
      {accordion.map((item) => (
        <div key={item.id} className="Accordion__section">
          <div id={`item-${item.slug}`} className="Accordion__header">
            <button
              className={`group relative flex w-full items-center bg-purple-light text-white px-5 py-4 text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none ${
                openSections[item.slug] ? 'bg-purple-dark !text-tomato' : ''
              }`}
              type="button"
              onClick={() => toggleSection(item.slug)}
              aria-expanded={openSections[item.slug] || false}
              aria-controls={`collapse-${item.slug}`}
            >
              <Heading level={4} className="!mb-0 text-left">
                {item.title}
              </Heading>
              <span
                className={`-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out ${
                  openSections[item.slug] ? 'rotate-[-180deg]' : 'rotate-0'
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
          {openSections[item.slug] && (
            <div
              id={`collapse-${item.slug}`}
              className="Accordion__content lg:grid lg:grid-cols-2 px-5 py-4 bg-purple"
              aria-labelledby={`item-${item.slug}`}
              data-twe-parent="#Accordion"
            >
              <div className="Features mb-8 lg:mb-0 lg:mr-4">
                <Heading level={5} className="mt-3 mb-4 text-purple-ultraLight">
                  Détail du contenu
                </Heading>
                <ul className="Features__items">
                  <Checklist content={item.features} />
                </ul>
              </div>
              <div className="Deliverables mb-6 lg:mb-0 lg:ml-4">
                <Heading level={5} className="mt-3 mb-4 text-purple-ultraLight">
                  Livrables associés
                </Heading>
                <ul className="Deliverables__items">
                  <Checklist content={item.deliverables} />
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};