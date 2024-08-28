import React from 'react';
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import NotFoundPage from "@/app/404";

export const metadata = {
  title: 'Technos',
  description: "Voici une liste de quelques projets que j'ai réalisé avec ces technologies.",
  keywords: ['Indépendant', 'Freelance', 'Design', 'Développement Web', 'WebDesign', 'Branding', 'WebMarketing', 'SEO', 'SEA', 'Social Media', 'Tunnel de vente', 'Site vitrine'],
  alternates: {
    canonical: '/technos',
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

const ProjectsByTechnoPage = async ({ params }) => {
  const { techno: slug } = params;
  let techno;
  
  try {
    const technos = await fetchDataFromStrapi("technos?populate=deep");
    if (technos && technos.length > 0) {
      techno = technos.find((techno) => techno.attributes.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching technos", error);
    return <NotFoundPage />;
  }

  if (!techno || !techno.attributes) {
    return <NotFoundPage />;
  }

  const { name, projects } = techno.attributes;
  const noContent = !projects?.data || projects.data.length === 0;

  return (
    <ProjectsByCategoryLayout name={name} noContent={noContent}>
      {noContent ? (
        <NoContent />
      ) : (
        projects?.data?.map((project) => {
          const projectAttributes = project?.attributes || {};

          return (
          <ProjectCard
            key={project.id}
            title={projectAttributes.title}
            slug={projectAttributes.slug}
            missions={projectAttributes.missions}
            thumbnail={projectAttributes.thumbnail?.data?.attributes}
          />
        )})
      )}
    </ProjectsByCategoryLayout>
  )
}

export default ProjectsByTechnoPage;

export async function generateStaticParams() {
  try {
    const technos = await fetchDataFromStrapi("technos");
    return technos.map((techno) => ({
      techno: techno.attributes.slug,
    }));
  } catch (error) {
    console.log("Error fetching slugs for technos", error);
    return [];
  }
}

export const revalidate = 300;