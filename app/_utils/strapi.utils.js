import axios from "axios";

export const BASE_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337';

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
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
    thumbnail: project.attributes.thumbnail?.data?.attributes || null
  }
}

export async function fetchSEOData(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/api/pages?populate=deep`);
    const pages = response.data.data;

    const seoData = pages.find(page => page.attributes.slug === slug)?.attributes?.seo || null;
    return seoData;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }
}