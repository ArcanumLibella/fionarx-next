import React from 'react';
import { BlocksManager, PageLayout } from "../_components";
import { Footer } from "../_components/organisms/Footer";
import NotFoundPage from "../404";
import { fetchDataFromStrapi, fetchSEODataPage } from "../_utils/strapi.utils";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataPage(params.page);
  if (!seoData) return;
 
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/${params.page}`,
    },
    structuredData: seoData.structuredData
  }
}

const SinglePage = async ({ params }) => {
  const { page: slug } = params;
  let page;

  try {
    const pages = await fetchDataFromStrapi(`pages?filters[slug][$eq]=${slug}&populate=deep`);
    if (pages && pages.length > 0) {
      page = pages.find((page) => page?.attributes?.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching pages", error);
    return <NotFoundPage />;
  }

  if (!page || !page.attributes) {
    return <NotFoundPage />;
  }

  const blocks = page.attributes.blocks || [];
  const footer = page.attributes.footer || null;

  return (
    <>
      <PageLayout
        className="xl:pb-48"
        title={page.attributes.title}
        introduction={page.attributes.introduction}
        slug={page.attributes.slug}
      >
        <BlocksManager blocks={blocks} />
      </PageLayout>
      {footer && (
        <Footer key={`Footer-${footer.id}`} content={footer.content} button={footer.button} />
      )}
    </>
  );
};

export default SinglePage;
