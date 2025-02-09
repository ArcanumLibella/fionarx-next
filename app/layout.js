import GoogleAnalytics from "./_components/GoogleAnalytics";
import { MainLayout } from "./_components";
import "./globals.css";

export const metadata = {
  title: {
    default: 'Consultant en stratégie digitale freelance | Fiona Roux',
  },
  description: "Votre business manque de visibilité ? Consultant en stratégie digitale freelance 🧚🏻‍♀️, j’élabore des stratégies 100% personnalisées & 100% ROI.",
  keywords: ['consultant en stratégie digital freelance', 'consultant seo freelance', 'webdesigner freelance', 'audit digital', 'création de site internet', 'développeur wordpress avignon', 'développement web', 'web design', 'charte graphique', 'personal branding', 'webmarketing', 'seo', 'référencement naturel', 'référencement local', 'fiche google my business', "transformation digitale", "création de site", "conseil en stratégie digitale", "digitalisation", "marketing digital", "présence digitale", "spécialiste du digital", "image de marque"],
  robots: "MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  authors: [{ name: 'Fiona Roux' }],
  alternates: {
    canonical: "https://www.fionarx.com/",
  },
  metadataBase: new URL('https://www.fionarx.com/'),
  openGraph: {
    title: "Fiona Roux - Consultante en Stratégie Digitale freelance 🧚🏻‍♀️",
    description: "Une seule collaboratrice pour une Stratégie Digitale 360 : audit digital, SEO et référencement local, identité visuelle, webdesign et création de vitrine digitale.",
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
  },
  icons: {
    icon: '/favicon.ico', // icône par défaut
    apple: '/apple-touch-icon.png', // icône pour appareils Apple
    android: '/favicon-96x96.png', // icône pour Android
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="FionaRx" />
        <GoogleAnalytics />
      </head>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
};