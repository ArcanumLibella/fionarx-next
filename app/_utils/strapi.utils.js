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

export async function fetchSEODataPage(slug) {
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

export async function fetchSEODataSolutions(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/api/solutions?populate=deep`);
    const solutions = response.data.data;

    const seoData = solutions.find(solution => solution.attributes.slug === slug)?.attributes?.seo || null;
    return seoData;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }
}

export async function fetchSEODataStrategies(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/api/strategies-digitales?populate=deep`);
    const strategies = response.data.data;

    const seoData = strategies.find(strategie => strategie.attributes.slug === slug)?.attributes?.seo || null;
    return seoData;
  } catch (error) {
    console.error('Error fetching Strategies data:', error);
    return null;
  }
}

export async function fetchSEODataLegals(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/api/legal-policies?populate=deep`);
    const legalPolicies = response.data.data;

    const seoData = legalPolicies.find(legalPolicy => legalPolicy.attributes.slug === slug)?.attributes?.seo || null;
    return seoData;
  } catch (error) {
    console.error('Error fetching Legal Policies data:', error);
    return null;
  }
}

export async function fetchSEODataPrestations(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/api/prestations?populate=deep`);
    const prestations = response.data.data;

    const seoData = prestations.find(prestation => prestation.attributes.slug === slug)?.attributes?.seo || null;
    return seoData;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }
}


export async function fetchSEODataProject(slug) {
  try {
    const response = await axios.get(`${BASE_URL}/api/projects?populate=deep`);
    const projects = response.data.data;

    const seoData = projects.find(project => project.attributes.slug === slug)?.attributes?.seo || null;
    return seoData;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return null;
  }
}