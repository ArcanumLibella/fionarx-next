import React from "react";

export const TagFormula = ({ label, additionnalStyle }) => {
  return (
    <div className={`TagFormula flex items-center justify-center w-fit px-3 py-1 uppercase border border-white font-brother font-bold bg-clip-text cursor-pointer text-white text-xxs xs:text-tiny md:text-xs 2xl:text-sm ${additionnalStyle}`}>
      {label}
    </div>
  );
};
