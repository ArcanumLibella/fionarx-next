import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Quote = ({ quotes }) => {
  if (!quotes) return;

  return (
    <div className="Quote my-6 p-6 w-full max-w-full rounded bg-purple-light">
      <BlocksRenderer
        content={quotes}
        blocks={{
          paragraph: ({ children }) => (
            <blockquote className="text-white">
              {children}
            </blockquote>
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