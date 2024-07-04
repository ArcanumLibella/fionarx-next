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
          className={`Heading font-brother font-black text-lg xs:text-2lg md:text-2xl 2xl:text-3xl tracking-tight md:tracking-tightest uppercase selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h2>
      );
    case 3: /* TITRE DE PROJET */
      return (
        <h3
          className={`Heading font-brother font-extrabold text-md xs:text-lg md:text-3lg 2xl:text-2xl leading-none selection:bg-purple text-tomato ${additionalStyle}`}
        >
          {children}
        </h3>
      );
    case 4: /* SOUS-TITRE */
      return (
        <h4
          className={`Heading mb-4 font-brother font-extrabold text-2base md:text-md 2xl:text-2md selection:bg-purple uppercase text-tomato ${additionalStyle}`}
        >
          {children}
        </h4>
      );
    case 5: /* Introduction et Bandeau CTA */
      return (
        <h5
          className={`Heading font-brother font-bold text-base xs:text-2base md:text-3base 2xl:text-lg -tracking-wide selection:bg-purple ${additionalStyle}`}
        >
          {children}
        </h5>
      );
    case 6: /* MINI-TITRE */
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
