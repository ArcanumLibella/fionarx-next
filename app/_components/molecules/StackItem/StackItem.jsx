import React from 'react'
import { Text } from "../../atoms/Text"

export const StackItem = ({title, content, items}) => {
  if (!content) return;

  return (
    <div className="StackItem">
      <Text
          type="custom"
          className="mb-4 font-bold uppercase font-body text-purple-light text-base md:text-xbase"
        >
          {title}
        </Text>
        {content.map((item, index) => {
          return (
            <Text key={index} type="paragraphLight">
              {item.children[0].text}
            </Text>
          )
        })}
    </div>
  )
}
