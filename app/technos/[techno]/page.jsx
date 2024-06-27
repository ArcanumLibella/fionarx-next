import React from 'react';
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { ProjectsByCategoryLayout } from "@/app/_components/layouts/ProjectsByCategoryLayout";
import { ProjectCard } from "@/app/_components/organisms/ProjectCard";
import { NoContent } from "@/app/_components/molecules/NoContent";

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