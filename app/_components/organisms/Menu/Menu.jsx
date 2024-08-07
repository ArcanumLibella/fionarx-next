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
        className={`Menu fixed z-100 overflow-hidden xl:max-w-8/12`}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <motion.ul
          className="flex flex-col justify-center w-full h-svh bg-twilight pl-0 md:ml-20"
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
              href={dribbble}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              variants={menuItemVariants}
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
