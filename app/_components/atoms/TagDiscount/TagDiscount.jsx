import React from "react";
import { Text } from "../Text";

export const TagDiscount = ({className: additionnalStyle}) => {
  return (
    <div className={`DiscountTag flex justify-center items-center w-fit p-2 lg:p-3 border-2 lg:border-4 border-tomato rounded-xl ${additionnalStyle}`}>
    <Text type="custom" className="font-brother font-bold text-tomato text-xs lg:text-sm uppercase">
      🔥 Offre de lancement
    </Text>
  </div>
  );
};
