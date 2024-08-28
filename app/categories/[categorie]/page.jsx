import React from 'react';
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import NotFoundPage from "@/app/404";

export const metadata = { /* TODO: À dynamiser */
  title: 'Catégories',
  description: "Voici une liste de quelques projets que j'ai réalisé pour cette catégorie.",
  keywords: ['Indépendant', 'Freelance', 'Design', 'Développement Web', 'WebDesign', 'Branding', 'WebMarketing', 'SEO', 'SEA', 'Social Media', 'Tunnel de vente', 'Site vitrine'],
  alternates: {
    canonical: '/categories',
  },
  openGraph: {
    title: 'Fiona Roux',
    description: 'Consultante en Stratégie Digitale dans le Sud de la France',
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

const ProjectsByCategoryPage = async ({ params }) => {
  const { categorie: slug } = params;
  let categorie;

  try {
    const categories = await fetchDataFromStrapi("categories?populate=deep");
    if (categories && categories.length > 0) {
      categorie = categories.find((categorie) => categorie?.attributes?.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching categories", error);
    return <NotFoundPage />;
  }

  if (!categorie || !categorie.attributes) {
    return <NotFoundPage />;
  }

  const { name, projects } = categorie.attributes;
  const noContent = !projects?.data || projects.data.length === 0;

  return (
    <ProjectsByCategoryLayout name={name} noContent={noContent}>
      {noContent ? (
        <NoContent />
      ) : (
        projects.data.map((project) => {
          const projectAttributes = project?.attributes || {};

          return (
            <ProjectCard
              key={project.id}
              title={projectAttributes.title}
              missions={projectAttributes.missions}
              slug={projectAttributes.slug}
              thumbnail={projectAttributes.thumbnail?.data?.attributes}
            />
          );
        })
      )}
    </ProjectsByCategoryLayout>
  );
}

export default ProjectsByCategoryPage;

export async function generateStaticParams() {
  try {
    const categories = await fetchDataFromStrapi("categories");
    return categories.map((categorie) => ({
      categorie: categorie.attributes.slug,
    }));
  } catch (error) {
    console.log("Error fetching slugs for categories", error);
    return [];
  }
}

export const revalidate = 300;
