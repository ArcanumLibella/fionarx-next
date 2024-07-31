import React from "react";
import { Text } from "../Text";

export const FootNote = ({ note }) => {
  return (
    <Text type="paragraphLight" className="FootNote italic !text-sm text-purple-ultraLight">
      {note}
    </Text>
  )
}