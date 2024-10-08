import { ProjectCard, ProjectsLayout } from "../_components";
import { fetchDataFromStrapi, fetchProjects } from "../_utils/strapi.utils";

export const metadata = {
  title: 'Projets',
  description: "Voici une liste de quelques projets que j'ai réalisé ces dernières années.",
  keywords: ['Indépendant', 'Freelance', 'Design', 'Développement Web', 'WebDesign', 'Branding', 'WebMarketing', 'SEO', 'SEA', 'Social Media', 'Tunnel de vente', 'Site vitrine'],
  alternates: {
    canonical: '/projets',
  },
  openGraph: {
    title: 'Fiona Roux',
    description: 'Consultante en Stratégie Digitale dans le Sud de la France',
    url: 'https://www.fionarx.com',
    siteName: 'FionaRx',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ArcanumLibella/fionarx-next/main/public/_assets/images/OPENGRAPH-800x600.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'OpenGraph - 800 x 600',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  }
}

const ProjectPage = async () => {
  let projects = [];
  let categories = [];

  try {
    projects = await fetchProjects();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  try {
    categories = await fetchDataFromStrapi("categories?populate=deep");
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  if (!projects || projects.length === 0) {
    return <div>No projects found</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>No categories found</div>;
  }

  return (
    <ProjectsLayout categories={categories}>
      {projects.map((project) => {
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