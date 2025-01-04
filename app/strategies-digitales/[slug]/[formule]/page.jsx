import React from 'react';
import { Heading, BlocksManager, Text, Footer, Subtitle, DynamicText, SectionCTA, BackToParentLink } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { fetchDataFromStrapi, fetchSEODataFormules } from "@/app/_utils/strapi.utils";
import { FormuleLayout } from "@/app/_components/layouts";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataFormules(params.formule);
  if (!seoData) return;
 
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: seoData.canonicalURL,
    },
    structuredData: seoData.structuredData,
    openGraph: {
      title: "Fiona Roux | " + seoData.metaTitle,
      description: seoData.metaDescription,
      url: seoData.canonicalURL,
      siteName: 'FionaRx',
      images: [
        {
          url: seoData.metaImage.data.attributes.url, // Must be an absolute URL
          width: seoData.metaImage.data.attributes.width,
          height: seoData.metaImage.data.attributes.height,
          alt: seoData.metaImage.data.attributes.alternativeText,
        }
      ],
      locale: 'fr_FR',
      type: 'website',
    }
  }
}

const FormulaPage = async ({ params }) => {
  const parentPath = `/strategies-digitales/${params.slug}/`;
  const globalData = await fetchDataFromStrapi("global?populate=deep");
  const { formule: slug } = params;
  let formule;

  try {
    const formules = await fetchDataFromStrapi("formules?populate=deep");
    if (formules && formules.length > 0) {
      formule = formules.find((formule) => formule?.attributes?.slug === slug);

    }
  } catch (error) {
    console.error("Error fetching formules", error);
    return <UnderConstructionPage />;
  }

  if (!formule || !formule.attributes) {
    return <UnderConstructionPage />;
  }

  const { title, vision, objectif, accroche, blocks, sectionCTA } = formule.attributes || [];
  const footer = globalData.attributes.footer;

  return (
    <>
      <FormuleLayout
        className="xl:pb-48 2xl:pb-96"
      >
        <BackToParentLink parentPath={parentPath} />
        <Text type="paragraphLarge" className="uppercase text-purple-ultraLight">
          Formule
        </Text>
        <Heading level={1} className="h1 mb-6 md:mb-10 leading-tight text-balance text-tomato">{title}</Heading>
        <Subtitle subtitle={objectif} />
        <DynamicText text={accroche} />
        <BlocksManager blocks={blocks} />
      </FormuleLayout>
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
}

export default FormulaPage;