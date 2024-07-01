import axios from "axios";

export const BASE_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337';

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
    console.log("RESPONSE !!!!", response)
    if (response.status !== 200) {
      console.error('Error fetching response:', response.statusText);
      throw new Error('Network response was not ok');
    }
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`!!!! Could not fetch data from ${url}.`)
  }
}

export function processProjects(data) {
  const ProjectsRaw = data.attributes.projects.data;
  return ProjectsRaw.map((project) => ({
    ...project.attributes,
    imageSrc: BASE_URL + project.attributes?.image?.data?.attributes?.url,
    id: project.id,
  }));
}

export async function fetchProjects() {
  const projectsData = await fetchDataFromStrapi("projects?populate=deep");
  console.log("PROJECTS DATA : ", projectsData)
  const processedProjects = projectsData.map(processProject);

  processedProjects.sort(
    (a, z) => new Date(z.year) - new Date(a.year)
  )

  return processedProjects;
}

function processProject(project) {
  return {
    ...project.attributes,
    id: project.id,
    thumbnail: project.attributes.thumbnail.data.attributes
  }
}