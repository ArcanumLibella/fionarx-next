import React from "react";
import { Text } from "../Text";

export const Quote = ({ quoteContent }) => {
  return (
    <div className="Quote p-6 w-full max-w-full rounded bg-purple-light">
      <Text type="paragraphLarge" className="text-white">
        {quoteContent}
      </Text>
    </div>
  )
}