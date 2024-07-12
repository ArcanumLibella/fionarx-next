import React from 'react';
import { ProjectLayout } from "@/app/_components";
import { fetchDataFromStrapi, fetchProjects, fetchSEODataProject } from "@/app/_utils/strapi.utils";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataProject(params.projet);
  if (!seoData) return;
 
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/projets/${params.projet}`,
    },
    structuredData: seoData.structuredData
  }
}

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