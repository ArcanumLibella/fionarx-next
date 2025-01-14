import React from 'react';
import { Heading, BlocksManager, Text, Footer, Subtitle, DynamicText, SectionCTA, BackToParentLink } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { fetchDataFromStrapi, fetchSEODataPrestations } from "@/app/_utils/strapi.utils";
import { PrestationLayout } from "@/app/_components/layouts";
import Link from "next/link";
import { ArrowLeftIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataPrestations(params.prestation);
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

const PrestationPage = async ({ params }) => {
  const globalData = await fetchDataFromStrapi("global?populate=deep");
  const { prestation: slug } = params;
  let prestation;

  try {
    const prestations = await fetchDataFromStrapi("prestations?populate=deep");
    if (prestations && prestations.length > 0) {
      prestation = prestations.find((prestation) => prestation?.attributes?.slug === slug);

    }
  } catch (error) {
    console.error("Error fetching prestations", error);
    return <UnderConstructionPage />;
  }

  if (!prestation || !prestation.attributes) {
    return <UnderConstructionPage />;
  }

  const { title, vision, objectif, accroche, blocks, sectionCTA } = prestation.attributes || [];
  const footer = globalData.attributes.footer;

  return (
    <>
      <PrestationLayout
        className="xl:pb-48 2xl:pb-96"
      >
        <Link href="/prestations" className="flex items-center mb-8">
          <ArrowLeftIcon
            fill={COLORS.white.DEFAULT}
            width={24}
            height={24}
          />
          <span className="h6 text-white font-bold uppercase hover:text-tomato transition-all ease-in-out">
            Prestations
          </span>
        </Link>
        <Text type="paragraphLarge" className="uppercase text-purple-ultraLight">
          Prestations
        </Text>
        <Heading level={1} className="h1 mb-6 md:mb-10 leading-tight text-balance text-tomato">{title}</Heading>
        <Subtitle subtitle={objectif} />
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

export default PrestationPage;