import React from 'react';
import Link from "next/link";
import { Heading, BlocksManager, Text, Footer, Subtitle, DynamicText, SectionCTA } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { COLORS } from "@/app/_constants/Colors";
import { ArrowLeftIcon } from "@/public/_assets/icons";
import { fetchDataFromStrapi, fetchSEODataSolutions } from "@/app/_utils/strapi.utils";
import { SolutionLayout } from "@/app/_components/layouts";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataSolutions(params.solution);
  if (!seoData) return;
 
  return {
    title: "Consultant en Stratégie Digitale > " + seoData.metaTitle,
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

const SolutionPage = async ({ params }) => {
  const globalData = await fetchDataFromStrapi("global?populate=deep");
  const { solution: slug } = params;
  let solution;

  try {
    const solutions = await fetchDataFromStrapi("solutions?populate=deep");
    if (solutions && solutions.length > 0) {
      solution = solutions.find((solution) => solution?.attributes?.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching solutions", error);
    return <UnderConstructionPage />;
  }

  if (!solution || !solution.attributes) {
    return <UnderConstructionPage />;
  }

  const { title, objectif, accroche, blocks, sectionCTA } = solution.attributes || [];
  const footer = globalData.attributes.footer;

  return (
    <>
      <SolutionLayout
        className="xl:pb-48 2xl:pb-96"
      >
        <Link href="/solutions" className="flex items-center mb-8">
          <ArrowLeftIcon
            fill={COLORS.white.DEFAULT}
            width={24}
            height={24}
          />
          <span className="h6 font-bold text-white uppercase hover:text-tomato transition-all ease-in-out">
            Solutions
          </span>
        </Link>
        <Text type="paragraphLarge" className="uppercase text-purple-ultraLight">
          Solution
        </Text>
        <Heading level={1} className="h1 mb-6 md:mb-10 leading-tight text-balance text-tomato">{title}</Heading>
        <Subtitle subtitle={objectif} />
        <DynamicText text={accroche} />
        <BlocksManager blocks={blocks} />
      </SolutionLayout>
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

export default SolutionPage;