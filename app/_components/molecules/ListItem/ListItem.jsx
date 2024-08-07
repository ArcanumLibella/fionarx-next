import React from "react";
import { Text } from "../../atoms";

export const ListItem = ({ number, text }) => {
  return (
    <li className="ListItem flex md:items-center mb-8">
      <span className="flex justify-center items-center mt-2 md:mt-0 mr-6 p-4 max-h-10 bg-tomato">
        <Text type="custom" className="font-brother font-extrabold text-normal xs:text-base md:text-2base">
          {number}
        </Text>
      </span>
      <Text type="paragraphLight">
        {text}
      </Text>
    </li>
  )
}