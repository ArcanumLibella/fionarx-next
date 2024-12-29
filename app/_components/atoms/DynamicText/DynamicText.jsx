"use client";

import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { Paragraph } from "../Paragraph";

export const DynamicText = ({ text }) => {
  if (!text) return;

  return (
    <BlocksRenderer 
      content={text}
      blocks={{
        paragraph: ({ children }) => (
          <Paragraph className="DynamicText mb-8">
            {children}
          </Paragraph>
        )
      }}
      modifiers={{
        bold: ({ children }) => <strong className="!font-semibold text-tomato">{children}</strong>,
        italic: ({ children }) => <span className="!italic">{children}</span>,
      }}
    />
  )
}
