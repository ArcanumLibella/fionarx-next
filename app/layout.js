import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s | FionaRx',
    default: 'FionaRx', // a default is required when creating a template
  },
  description: "Depuis 2018, j'ai acquis une expérience riche et diversifiée en agences, start-ups et grands groupes. En tant qu’indépendante, je vous accompagne dans la digitalisation de votre projet : branding, webdesign, développement de sites et applications web, mise en ligne optimisée pour le SEO et optimisatin de vos réseaux sociaux. Collaborons ensemble pour faire de votre projet une véritable réussite !",
  keywords: ['Web Development', 'WebDesign', 'Branding', 'NoCode', 'SEO', 'Social Media', 'Automation'],
  openGraph: {
    title: 'Fiona Roux',
    description: 'Dévelopement Web, WebDesign & Stratégie Digitale',
    url: 'https://www.fionarx.com',
    siteName: 'FionaRx',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ArcanumLibella/fionarx-next/main/public/_assets/images/OPENGRAPH-800x600.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'OpenGraph - 800 x 600',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  }
}

export default function RootLayout({children, className: additionalStyle}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
};