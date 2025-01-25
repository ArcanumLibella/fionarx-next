import React from 'react';
import { ListItem } from "../../molecules";

export const List = ({ items, className: additionalStyle, }) => {  
  if (!items) return;

  return (
    <ul className={`List my-12 md:my-16 ${additionalStyle}`}>
      {items.map((item) => (
        <ListItem key={item.id} number={item.number} content={item.content} text={item.text} />
      ))}
    </ul>
  );
};