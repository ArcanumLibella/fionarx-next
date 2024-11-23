import React from 'react';
import { BlocksManager, PageLayout } from "../_components";
import { Footer, SectionCTA } from "../_components/organisms";
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
    structuredData: seoData.structuredData,
    openGraph: {
      title: "Fiona Roux - Consultante en Stratégie Digitale freelance",
      description: "Une seule collaboratrice pour une Stratégie Digitale 360 : audit digital, SEO et référencement local, branding, web design et création de site internet.",
      url: seoData.canonicalURL,
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
}

const SinglePage = async ({ params }) => {
  const globalData = await fetchDataFromStrapi("global?populate=deep");
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
  const sectionCTA = page.attributes.sectionCTA || null;
  const footer = globalData.attributes.footer || null;

  return (
    <>
      <PageLayout
        className="xl:pb-64"
        title={page.attributes.title}
        introduction={page.attributes.introduction}
        slug={page.attributes.slug}
      >
        <BlocksManager blocks={blocks} />
      </PageLayout>
      {sectionCTA && (
        <SectionCTA
          key={`SectionCTA-${sectionCTA.id}`}
          title={sectionCTA.title}
          subtitle={sectionCTA.subtitle}
          button={sectionCTA.button}
          className="relative md:-bottom-20 xl:-bottom-36 2xl:-bottom-64 md:ml-24 pb-24 md:pb-48"
        />
      )}
      <Footer footer={footer} />
    </>
  );
};

export default SinglePage;
