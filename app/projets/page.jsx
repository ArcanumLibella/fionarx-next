import React from 'react';
import { ProjectCard, ProjectsLayout } from "../_components";
import { fetchDataFromStrapi, fetchProjects } from "../_utils/strapi.utils";

const ProjectPage = async () => {
  let projects = [];
  let categories = [];

  try {
    projects = await fetchProjects();
    console.log("projects !!! : ", projects)
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  try {
    categories = await fetchDataFromStrapi("categories?populate=deep");
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  console.log("PROJECTS ????? : ", projects)

  if (!projects || projects.length === 0) {
    return <div>No projects found</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <ProjectsLayout categories={categories}>
      {projects && projects.map((project) => {
        const { title, slug, thumbnail, missions } = project || {};
        
        return (
          <ProjectCard
            key={slug}
            title={title}
            slug={slug}
            thumbnail={thumbnail}
            missions={missions}
          />
        );
      })}
    </ProjectsLayout>
  );
}

export default ProjectPage;
