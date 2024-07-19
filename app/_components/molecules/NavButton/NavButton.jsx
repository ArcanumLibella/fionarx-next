"use client";

import React from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { SocialIcons } from "../SocialIcons";
import { useIsMobile } from "../../../_utils/useWindowSize";


export const NavButton = ({ socialsItems, openMenuHandler, isMenuOpen }) => {
  const isMobile = useIsMobile();

  return (
    <div className="NavButton fixed flex-col items-center justify-between bottom-2 right-2 md:bottom-0 md:left-0 md:w-20 md:h-dvh md:flex z-[1000]">
      <Link
        href="/"
        role="link"
        aria-label="Lien vers l'accueil"
        className="NavButton__home hidden w-20 h-20 md:flex md:items-center md:justify-center font-bold transition-all duration-300 bg-transparent border-2 hover:text-tomato font-brother text-tiny border-purple-ultraDark"
      >
        HOME
      </Link>
      <div
        onClick={(e) => openMenuHandler(e)}
        role="button"
        aria-label="Bouton pour ouvrir le menu"
        className="NavButton__button flex-col items-center justify-between md:py-4 md:w-20 md:h-full md:flex md:bg-purple-ultraDark"
      >
        <span 
          className="NavButton__menu flex items-center justify-center w-full p-2 font-bold border-2 rounded-full lg:p-0 font-brother text-tiny md:items-start md:flex-1 border-purple-light md:border-none h-14 filter backdrop-blur-md"
          role="button"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobile ? (
            "MENU"
          ) : (
            <Hamburger
              toggled={isMenuOpen}
              toggle={() => openMenuHandler}
              onToggle={() => openMenuHandler}
            />
          )}
        </span>
        <SocialIcons
          socialsItems={socialsItems}
          className="flex-col justify-end flex-1 hidden gap-3 md:flex"
        />
      </div>
    </div>
  );
};
