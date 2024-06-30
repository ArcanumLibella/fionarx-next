import React from 'react';
import { ProjectCard, ProjectsLayout } from "../_components";
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
            slug={project.slug}
            thumbnail={project.thumbnail}
            missions={project.missions}
          />
      ))}
    </ProjectsLayout>
  )
}

export default ProjectPage