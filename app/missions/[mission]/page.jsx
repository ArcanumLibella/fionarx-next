import React from 'react';
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import NotFoundPage from "@/app/404";

export default async function ProjectsByMissionPage({ params }) {
  const { mission: slug } = params;
  let mission;
  
  try {
    const missions = await fetchDataFromStrapi("missions?populate=deep");
    mission = missions.find((mission) => mission.attributes.slug === slug);
  } catch (error) {
    console.error("Error fetching missions", error);
  }

  if (!mission) {
    return <NotFoundPage />;
  }
  
  const { name, projects } = mission.attributes || { name: "", projects: { data: [] } };
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
            thumbnail={project.attributes.thumbnail.data.attributes}
          />
        ))
      )}
    </ProjectsByCategoryLayout>
  )
}

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