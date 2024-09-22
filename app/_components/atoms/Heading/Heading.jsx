import React from 'react'

export const Heading = ({
  children,
  level,
  className: additionalStyle,
}) => {
  switch (level) {
    case 1: /* TITRE DE LA PAGE */ 
      return (
        <h1
          className={`Heading font-brother font-black text-lg xs:text-2lg md:text-2xl 2xl:text-3xl selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h1>
      );
    case 2: /* SOUS-TITRE DE PAGE */
      return (
        <h2
          className={`Heading mt-12 md:mt-16 mb-6 md:mb-8 font-brother font-black text-base md:text-3base 2xl:text-md text-balance uppercase text-tomato selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h2>
      );
    case 3: /* PETIT-TITRE DE PAGE */
      return (
        <h3
          className={`Heading mt-12 md:mt-16 mb-4 md:mb-8 font-brother font-extrabold text-base md:text-3base 2xl:text-2md leading-none text-tomato selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h3>
      );
    case 4: /* MINI-TITRE OU TITRE DE CARD */
      return (
        <h4
          className={`Heading mb-4 font-brother font-extrabold text-base md:text-2base 2xl:text-3base uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          className={`Heading font-brother font-bold text-2normal lg:text-base 2xl:text-2base uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h5>
      );
    case 6:
      return (
        <h6
          className={`Heading font-bold text-sm md:text-normal lg:text-2normal 2xl:text-base uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h6>
      );
    case "gradient": /* TITRE DEGRADÉ */
      return (
        <h6 className={`HeadingGradient ${additionalStyle} font-brother text-center font-black text-3base md:text-md lg:text-lg leading-tight text-balance bg-gradient-to-r from-purple-light from-12% via-tomato via-44% to-orange to-96% bg-clip-text text-transparent text-tomato`}>
          {children}
        </h6>
      )
    default:
      return <h6 className={`HeadingCustom ${additionalStyle}`}>{children}</h6>;
  }
};
