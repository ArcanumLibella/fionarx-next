import React from 'react';
import { Checklist } from "../../molecules";

export const Checklists = ({ content }) => {  
  if (!content) return;

  return (
    <ul className="Checklists">
      {content.map((checklist) => (
        <Checklist key={checklist.id} content={checklist.content} />
      ))}
    </ul>
  );
};