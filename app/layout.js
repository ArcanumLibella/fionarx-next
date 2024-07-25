import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "./_components/GoogleAnalytics";
import { MainLayout } from "./_components";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s | FionaRx',
    default: 'Fiona Roux - Développeur web freelance',
  },
  description: "Développeur web et Webdesigner indépendante, je vous accompagne à toutes les étapes de votre projet de digitalisation : branding, webdesign, développement web, référencement...",
  keywords: ['Développement web', 'WebDesign', 'Charte graphique', 'Branding', 'NoCode', 'SEO', 'Réseaux sociaux', 'Automatisation'],
  authors: [{ name: 'Fiona Roux' }],
  metadataBase: new URL('https://www.fionarx.com/'),
  openGraph: {
    title: 'Fiona Roux - Développeur web freelance',
    description: 'Développeuse web et Webdesigner depuis 2018, je vous accompagne dans la création de votre projet de digitalisation.',
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
      <GoogleAnalytics />
      <body>
        <MainLayout>
          {children}
        </MainLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
};