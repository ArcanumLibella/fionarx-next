import React from 'react'
import { Text } from "../../atoms/Text"
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Paragraph } from "../../atoms";

export const StackItem = ({title, content, items}) => {
  if (!content) return;

  return (
    <div className="StackItem mr-8 mb-8">
      <Text
          type="custom"
          className="mb-4 font-bold uppercase font-body text-purple-light text-base md:text-xbase"
        >
          {title}
        </Text>
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => {
              return (
                <Text type="paragraphLight">
                  {children}
                </Text>
              )
            },
            link: ({ children, url }) => <a href={url} target="_blank" title="Ouvrir le lien" className="Link transition-colors ease-in-out duration-300 hover:text-tomato">{children}</a>,
          }}
          modifiers={{
            bold: ({ children }) => <strong className="font-medium text-tomato">{children}</strong>,
            italic: ({ children }) => <span className="italic">{children}</span>,
          }}
        />
    </div>
  )
}
