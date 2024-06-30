import React from 'react';
import { ProjectCard, ProjectsLayout } from "../_components";
import { fetchDataFromStrapi, fetchProjects } from "../_utils/strapi.utils";

const ProjectPage = async () => {
  let projects = [];
  let categories = [];

  try {
    projects = await fetchProjects();
    console.log("Projects fetched:", projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  try {
    const categoriesResponse = await fetchDataFromStrapi("categories?populate=deep");
    categories = categoriesResponse || [];
    console.log("Categories fetched:", categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  // Vérifiez si les projets sont vides
  if (!projects || projects.length === 0) {
    return <div>No projects found</div>;
  }

  // Vérifiez si les catégories sont vides
  if (!categories || categories.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <ProjectsLayout categories={categories}>
      {projects && projects.map((project) => {
        console.log("PROJECTS !!!!! : ", projects)
        console.log("PROJECT !!!!! : ", project)
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
