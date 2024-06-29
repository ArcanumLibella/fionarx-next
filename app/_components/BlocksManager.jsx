"use client";

import React from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Heading } from "./atoms/Heading";
import { Paragraph } from "./atoms/Paragraph";
import { Quote } from "./atoms/Quote";
import { Spacer } from "./atoms/Spacer";
import { Separator } from "./atoms/Separator";
import { ButtonLarge } from "./molecules/ButtonLarge";
import { ListItem } from "./molecules/ListItem";
import { StackItems } from "./organisms/StackItems";
import { CardsPrestation } from "./organisms/CardsPrestation";

export function BlocksManager({ blocks }) {
  if (!blocks) return null;

  return (
    <div className="Blocks">
      {blocks.map((block) => {
        switch (block.__component) {
          case "blocks.text":
            return (
              <BlocksRenderer
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
            return renderListBlock(block);
          case "blocks.prestations":
            return <CardsPrestation key={block.id} cardsPrestation={block.cardsPrestation} />
          case "blocks.stack":
            return <StackItems key={block.id} items={block.items} />
          case "blocks.quote":
            return <Quote key={block.id} quoteContent={block.quoteContent} />;
          case "blocks.button":
            return <ButtonLarge key={block.id} label={block.label} url={block.url} isExternal={block.isExternal} isCentered={block.isCentered} />;
          case "blocks.spacer":
            return <Spacer key={block.id} mobileSize={block.mobileSize} size={block.size} />;
          case "blocks.separator":
            return <Separator key={block.id} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export const renderListBlock = (block) => {
  return block.item.map((item, index) => (
    <ListItem key={index} number={item.number} text={item.text} />
  ));
};