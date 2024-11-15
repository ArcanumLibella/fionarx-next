import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import React from 'react'
import { Heading, Paragraph } from "../../atoms";
import { Button, ButtonLarge } from "../../molecules";

export const DoubleContent = ({ image, text, button, reverse }) => {
  return (
    <div className={`DoubleContent flex flex-col lg:flex-row ${reverse && "lg:flex-row-reverse"} items-center gap-4 xl:gap-8 my-8`}>
      <div className="mb-8 lg:mb-0">
        <div className="DoubleContent__text mb-8 xl:min-w-[420px]">
          <BlocksRenderer 
            content={text}
            blocks={{
              paragraph: ({ children }) => {
                return (
                <Paragraph key={`Paragraph-${text.id}`}>
                  {children}
                </Paragraph>
              )
            },
              heading: ({ children, level }) => {                    
                return (
                  <Heading key={`Heading-${text.id}`} level={level} className="!mt-0">
                    {children}
                  </Heading>
                )
              },
              link: ({ children, url }) => <a key={`link-${text.id}`} href={url} target="_blank" rel="noreferrer" title="Ouvrir le lien" className="Link font-medium text-tomato hover:!underline">{children}</a>,
              list: ({ children }) => <ul key={`list-items-${text.id}`} className="List list-disc list-inside">{children}</ul>,
              quote: ({ children }) => <blockquote key={`Quote-${text.id}`} className="my-6 p-4 xs:p-6 w-full max-w-full text-2normal rounded bg-purple-light">{children}</blockquote>,
            }}
            modifiers={{
              bold: ({ children }) => <strong className="!font-semibold text-tomato">{children}</strong>,
              italic: ({ children }) => <span className="!italic">{children}</span>,
            }}
          />
        </div>
        {button && (
          <Button
            label={button.label}
            url={button.url}
            isExternal={button.isExternal}
            isCentered={button.isCentered}
            className="DoubleContent__button w-max !text-white bg-gradient-to-r from-orange from-12% via-tomato via-44% to-purple-light to-96%"
          />
        )}
      </div>
      {image && (
        <figure key={image.id} className="DoubleContent__image min-w-72 max-w-96">
          <Image
            src={image.data.attributes.url}
            alt={image.data.attributes.alternativeText}
            width={image.data.attributes.width}
            height={image.data.attributes.height}
            blurDataURL={image.data.attributes.url}
            placeholder="blur"
            className=""
          />
        </figure>
      )}
    </div>
  );
};
