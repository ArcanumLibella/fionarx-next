import React from 'react';
import Link from "next/link";
import { Heading, BlocksManager, PagePrestationLayout, Introduction, Paragraph, Text, Footer } from "@/app/_components";
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
    structuredData: seoData.structuredData
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

  const { title, vision, target, introduction, blocks } = prestation.attributes || [];
  const footer = globalData.attributes.footer;

  return (
    <>
      <PagePrestationLayout
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
          {vision}
        </Text>
        <Heading level={1} className="h1 mb-6 md:mb-10 text-tomato">{title}</Heading>
        <Introduction content={introduction.content} />
        <Paragraph>{target}</Paragraph>
        <BlocksManager blocks={blocks} />
      </PagePrestationLayout>
      <Footer footer={footer} />
    </>
  );
}

export default PrestationPage;