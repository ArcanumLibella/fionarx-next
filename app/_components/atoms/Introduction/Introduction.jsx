"use client";

import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { Paragraph } from "../Paragraph";

export const Introduction = ({ introduction }) => {
  if (!introduction.content) return;

  return (
    <BlocksRenderer 
      content={introduction.content}
      blocks={{
        paragraph: ({ children }) => (
          <Paragraph className="Introduction mb-8">
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
