"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Paragraph } from "../../atoms";
import { CheckIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export const Checklist = ({ content }) => {
  if (!content) return;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <li className="Checklist flex items-start mb-6 not-italic">
            <CheckIcon
              fill={COLORS.tomato.DEFAULT}
              width={16}
              height={16}
              className="min-w-4 mt-1 mr-2"
            />
            <Paragraph className="!mb-0 text-normal xs:text-2normal">
              {children}
            </Paragraph>
          </li>
        ),
        list: ({ children }) => (
          <ul className="Checklist__sublist list-disc md:pl-6">
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
          <strong className="!font-medium !text-white">{children}</strong>
        ),
        italic: ({ children }) => (
          <span className="!italic">{children}</span>
        ),
      }}
    />
  );
};
