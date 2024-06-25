import React from 'react';
import { ProjectsLayout } from "../_components/layouts/ProjectsLayout"
import { ProjectCard } from "../_components/organisms/ProjectCard";
import { fetchDataFromStrapi, fetchProjects } from "../_utils/strapi.utils";

const ProjectPage = async () => {
  const projects = await fetchProjects();
  const categories = await fetchDataFromStrapi("categories?populate=deep");

  return (
    <ProjectsLayout categories={categories}>
      {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            missions={project.missions}
            slug={project.slug}
            thumbnail={project.thumbnail}
          />
      ))}
    </ProjectsLayout>
  )
}

export default ProjectPage