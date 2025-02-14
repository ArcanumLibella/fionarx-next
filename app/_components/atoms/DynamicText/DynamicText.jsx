"use client";

import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { Paragraph } from "../Paragraph";
import { Heading } from "../Heading";
import { CustomList } from "../../molecules";

export const DynamicText = ({ text }) => {
  if (!text) return;

  return (
    <BlocksRenderer 
      content={text}
      blocks={{
        paragraph: ({ children }) => {
          return (
            <Paragraph key={"Paragraph"}>
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
        link: ({ children, url }) => <a /* key={`link-${block.id}`} */ href={url} target="_blank" title="Ouvrir le lien" className="Link font-medium text-tomato hover:!underline">{children}</a>,
        list: ({ children }) => <ul className="List list-disc list-inside text-normal xs:text-base text-pretty">{children}</ul>,
        list: ({ children }) => <CustomList>{children}</CustomList>,
        quote: ({ children }) => <blockquote className="my-6 p-4 xs:p-6 w-full max-w-full text-2normal rounded bg-purple-light">{children}</blockquote>,
      }}
      modifiers={{
        bold: ({ children }) => <strong /* key={`strong-${block.id}`} */ className="font-medium text-tomato">{children}</strong>,
        italic: ({ children }) => <span /* key={`span-${block.id}`} */ className="italic">{children}</span>,
      }}
    />
  )
}
