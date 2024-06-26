import React from 'react';
import { fetchDataFromStrapi, fetchProjects } from "@/app/_utils/strapi.utils";
import { ProjectsByCategoryLayout } from "@/app/_components/layouts/ProjectsByCategoryLayout";
import { ProjectCard } from "@/app/_components/organisms/ProjectCard";
import { NoContent } from "@/app/_components/molecules/NoContent";

export default async function ProjectsByCategoryPage({ params }) {
  const { categorie: slug } = params
  
  const categories = await fetchDataFromStrapi("categories?populate=deep");
  const categorie = categories.find((categorie) => categorie.attributes.slug === slug);
  const {name, projects} = categorie.attributes;
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
            missions={project.attributes.missions}
            slug={project.attributes.slug}
            thumbnail={project.attributes.thumbnail.data.attributes}
          />
        ))
      )}
    </ProjectsByCategoryLayout>
  )
}

export async function generateStaticParams() {
  try {
    const categories = await fetchDataFromStrapi("categories");

    return categories.map((categorie) => ({
      categorie: categorie.attributes.slug,
    }));
  } catch (error) {
    console.log("Error fetching slugs for categories", error);
  }
}

export const revalidate = 300;