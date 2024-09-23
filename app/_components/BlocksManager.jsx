"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FootNote, Heading, Paragraph, Quote, Separator, Spacer, Text } from "./atoms";
import { ButtonLarge, ChecklistItems, ListItem } from "./molecules";
import { Accordion, CardsPrestation, CardsPricing, Checklists, FormulaPack, ImagesSlider, List, SectionCTA, StackItems, Stages } from "./organisms";

export function BlocksManager({ blocks }) {
  if (!blocks) return null;

  return (
    <div className="Blocks">
      {blocks.map((block) => {
        switch (block.__component) {
          case "blocks.text":
            return (
              <BlocksRenderer
                key={`BlocksRenderer-${block.id}`}
                content={block.textContent}
                blocks={{
                  paragraph: ({ children }) => {
                    return (
                      <Paragraph key={`Paragraph-${block.id}`}>
                        {children}
                      </Paragraph>
                    )
                  },
                  heading: ({ children, level }) => {                    
                    return (
                      <Heading key={`Heading-${block.id}`} level={level}>
                        {children}
                      </Heading>
                    )
                  },
                  link: ({ children, url }) => <a key={`link-${block.id}`} href={url} target="_blank" rel="noreferrer" className="Link">{children}</a>,
                  list: ({ children }) => <ul key={`list-items-${block.id}`} className="List list-disc list-inside">{children}</ul>,
                }}
                modifiers={{
                  bold: ({ children }) => <strong key={`strong-${block.id}`} className="font-bold text-tomato">{children}</strong>,
                  italic: ({ children }) => <span key={`span-${block.id}`} className="italic">{children}</span>,
                }}
              />
            );
          case "blocks.list":
            return <List key={`List-${block.id}`} items={block.items} />;
          case "blocks.prestations":
            return <CardsPrestation key={`CardsPrestation-${block.id}`} title={block.title} cardsPrestation={block.cardsPrestation} />
          case "blocks.stack":
            return <StackItems key={`StackItems-${block.id}`} items={block.items} />
          case "blocks.quote":
            return <Quote key={`Quote-${block.id}`} quotes={block.quotes} />;
          case "blocks.button":
            return <ButtonLarge key={`ButtonLarge-${block.id}`} label={block.label} url={block.url} isExternal={block.isExternal} isCentered={block.isCentered} className="my-12 md:my-16" />;
          case "blocks.spacer":
            return <Spacer key={`Spacer-${block.id}`} mobileSize={block.mobileSize} size={block.size} />;
          case "blocks.separator":
            return <Separator key={`Separator-${block.id}`} />;
          case "blocks.pricings":
            return (
              <CardsPricing 
                key={`CardsPricing-${block.id}`}
                title={block.title}
                description={block.description}
                pricingCards={block.pricingCards}
              />
            );
          case "blocks.foot-note":
            return (
              <div className="mt-4">
                <BlocksRenderer
                  key={`BlocksRenderer-${block.id}`}
                  content={block.note}
                  blocks={{
                    paragraph: ({ children }) => {
                      return (
                        <FootNote key={`FootNote-${block.id}`} note={children} />
                      )
                    }
                  }}
                  modifiers={{
                    bold: ({ children }) => <strong key={`strong-${block.id}`} className="font-bold text-tomato">{children}</strong>,
                    italic: ({ children }) => <span key={`span-${block.id}`} className="italic">{children}</span>,
                  }}
                />
              </div>
            );
          case "blocks.images-slider":
            return <ImagesSlider key={`ImagesSlider-${block.id}`} images={block.images} />;  
          case "blocks.stages":
            return <Stages key={`Stages-${block.id}`} stages={block.stages} />;  
          case "blocks.section-cta":
            return <SectionCTA key={`SectionCTA-${block.id}`} title={block.title} subtitle={block.subtitle} button={block.button}  />;  
          case "blocks.check-lists":
            return (
              <Checklists
                key={`Checklists-${block.id}`}
                content={block.checklists}
              />
            ); 
          case "blocks.accordions-group":
            return (
              <Accordion
                key={`Accordion-${block.id}`}
                accordion={block.accordion}
              />
            ); 
          case "blocks.formula-pack":
            return (
              <FormulaPack
                key={`FormulaPack-${block.id}`}
                items={block.items}
                mentoringTitle={block.mentoringTitle}
                mentoringSubtitle={block.mentoringSubtitle}
                mentoringDescription={block.mentoringDescription}
              />
            ); 
          default:
            return null;
        }
      })}
    </div>
  );
};