import React from 'react';
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import NotFoundPage from "@/app/404";

export default async function ProjectsByTechnoPage({ params }) {
  const { techno: slug } = params;
  let techno;
  
  try {
    const technos = await fetchDataFromStrapi("technos?populate=deep");
    techno = technos.find((techno) => techno.attributes.slug === slug);
  } catch (error) {
    console.error("Error fetching technos", error);
  }

  if (!techno) {
    return <NotFoundPage />;
  }

  const { name, projects } = techno.attributes || { name: "", projects: { data: [] } };
  const noContent = projects.data.length === 0;

  return (
    <ProjectsByCategoryLayout name={name} noContent={noContent}>
      {noContent ? (
        <NoContent />
      ) : (
        projects?.data?.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.attributes.title}
            slug={project.attributes.slug}
            missions={project.attributes.missions}
            thumbnail={project.attributes.thumbnail.data.attributes}
          />
        ))
      )}
    </ProjectsByCategoryLayout>
  )
}

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