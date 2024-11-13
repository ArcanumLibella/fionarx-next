import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Text } from "../Text";

export const Quote = ({ title, quotes }) => {
  if (!quotes) return;

  return (
    <div className="Quote my-6 p-6 w-full max-w-full rounded bg-purple-light">
      {title && (
        <Text type="custom" className="Quote__title mb-2 font-brother font-extrabold uppercase text-tomato">
          {title}
        </Text>
      )}
      <BlocksRenderer
        content={quotes}
        blocks={{
          paragraph: ({ children }) => (
            <blockquote className="Quote__content text-white">
              {children}
            </blockquote>
          )
        }}
        modifiers={{
          bold: ({ children }) => <strong className="!font-semibold text-tomato">{children}</strong>,
          italic: ({ children }) => <span className="!italic">{children}</span>,
        }}
      />
    </div>
  )
}