import React from "react";
import { Menu } from "../organisms";
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { RDVButton } from "../molecules/RDVButton";

export const MainLayout = async ({pageTitle, children, className: additionalStyle}) => {
  const globalData = await fetchDataFromStrapi("global?populate=deep");
  const socialsItems = globalData.attributes.socials;
  const menuItems = globalData.attributes.menu;

  return (
    <main className="MainLayout relative h-svh overflow-auto bg-midnight z-0">
      <Menu menuItems={menuItems} socialsItems={socialsItems} />
      {/* <RDVButton /> */} {/* TODO: À activer quand je serai prête ! */}
        {children}
    </main>
  )
};