import React from 'react';
import { ProjectLayout } from "@/app/_components/layouts/ProjectLayout"
import { fetchDataFromStrapi, fetchProjects } from "@/app/_utils/strapi.utils";

export default async function ProjectPage({ params }) {
  const { projet: slug } = params

  const projects = await fetchProjects();
  const project = projects.find((project) => project.slug === slug);


  return (
    <ProjectLayout
      title={project.title}
      description={project.description}
      slug={slug}
      year={project.year}
      preview={project.preview}
      technos={project.technos}
      links={project.links}
    />
  )
}

export async function generateStaticParams() {
  try {
    const projects = await fetchDataFromStrapi("projects");

    return projects.map((project) => ({
      project: project.attributes.slug,
    }));
  } catch (error) {
    console.log("Error fetching slugs for projects", error);
  }
}

export const revalidate = 300;