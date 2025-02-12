import React from 'react';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Heading, Paragraph, Text } from "../../atoms";

export const Stages = ({ stages }) => {
  return (
    <ol className="Stages relative ml-4 md:ml-0 mt-16 border-s border-tomato">  
      {stages.map((stage) => (
        <li className="mb-10 ms-8 md:ms-10 not-italic" key={stage.id}>            
          <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 -start-4 md:-start-5 bg-tomato rounded-full">
            <Text type="custom" className="h6 pt-1 !mb-0 !text-base 2xl:!text-2base font-bold">
              {stage.number}
            </Text>
          </span>
          <Heading level={3} className="pt-1.5 md:pt-2 mb-4 text-normal md:!text-base !leading-tight uppercase">{stage.title}</Heading>
          <BlocksRenderer 
            key={`BlocksRenderer-${stage.id}`}
            content={stage.description}
            blocks={{
              paragraph: ({ children }) => {
                return (
                <Paragraph className="!text-2normal">
                  {children}
                </Paragraph>
              )
            },
            link: ({ children, url }) => <a key={`link-${stage.id}`} href={url} target="_blank" rel="noreferrer" title="Ouvrir le lien" className="Link font-medium text-tomato hover:!underline">{children}</a>,
            list: ({ children }) => <ul key={`list-items-${stage.id}`} className="List list-disc list-inside">{children}</ul>,
            quote: ({ children }) => <blockquote key={`Quote-${stage.id}`} className="my-6 p-4 xs:p-6 w-full max-w-full text-2normal rounded bg-purple-light">{children}</blockquote>,
            }}
            modifiers={{
              bold: ({ children }) => <strong key={`strong-${stage.id}`} className="font-medium text-tomato">{children}</strong>,
              italic: ({ children }) => <span key={`italic-${stage.id}`} className="italic">{children}</span>,
            }}
          />
        </li>
        ))}                
    </ol>
  );
};
