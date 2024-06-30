import React from 'react';
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { NoContent, ProjectCard, ProjectsByCategoryLayout } from "@/app/_components";
import NotFoundPage from "@/app/404";

export default async function ProjectsByMissionPage({ params }) {
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