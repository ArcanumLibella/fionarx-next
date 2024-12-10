"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FootNote, Heading, Paragraph, Quote, Separator, Spacer } from "./atoms";
import { ButtonLarge, DoubleButton } from "./molecules";
import { Accordion, CardsBasic, CardsBasicImage, CardsPrestation, CardsPricing, Checklists, DoubleContent, SolutionPack, ImagesSlider, List, Options, SectionCTA, StackItems, Stages } from "./organisms";

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
                  link: ({ children, url }) => <a key={`link-${block.id}`} href={url} target="_blank" rel="noreferrer" title="Ouvrir le lien" className="Link font-medium text-tomato hover:!underline">{children}</a>,
                  list: ({ children }) => <ul key={`list-items-${block.id}`} className="List list-disc list-inside">{children}</ul>,
                  quote: ({ children }) => <blockquote key={`Quote-${block.id}`} className="my-6 p-4 xs:p-6 w-full max-w-full text-2normal rounded bg-purple-light">{children}</blockquote>,
                }}
                modifiers={{
                  bold: ({ children }) => <strong key={`strong-${block.id}`} className="font-medium text-tomato">{children}</strong>,
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
            return <Quote key={`Quote-${block.id}`} title={block.title} quotes={block.quotes} />;
          case "blocks.button":
            return <ButtonLarge key={`ButtonLarge-${block.id}`} label={block.label} url={block.url} isExternal={block.isExternal} isCentered={block.isCentered} className="my-12 md:my-16" />;
          case "blocks.double-button":
            return <DoubleButton key={`DoubleButton-${block.id}`} firstButton={block.firstButton} secondButton={block.secondButton} />;
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
                cardCTA={block.cardCTA}
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
            return (
              <SectionCTA 
                key={`SectionCTA-${block.id}`}
                title={block.title}
                subtitle={block.subtitle}
                button={block.button}
                isLarge={block.isLarge}
              />
            );  
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
          case "blocks.solution-pack":
            return (
              <SolutionPack
                key={`SolutionPack-${block.id}`}
                items={block.items}
                hasSupport={block.hasSupport}
                supportTitle={block.supportTitle}
                supportDescription={block.supportDescription}
                mentoringTitle={block.mentoringTitle}
                mentoringSubtitle={block.mentoringSubtitle}
                mentoringDescription={block.mentoringDescription}
                ctaTitle={block.ctaTitle}
                ctaPricing={block.ctaPricing}
                ctaDetail={block.ctaDetail}
              />
            );
          case "blocks.options":
            return (
              <Options 
                key={`Options-${block.id}`}
                title={block.title}
                description={block.description}
                options={block.options}
              />
            );
          case "blocks.cards-basic":
            return (
              <CardsBasic 
                key={`CardsBasic-${block.id}`}
                items={block.items}
              />
            );
          case "blocks.cards-basic-image":
            return (
              <CardsBasicImage
                key={`CardsBasicImage-${block.id}`}
                items={block.items}
              />
            );
          case "blocks.double-content":
            return (
              <DoubleContent 
                key={`DoubleContent-${block.id}`}
                image={block.image}
                text={block.text}
                button={block.button}
                reverse={block.reverse}
              />
            );
          default:
          return null;
        }
      })}
    </div>
  );
};