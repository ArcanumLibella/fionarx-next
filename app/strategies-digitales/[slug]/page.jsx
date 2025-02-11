import React from 'react';
import Link from "next/link";
import { Heading, BlocksManager, PrestationLayout, Footer, Subtitle, SectionCTA, DynamicText } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { fetchDataFromStrapi, fetchSEODataStrategies } from "@/app/_utils/strapi.utils";
import { COLORS } from "@/app/_constants/Colors";
import { ArrowLeftIcon } from "@/public/_assets/icons";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataStrategies(params.slug);
  if (!seoData) return;

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/strategies-digitales/${params.slug}`,
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

const StrategiePage = async ({ params }) => {
  const globalData = await fetchDataFromStrapi("global?populate=deep");
  const { slug } = params;
  let strategie;

  try {
    const strategies = await fetchDataFromStrapi("strategies-digitales?populate=deep");
    if (strategies && strategies.length > 0) {
      strategie = strategies.find((strategie) => strategie?.attributes?.slug === slug);
    }
  } catch (error) {
    console.error("Error fetching strategies", error);
    return <UnderConstructionPage />;
  }

  if (!strategie || !strategie.attributes) {
    return <UnderConstructionPage />;
  }

  const { title, expertise, subtitle, accroche, blocks, sectionCTA } = strategie.attributes || [];
  const footer = globalData.attributes.footer;

  return (
    <>
      <PrestationLayout
        className="xl:pb-48 2xl:pb-64"
      >
        <Link href="/strategies-digitales" className="flex items-center mb-8">
          <ArrowLeftIcon
            fill={COLORS.white.DEFAULT}
            width={24}
            height={24}
          />
          <span className="h6 text-white font-bold uppercase hover:text-tomato transition-all ease-in-out">
            Stratégies Digitales
          </span>
        </Link>
        <Heading level={1} className="mb-4 !text-normal xs:!text-base md:!text-2base 2xl:!text-md uppercase text-purple-ultraLight">{expertise}</Heading>
        <Heading level={2} className="text-md md:text-lg lg:text-2lg 2xl:text-xl !mt-0 tracking-tighter leading-tight text-pretty text-tomato">{title}</Heading>
        <Subtitle subtitle={subtitle} />
        <DynamicText text={accroche} />
        <BlocksManager blocks={blocks} />
      </PrestationLayout>
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

export default StrategiePage;