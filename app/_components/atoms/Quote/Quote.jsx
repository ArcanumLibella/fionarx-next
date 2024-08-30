import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Paragraph } from "../Paragraph";

export const Quote = ({ quotes }) => {
  if (!quotes) return;

  return (
    <div className="Quote my-6 p-6 w-full max-w-full rounded bg-purple-light">
      <BlocksRenderer
        content={quotes}
        blocks={{
          paragraph: ({ children }) => (
            <Paragraph className="!mb-0 text-white">
              {children}
            </Paragraph>
          )
        }}
        modifiers={{
          bold: ({ children }) => <strong className="!font-bold text-tomato">{children}</strong>,
          italic: ({ children }) => <span className="!italic">{children}</span>,
        }}
      />
    </div>
  )
}