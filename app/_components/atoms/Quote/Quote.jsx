import React from "react";
import { Text } from "../Text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Quote = ({ quotes }) => {
  return (
    <div className="Quote p-6 w-full max-w-full rounded bg-purple-light">
      <BlocksRenderer 
        content={quotes}
        blocks={{
          paragraph: ({ children }) => (
            <Text type="paragraphLarge" className="text-white">
              {children}
            </Text>
          )
        }}
        modifiers={{
          bold: ({ children }) => <strong className="font-bold text-tomato">{children}</strong>,
          italic: ({ children }) => <span className="italic">{children}</span>,
        }}
      />
    </div>
  )
}