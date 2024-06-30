import React from "react";
import { StackItem } from "../../molecules";

export const StackItems = ({ items }) => {
  if (!items) return;

  return (
    <div className="StackItems grid grid-cols-2 gap-8">
      {items.map((item, index) => {
        return (
          <StackItem key={index} title={item.title} items={item.items} content={item.content}/>
        )
      })}
    </div>
  );
};
