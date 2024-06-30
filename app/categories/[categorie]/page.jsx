import React from 'react';
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import NotFoundPage from "@/app/404";


export default async function ProjectsByCategoryPage({ params }) {
  const { categorie: slug } = params
  let categorie;
  
  try {
    const categories = await fetchDataFromStrapi("categories?populate=deep");
    categorie = categories.find((categorie) => categorie.attributes.slug === slug);
  } catch (error) {
    console.error("Error fetching categories", error);
  }

  if (!categorie) {
    return <NotFoundPage />;
  }

  const { name, projects } = categorie.attributes || { name: "", projects: { data: [] } };
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
    return [];
  }
}

export const revalidate = 300;