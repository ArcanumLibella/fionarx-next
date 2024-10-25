import React from "react";
import { BehanceIcon, DribbbleIcon, GithubIcon, InstagramIcon, LinkedinIcon, MaltIcon } from "../../../../public/_assets/icons";
import { COLORS } from "../../../_constants/Colors";

export const SocialIcons = ({
  socialsItems,
  className: additionalStyle,
}) => {
  if (!socialsItems) return;
  const { linkedin, malt, github, instagram, dribbble, behance } = socialsItems;

  const socialIcons = [
    {
      label: 'Malt',
      path: malt,
      icon: <MaltIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
    },
    {
      label: 'Linkedin',
      path: linkedin,
      icon: <LinkedinIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
    },
    {
      label: 'Behance',
      path: behance,
      icon: <BehanceIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
    },
    {
      label: 'Dribbble',
      path: dribbble,
      icon: <DribbbleIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
    },
    {
      label: 'Github',
      path: github,
      icon: <GithubIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
    },
    {
      label: 'Instagram',
      path: instagram,
      icon: <InstagramIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
    }
  ];
  
  const renderedSocialIcons = socialIcons.map((icon, index) => {
    return (
      <a
        href={icon.path}
        key={index}
        target="_blank"
        rel="noreferrer"
        role="link"
        title={icon.label}
        aria-label={`Lien vers ${icon.label}`}
        className="mb-3"
      >
        {icon.icon}
      </a>
    );
  });

  return (
    <div className={additionalStyle}>
      {renderedSocialIcons}
    </div>
  );
};
