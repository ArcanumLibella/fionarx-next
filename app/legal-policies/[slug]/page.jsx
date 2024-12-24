import React from 'react';
import { BlocksManager, Heading, PrestationLayout } from "../../_components";
import { Footer } from "../../_components/organisms";
import NotFoundPage from "../../404";
import { fetchDataFromStrapi, fetchSEODataLegals } from "../../_utils/strapi.utils";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataLegals(params.slug);
  if (!seoData) return;

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/legal-policies/${params.slug}`,
    },
  }
}

const LegalPage = async ({ params }) => {
  const globalData = await fetchDataFromStrapi("global?populate=deep");
  const { slug } = params;
  let legalPolicy;

  try {
    const legalPolicies = await fetchDataFromStrapi(`legal-policies?populate=deep`);
    if (legalPolicies && legalPolicies.length > 0) {
      legalPolicy = legalPolicies.find((legalPolicy) => legalPolicy?.attributes?.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching legal policies", error);
    return <NotFoundPage />;
  }

  if (!legalPolicy || !legalPolicy.attributes) {
    return <NotFoundPage />;
  }

  const { title, blocks } = legalPolicy.attributes || [];
  const footer = globalData.attributes.footer || null;

  return (
    <>
      <PrestationLayout
        className="xl:pb-64"
        slug={legalPolicy.attributes.slug}
      >
        <Heading level={1} className="!text-normal xs:!text-base md:!text-2base 2xl:!text-md mb-4 uppercase text-purple-ultraLight">
          Pages légales
        </Heading>
        <Heading level={2} className="text-md md:text-lg lg:text-2lg 2xl:text-xl !mt-0 tracking-tighter leading-tight text-pretty text-tomato">
          {title}
        </Heading>
        <BlocksManager blocks={blocks} />
      </PrestationLayout>
      <Footer footer={footer} />
    </>
  );
};

export default LegalPage;
