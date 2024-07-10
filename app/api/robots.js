const SITE_URL = "https://www.fionarx.com";

export default function handler(req, res) {
  const robots = `
    User-agent: *
    Disallow:
    Sitemap: ${SITE_URL}/sitemap.xml
  `;
  res.send(robots);
}