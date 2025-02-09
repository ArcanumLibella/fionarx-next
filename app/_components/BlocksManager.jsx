"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { FootNote, Heading, Paragraph, Quote, Separator, Spacer } from "./atoms";
import { ButtonLarge, DoubleButton, HeaderGradient } from "./molecules";
import { Accordion, CardsBasic, CardsBasicImage, CardsPrestation, CardsPricing, Checklists, DoubleContent, ImagesSlider, List, Options, SectionCTA, StackItems, Stages, CardsStrategy, PricingPack, MiniStepBlock, PricingCard, CardsList } from "./organisms";
import Image from "next/image";

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
                  link: ({ children, url }) => <a key={`link-${block.id}`} href={url} target="_blank" title="Ouvrir le lien" className="Link font-medium text-tomato hover:!underline">{children}</a>,
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
          case "blocks.header-gradient":
            return <HeaderGradient key={`HeaderGradient-${block.id}`} title={block.title} description={block.description} button={block.button} />;
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
          case "blocks.pricing-card":
            return (
              <PricingCard
                key={block.id}
                description={block.description}
                formula={block.formula}
                isDisabled={block.isDisabled}
                isLarge={block.isLarge}
                title={block.title}
                slug={block.slug}
                isFrom={block.isFrom}
                isMonthly={block.isMonthly}
                price={block.price}
                duration={block.duration}
                item1={block.item1}
                item2={block.item2}
                item3={block.item3}
                item4={block.item4}
                item5={block.item5}
                item6={block.item6}
                item7={block.item7}
                item8={block.item8}
                item9={block.item9}
                hasSupport={block.hasSupport}
                supportTitle={block.supportTitle}
                supportDescription={block.supportDescription}
                mentoringTitle={block.mentoringTitle}
                mentoringDescription={block.mentoringDescription}
              />
            );
          case "blocks.cards-strategy":
            return (
              <CardsStrategy
                key={`CardsStrategy-${block.id}`}
                title={block.title}
                strategyCards={block.strategyCards}
              />
            );
          case "blocks.foot-note":
            return (
              <aside className="mt-4">
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
              </aside>
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
                isCrossIcon={block.isCrossIcon}
              />
            );
          case "blocks.accordions-group":
            return (
              <Accordion
                key={`Accordion-${block.id}`}
                accordion={block.accordion}
              />
            );
          case "blocks.pricing-pack":
            return (
              <PricingPack
                key={`PricingPack-${block.id}`}
                title={block.title}
                description={block.description}
                button={block.button}
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
                isDiscounted={block.isDiscounted}
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
          case "blocks.cards-list":
            return (
              <CardsList
                key={`CardsList-${block.id}`}
                title={block.title}
                description={block.description}
                cards={block.cards}
              />
          );
          case "blocks.cards-basic":
            return (
              <CardsBasic
                key={`CardsBasic-${block.id}`}
                items={block.items}
              />
            );
          case "blocks.mini-step-block":
            return (
              <MiniStepBlock
                key={`MiniStepBlock-${block.id}`}
                items={block.items}
                description={block.description}
                withArrow={block.withArrow}
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
          case "blocks.image":
            return (
              <figure key={block.image.id} className="">
                <Image
                  src={block.image.data.attributes.url}
                  alt={block.image.data.attributes.alternativeText}
                  width={block.image.data.attributes.width}
                  height={block.image.data.attributes.height}
                  blurDataURL={block.image.data.attributes.url}
                  placeholder="blur"
                />
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};