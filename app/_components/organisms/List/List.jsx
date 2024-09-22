import React from 'react';
import { ListItem } from "../../molecules";

export const List = ({ items }) => {  
  if (!items) return;

  return (
    <ul className="List">
      {items.map((item) => (
        <ListItem key={item.id} number={item.number} content={item.content} text={item.text} />
      ))}
    </ul>
  );
};