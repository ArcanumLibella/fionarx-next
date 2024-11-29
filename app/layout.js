import GoogleAnalytics from "./_components/GoogleAnalytics";
import { MainLayout } from "./_components";
import "./globals.css";

export const metadata = {
  title: {
    template: 'Fiona Roux %s',
    default: 'Fiona Roux - Consultant en Stratégie Digitale freelance',
  },
  description: "Votre consultant en stratégie digitale freelance, une seule collaboratrice pour une Stratégie Digitale 360 : audit, SEO, branding, design et création de site internet.",
  keywords: ['consultant en stratégie digital freelance', 'consultant seo freelance', 'webdesigner freelance', 'audit digital', 'création de site internet', 'développeur wordpress avignon', 'développement web', 'web design', 'charte graphique', 'personal branding', 'webmarketing', 'seo', 'référencement naturel', 'référencement local', 'fiche google my business', "transformation digitale", "création de site", "conseil en stratégie digitale", "digitalisation", "marketing digital", "présence digitale", "spécialiste du digital", "image de marque"],
  robots: "MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  authors: [{ name: 'Fiona Roux' }],
  alternates: {
    canonical: "https://www.fionarx.com/",
  },
  metadataBase: new URL('https://www.fionarx.com/'),
  openGraph: {
    title: "Fiona Roux - Consultante en Stratégie Digitale freelance",
    description: "Une seule collaboratrice pour une Stratégie Digitale 360 : audit digital, SEO et référencement local, branding, web design et création de site internet.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <GoogleAnalytics />
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
};