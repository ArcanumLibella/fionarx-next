"use client";

import React from 'react'
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { Text } from "../Text"

export const Subtitle = ({ subtitle }) => {
  if (!subtitle) return;

  return (
    <BlocksRenderer 
      content={subtitle}
      blocks={{
        paragraph: ({ children }) => (
          <Text type="paragraphLarge" className="Subtitle mb-8">
            {children}
          </Text>
        )
      }}
      modifiers={{
        bold: ({ children }) => <strong className="!font-bold text-tomato">{children}</strong>,
        italic: ({ children }) => <span className="!italic">{children}</span>,
      }}
    />
  )
}
