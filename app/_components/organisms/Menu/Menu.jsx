"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../../atoms";
import { NavButton } from "../../molecules";
import { menuItemVariants, menuItemsVariants, socialItemsVariants } from "./Menu.const";
import { BehanceIcon, DribbbleIcon, GithubIcon, InstagramIcon, LinkedinIcon, MaltIcon } from "@/public/_assets/icons";
import { useIsMobile } from "@/app/_utils/useWindowSize";
import { COLORS } from "@/app/_constants/Colors";

export const Menu = ({ socialsItems, menuItems }) => {
  const { linkedin, malt, github, instagram, behance, dribbble } = socialsItems;

  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMenuItem = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavButton
        socialsItems={socialsItems}
        openMenuHandler={openMenuHandler}
        isMenuOpen={isMenuOpen}
      />
      <motion.nav
        key="menuAside"
        initial={{ width: "0%", opacity: 0 }}
        animate={{ width: isMenuOpen ? "100%" : "0%", opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="Menu fixed overflow-hidden xl:max-w-8/12 z-[200]"
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <motion.ul
          className="Menu__items flex flex-col justify-center w-full h-lvh min-h-lvh bg-twilight pl-0 md:ml-20"
          key="menuUl"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={menuItemsVariants}
        >
          {isMobile && (
            <motion.li
              variants={menuItemVariants}
              whileHover={{ scale: 1.05 }}
              className="Menu__item not-italic"
            >
              <MenuItem
                toggleMenuItem={toggleMenuItem}
                label="Accueil"
                path="/"
              />
            </motion.li>
          )}
          {menuItems.map((item) => {
            return (
              <motion.li
                key={item.id}
                variants={menuItemVariants}
                whileHover={{ scale: 1.05 }}
                className="Menu__item not-italic"
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
        {/* Icons */}
        {isMobile && (
          <motion.div
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            exit="closed"
            variants={socialItemsVariants}
            className="absolute z-50 flex items-center h-14 right-20 bottom-2"
          >
            <motion.a
              href={malt}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              variants={menuItemVariants}
              className="ml-1 xs:ml-4"
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
              className="ml-1 xs:ml-4"
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
              className="ml-1 xs:ml-4"
            >
              <GithubIcon
                fill={COLORS.purple.DEFAULT}
                height={32}
                width={32}
                className="transition-all duration-300 hover:fill-purple-light"
              />
            </motion.a>
            <motion.a
              href={dribbble}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              variants={menuItemVariants}
              className="ml-1 xs:ml-4"
            >
              <DribbbleIcon
                fill={COLORS.purple.DEFAULT}
                height={32}
                width={32}
                className="transition-all duration-300 hover:fill-purple-light"
              />
            </motion.a>
            <motion.a
              href={behance}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              variants={menuItemVariants}
              className="ml-1 xs:ml-4"
            >
              <BehanceIcon
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
              className="ml-1 xs:ml-4"
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
    </>
  );
};

export default Menu;
