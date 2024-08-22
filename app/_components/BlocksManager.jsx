"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FootNote, Heading, Paragraph, Quote, Separator, Spacer, Text } from "./atoms";
import { ButtonLarge, ListItem } from "./molecules";
import { CardsPrestation, ImagesSlider, StackItems, Stages } from "./organisms";
import { CardsPricing } from "./organisms/CardsPricing";

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
            return <ul key={`ListItems-${block.id}`} className="ListItems">{renderListBlock(block)}</ul>;
          case "blocks.prestations":
            return <CardsPrestation key={`CardsPrestation-${block.id}`} cardsPrestation={block.cardsPrestation} />
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
            return <CardsPricing key={`CardsPricing-${block.id}`} title={block.title} pricingCards={block.pricingCards} />;
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
          default:
            return null;
        }
      })}
    </div>
  );
};

export const renderListBlock = (block) => {
  return block.item.map((item) => (
      <ListItem key={item.id} number={item.number} text={item.text} />
  ));
};