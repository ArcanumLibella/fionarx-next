import React from 'react'

export const Heading = ({
  children,
  level,
  className: additionalStyle,
}) => {
  switch (level) {
    case 1: /* TITRE DE LA HOMEPAGE */
      return (
        <h1
          className={`Heading font-black uppercase select-none text-[8vw] lg:text-[6vh] xl:text-[8vh] font-brother text-shadow text-stroke-purple-ultraLight md:text-stroke-2 md:text-fill-transparent opacity-20 md:opacity-40 ${additionalStyle}`}
        >
          {children}
        </h1>
      );
    case 2: /* TITRE DE PAGE */
      return (
        <h2
          className={`Heading font-brother font-black text-mxl md:text-xl 2xl:text-xxl tracking-tight md:tracking-tightest uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h2>
      );
    case 3: /* TITRE DE PROJET */
      return (
        <h3
          className={`Heading font-brother font-extrabold text-lg md:text-xlg 2xl:text-xxlg leading-none selection:bg-purple text-tomato ${additionalStyle}`}
        >
          {children}
        </h3>
      );
    case 4: /* SOUS-TITRE */
      return (
        <h4
          className={`Heading mb-4 font-brother font-extrabold text-mmd md:text-md 2xl:text-xmd selection:bg-purple uppercase text-tomato ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case 5: /* Introduction et Bandeau CTA */
      return (
        <h5
          className={`Heading font-brother font-bold text-xbase 2xl:text-lg -tracking-wide selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h5>
      );
    case 6: /* MINI-TITRE */
      return (
        <h6
          className={`Heading font-brother font-black text-normal text-tomato selection:bg-purple uppercase ${additionalStyle}`}
        >
          {children}
        </h6>
      );
    case "custom":
    default:
      return <h6 className={additionalStyle}>{children}</h6>;
  }
};
