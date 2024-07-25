import React from "react";
import { Heading, Paragraph, Separator } from "../../atoms";
import { ButtonLarge } from "../../molecules";
import { TEXT_TYPES } from "./Footer.const";

const renderText = (text) => {
  switch (text.type) {
    case TEXT_TYPES.HEADING:
      return (
        <Heading key={`Heading-${text.id}`} level={text.level} className="mb-2 text-center text-balance">
          {text.children[0].text}
        </Heading>
      );
    case TEXT_TYPES.PARAGRAPH:
      return (
        <Paragraph key={`Paragraph-${text.id}`}>
          {text.children[0].text}
        </Paragraph>
      );
    default:
      return null;
  }
};

export const Footer = ({ content, button }) => {
  return (
    <div className="Footer relative -bottom-16 md:-bottom-24 xl:-bottom-48 2xl:-bottom-96 flex flex-col items-center md:ml-20 px-4 md:px-8 pb-24 md:pb-48 z-100">
      {content.map(renderText)}

      <Separator />
      {button && (
        <ButtonLarge
          label={button.label}
          url={button.url}
          isExternal={button.isExternal}
          isCentered={button.isCentered}
        />
      )}
    </div>
  );
};

export default Footer;
