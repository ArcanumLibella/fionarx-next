import React from 'react';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Heading, Text } from "../../atoms";

export const Stages = ({ stages }) => {
  return (
    <ol className="Stages relative ml-4 md:ml-0 mt-16 border-s border-tomato">  
      {stages.map((stage) => (
        <li className="mb-10 ms-8 md:ms-10" key={stage.id}>            
          <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 -start-4 md:-start-5 bg-tomato rounded-full">
            <Heading level={5} className="!mb-0 2xl:!text-2base">{stage.number}</Heading>
          </span>
          <Heading level={5} className="mb-4 2xl:!text-md">{stage.title}</Heading>
            <BlocksRenderer 
              key={`BlocksRenderer-${stage.id}`}
              content={stage.description}
              blocks={{
                paragraph: ({ children }) => (
                  <Text type="paragraphLight" className="!text-normal">
                    {children}
                  </Text>
                )
              }}
              modifiers={{
                bold: ({ children }) => <strong key={`strong-${stage.id}`} className="font-bold text-tomato">{children}</strong>,
                italic: ({ children }) => <span key={`italic-${stage.id}`} className="italic">{children}</span>,
              }}
            />
        </li>
        )
      )}                
    </ol>
  );
};
