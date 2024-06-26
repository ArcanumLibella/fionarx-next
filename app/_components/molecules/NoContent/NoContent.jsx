import React from "react";
import { ButtonLarge } from "../ButtonLarge";
import { Heading } from "../../atoms/Heading";

export const NoContent = () => {
  return (
    <div className="NoContent text-center">
      <Heading level={5} className="mb-4">Rien pour le moment, mais cela ne saurait tarder...</Heading>
      <Heading level={4} className="mb-8">Une mission pour moi ?</Heading>
      <ButtonLarge label="Prendre RDV" url="/contact" isCentered />
    </div>
  )
}
