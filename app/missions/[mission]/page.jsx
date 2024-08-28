import React from 'react';
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import NotFoundPage from "@/app/404";

export const metadata = { /* TODO: À dynamiser */
  title: 'Missions',
  description: "Voici une liste de quelques projets que j'ai réalisé pour cette mission.",
  keywords: ['Indépendant', 'Freelance', 'Design', 'Développement Web', 'WebDesign', 'Branding', 'WebMarketing', 'SEO', 'SEA', 'Social Media', 'Tunnel de vente', 'Site vitrine'],
  alternates: {
    canonical: '/missions',
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

const ProjectsByMissionPage = async ({ params }) => {
  const { mission: slug } = params;
  let mission;
  
  try {
    const missions = await fetchDataFromStrapi("missions?populate=deep");
    if (missions && missions.length > 0) {
      mission = missions.find((mission) => mission.attributes.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching missions", error);
    return <NotFoundPage />;
  }

  if (!mission || !mission.attributes) {
    return <NotFoundPage />;
  }
  
  const { name, projects } = mission.attributes;
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
            thumbnail={projectAttributes.thumbnail?.data?.attributes}
          />
        )})
      )}
    </ProjectsByCategoryLayout>
  )
}

export default ProjectsByMissionPage;

export async function generateStaticParams() {
  try {
    const missions = await fetchDataFromStrapi("missions");
    return missions.map((mission) => ({
      mission: mission.attributes.slug,
    }));
  } catch (error) {
    console.log("Error fetching slugs for missions", error);
    return [];
  }
}

export const revalidate = 300;