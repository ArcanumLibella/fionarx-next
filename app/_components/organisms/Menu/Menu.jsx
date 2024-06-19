"use client"; // top to the file

import React, { useState } from "react";
import { useIsMobile } from "../../../_utils/useWindowSize";
import { useOuterClick } from "../../../_hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";

import { NavButton } from "../../molecules/NavButton";
import { MenuItem } from "../../atoms/MenuItem";
import { GithubIcon, InstagramIcon, LinkedinIcon, MaltIcon } from "../../../_assets/icons";
import { COLORS } from "../../../_constants/Colors";
import { menuItemVariants, menuItemsVariants, socialItemsVariants } from "./Menu.const";

export const Menu = () => {
  // const data = useStaticQuery(graphql`
  //   query GetMenuItems {
  //     strapiGlobal {
  //       menu {
  //         label
  //         link
  //       }
  //       socials {
  //         linkedin
  //         malt
  //         github
  //         instagram
  //       }
  //     }
  //   }
  // `);

  // const menuItems = data.strapiGlobal.menu;
  const menuItems = [
    {
        label: "Projets",
        link: "/projets"
    },
    {
        label: "À propos",
        link: "/a-propos"
    },
    {
        label: "Prestations",
        link: "/prestations"
    },
    {
        label: "Contact",
        link: "/contact"
    }
  ]

  // const { linkedin, malt, github, instagram } = data.strapiGlobal.socials;
  const { linkedin, malt, github, instagram } = {
    linkedin: "https://www.linkedin.com/in/fionaroux/",
    malt: "https://www.malt.fr/profile/fionaroux",
    github: "https://github.com/ArcanumLibella",
    instagram: "https://www.instagram.com/sukhakulii/"
  }


  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const innerRef = useOuterClick(() => {
    setIsMenuOpen(false);
  }, "click");

  const openMenuHandler = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuItem = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavButton openMenuHandler={openMenuHandler} isMenuOpen={isMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            ref={innerRef}
            key="menuAside"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ width: "0%", transition: { delay: 0.7, duration: 0.3 } }}
            className="Menu fixed z-40 overflow-hidden xl:max-w-8/12"
          >
            <motion.ul
              className="flex flex-col justify-center w-full h-screen bg-twilight pl-0 md:ml-20"
              key="menuUl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuItemsVariants}
            >
              {isMobile && (
                  <motion.li
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MenuItem
                      toggleMenuItem={toggleMenuItem}
                      label="Accueil"
                      path="/"
                    />
                  </motion.li>
              )}
              {menuItems.map((item, i) => {
                return (
                  <motion.li
                    key={i}
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MenuItem 
                      toggleMenuItem={toggleMenuItem}
                      label={item.label}
                      path={`${item.link}`}
                    />
                  </motion.li>
                );
              })}
            </motion.ul>
            {isMobile && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={socialItemsVariants}
                className="absolute z-50 flex items-center gap-4 h-14 right-20 bottom-2 "
              >
                <motion.a
                  href={malt}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <MaltIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <LinkedinIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <GithubIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
                <motion.a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2 }}
                  variants={menuItemVariants}
                >
                  <InstagramIcon
                    fill={COLORS.purple.DEFAULT}
                    height={32}
                    width={32}
                    className="transition-all duration-300 hover:fill-purple-light"
                  />
                </motion.a>
              </motion.div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;  