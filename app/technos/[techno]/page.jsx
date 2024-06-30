import React from 'react';
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";

export default async function ProjectsByTechnoPage({ params }) {
  const { techno: slug } = params
  
  const technos = await fetchDataFromStrapi("technos?populate=deep");
  const techno = technos.find((techno) => techno.attributes.slug === slug);
  const {name, projects} = techno.attributes;
  const noContent = projects.data.length === 0;

  return (
    <ProjectsByCategoryLayout name={name} noContent={noContent}>
      {noContent ? (
        <NoContent />
      ) : (
        projects.data.map((project) => (
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
  }
}

export const revalidate = 300;