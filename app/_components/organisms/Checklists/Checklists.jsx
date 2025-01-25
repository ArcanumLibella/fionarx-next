import React from 'react';
import { Checklist } from "../../molecules";

export const Checklists = ({ content, isCrossIcon }) => {  
  if (!content) return;

  return (
    <ul className="Checklists">
      {content.map((checklist) => (
        <Checklist key={checklist.id} content={checklist.content} isCrossIcon={isCrossIcon} />
      ))}
    </ul>
  );
};