import "./globals.css";

export const metadata = {
  title: "FionaRx",
  description: "Generated by create next app",
};

export default function RootLayout({children, className: additionalStyle}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
};