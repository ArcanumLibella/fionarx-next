import React from "react";
import { Text } from "../Text";

export const Copyright = () => {
  return (
    <Text type="paragraphLight" className="Copyright fixed left-1/2 bottom-2 -translate-x-1/2 w-full md:ml-10 text-center !text-tiny text-purple-ultraLight">
      © 2024 FionaRx. Tous droits réservés.
    </Text>
  )
}