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
          className={`Heading mt-12 md:mt-16 mb-4 font-brother font-black text-base md:text-3base 2xl:text-md text-balance uppercase text-tomato selection:bg-purple ${additionalStyle}`}
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
          className={`Heading mb-4 font-brother font-bold text-base 2xl:text-2base selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case 5: /* INTRODUCTION ET FOOTER FIXME: */
      return (
        <h5
          className={`Heading font-brother font-bold text-base xs:text-2base md:text-3base 2xl:text-lg -tracking-wide selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h5>
      );
    case 6: /* MINI-TITRE ET LINK FIXME: */
      return (
        <h6
          className={`Heading font-brother font-black text-tiny xs:text-normal text-tomato selection:bg-purple uppercase ${additionalStyle}`}
        >
          {children}
        </h6>
      );
    case "custom":
    default:
      return <h6 className={additionalStyle}>{children}</h6>;
  }
};
