import React from "react";

export const TagFormula = ({ label, additionnalStyle }) => {
  return (
    <div className={`TagFormula flex items-center justify-center w-fit p-0.5 uppercase font-brother font-bold text-xxs xs:text-tiny md:text-xs 2xl:text-sm bg-gradient-to-br from-purple-light from-12% via-tomato via-44% to-orange to-96% cursor-pointer ${additionnalStyle}`}>
      <div className="px-3 py-1 bg-purple">
        {label}
      </div>
    </div>
  );
};
