"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Heading, Paragraph, Quote, Separator, Spacer } from "./atoms";
import { ButtonLarge, ListItem } from "./molecules";
import { CardsPrestation, StackItems } from "./organisms";

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
                  link: ({ children, url }) => <a key={`link-${block.id}`} href={url} target="_blank" rel="noreferrer">{children}</a>,
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
            return <Quote key={`Quote-${block.id}`} quoteContent={block.quoteContent} />;
          case "blocks.button":
            return <ButtonLarge key={`ButtonLarge-${block.id}`} label={block.label} url={block.url} isExternal={block.isExternal} isCentered={block.isCentered} />;
          case "blocks.spacer":
            return <Spacer key={`Spacer-${block.id}`} mobileSize={block.mobileSize} size={block.size} />;
          case "blocks.separator":
            return <Separator key={`Separator-${block.id}`} />;
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