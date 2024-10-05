import React from "react";
import { Text } from "../Text";

export const Copyright = ({ year }) => {
  return (
    <Text type="paragraphLight" className="Copyright absolute left-1/2 bottom-2 -translate-x-1/2 w-full text-center !text-tiny text-white opacity-80">
      ©{year} Fiona Roux. Tous droits réservés.
    </Text>
  )
}