export default function sitemap() {
  return [
    {
      url: 'https://fionarx.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://fionarx.com/a-propos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://fionarx.com/formules',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://fionarx.com/prestations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://fionarx.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://fionarx.com/formules/digital-starter',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: 'https://fionarx.com/formules/social-impact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.64,
    },
    {
      url: 'https://fionarx.com/prestations/seo',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // {
    //   url: 'https://fionarx.com/projets',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.5,
    // },
  ]
}