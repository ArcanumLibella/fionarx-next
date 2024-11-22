import React from 'react';
import Link from "next/link";
import { Heading, BlocksManager, PagePrestationLayout, Introduction, Footer, Subtitle, SectionCTA } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { fetchDataFromStrapi, fetchSEODataPrestations } from "@/app/_utils/strapi.utils";
import { COLORS } from "@/app/_constants/Colors";
import { ArrowLeftIcon } from "@/public/_assets/icons";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataPrestations(params.prestation);
  if (!seoData) return;

  return {
    title: "| Prestations > " + seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/prestations/${params.prestation}`,
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

  const { title, expertise, subtitle, introduction, blocks, sectionCTA } = prestation.attributes || [];
  const footer = globalData.attributes.footer;

  return (
    <>
      <PagePrestationLayout
        className="xl:pb-48 2xl:pb-64"
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
        <Heading level={1} className="!text-normal xs:!text-base md:!text-2base 2xl:!text-md mb-4 uppercase text-purple-ultraLight">
          {expertise}
        </Heading>
        <Heading level={2} className="text-md md:text-lg lg:text-2lg 2xl:text-xl !mt-0 tracking-tighter leading-tight text-pretty text-tomato">
          {title}
        </Heading>
        <Subtitle subtitle={subtitle} />
        <Introduction introduction={introduction} />
        <BlocksManager blocks={blocks} />
      </PagePrestationLayout>
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