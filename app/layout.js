import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s | FionaRx',
    default: 'FionaRx', // a default is required when creating a template
  },
  description: "Développeuse web indépendante, je vous accompagne à toutes les étapes de votre projet de digitalisation.",
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

export default function RootLayout({ children, className: additionalStyle }) {
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