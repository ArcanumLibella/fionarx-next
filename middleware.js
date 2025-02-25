import { NextResponse } from 'next/server';

export async function middleware(req) {
  try {
    // Récupérer les redirections depuis Strapi
    const res = await fetch("https://fionarx-strapi-d31f1e7bca7a.herokuapp.com/api/redirects"); // Remplacez par l'URL Strapi en prod
    // const res = await fetch("http://localhost:1337/api/redirects"); // Remplacez par l'URL Strapi en prod
    const data = await res.json();

    if (!data || !data.redirects) {
      console.log("Aucune redirection trouvée dans l'API.");
      return NextResponse.next();
    }

    // Vérifier si l'URL actuelle correspond à une redirection
    const redirect = data.redirects.find((r) => {
      return req.nextUrl.pathname.replace(/\/$/, '') === r.from.replace(/\/$/, '');
    });

    if (redirect) {
      console.log(`✅ Redirection trouvée : ${redirect.from} -> ${redirect.to}`);
      return NextResponse.redirect(new URL(redirect.to, req.url), redirect.type === "moved_permanently_301" ? 301 : 302);
    }
  } catch (error) {
    console.error("❌ Erreur middleware redirections:", error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // Appliquer à toutes les routes
};
