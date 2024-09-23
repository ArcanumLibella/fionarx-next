import React from "react";
import { Paragraph, Text } from "../../atoms";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const ListItem = ({ number, content }) => {
  return (
    <li className="ListItem flex md:items-center mb-8">
      <span className="flex justify-center items-center mr-4 md:mr-6 px-2 py-0 md:p-4 w-full max-w-6 xs:max-w-8 md:max-w-10 max-h-6 xs:max-h-8 md:max-h-10 bg-tomato">
        <Text type="custom" className="ListItem__number font-brother font-extrabold text-sm xs:text-base md:text-2base">
          {number}
        </Text>
      </span>
      <div>
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => (
              <Paragraph className="!mb-0 text-normal xs:text-2normal md:text-base">
                {children}
              </Paragraph>
            ),
            list: ({ children }) => (
              <ul className="ListItem__sublist list-disc md:pl-6">
                {React.Children.map(children, (child, index) => (
                  <li key={index} className="flex items-center mb-1 pl-5 text-normal xs:text-2normal not-italic">
                    {child}
                  </li>
                ))}
              </ul>
            ),
          }}
          modifiers={{
            bold: ({ children }) => (
              <strong className="!font-bold text-tomato">{children}</strong>
            ),
            italic: ({ children }) => (
              <span className="!italic">{children}</span>
            ),
          }}
        />
      </div>
    </li>
  )
}