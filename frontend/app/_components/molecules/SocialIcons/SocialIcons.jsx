import React from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon, MaltIcon } from "../../../_assets/icons";
import { COLORS } from "../../../_constants/Colors";

export const SocialIcons = ({
  className: additionalStyle,
}) => {
  // const { strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     strapiGlobal {
  //       socials {
  //         github
  //         instagram
  //         linkedin
  //         malt
  //       }
  //     }
  //   }
  // `);

  // const { linkedin, malt, github, instagram } = strapiGlobal.socials;
  const { linkedin, malt, github, instagram } = {
    linkedin: "https://www.linkedin.com/in/fionaroux/",
    malt: "https://www.malt.fr/profile/fionaroux",
    github: "https://github.com/ArcanumLibella",
    instagram: "https://www.instagram.com/sukhakulii/"
  }
  
  const socialIcons = [
    {
      label: 'Linkedin',
      path: linkedin,
      icon: <LinkedinIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
    },
    {
      label: 'Malt',
      path: malt,
      icon: <MaltIcon fill={COLORS.white.DEFAULT} className="transition-all duration-300 hover:fill-tomato" />
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
    },
  ];
  
  const renderedSocialIcons = socialIcons.map((icon, index) => {
    return (
      <a
        href={icon.path}
        key={index}
        target="_blank"
        rel="noreferrer"
        aria-label={`Lien vers ${icon.label}`}
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
