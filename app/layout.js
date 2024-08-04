import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "./_components/GoogleAnalytics";
import { MainLayout } from "./_components";
import "./globals.css";

export const metadata = {
  title: {
    template: '%s | FionaRx',
    default: 'Fiona Roux - Consultante en Stratégie Digitale freelance',
  },
  description: "Consultante en Stratégie Digitale indépendante, j'accompagne les entrepreneurs, indépendants, artisans et petites entreprises à s'adapter à la révolution digitale ou réinventer leur stratégie web",
  keywords: ['Audit digital', 'Développement web', 'WebDesign', 'Charte graphique', 'Branding', 'WebMarketing', 'SEO', 'Réseaux sociaux', 'Tunnel de vente', 'Landing page'],
  authors: [{ name: 'Fiona Roux' }],
  metadataBase: new URL('https://www.fionarx.com/'),
  openGraph: {
    title: "Fiona Roux - Consultante en Stratégie Digitale freelance",
    description: "Consultante en Stratégie Digitale indépendante, j'accompagne les entrepreneurs, indépendants, artisans et petites entreprises à s'adapter à la révolution digitale ou réinventer leur stratégie web",
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