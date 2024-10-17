import React from 'react';
import Link from "next/link";
import { Heading, BlocksManager, PagePrestationLayout, Introduction, Paragraph, Text, Footer } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { fetchDataFromStrapi, fetchSEODataPage } from "@/app/_utils/strapi.utils";
import { COLORS } from "@/app/_constants/Colors";
import { ArrowLeftIcon } from "@/public/_assets/icons";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataPage(params.formule);
  if (!seoData) return;
 
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/${params.formule}`,
    },
    structuredData: seoData.structuredData
  }
}

const FormulaPage = async ({ params }) => {
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

  const { title, vision, target, introduction, blocks } = formule.attributes || [];
  const footer = globalData.attributes.footer;

  return (
    <>
      <PagePrestationLayout
        className="xl:pb-48 2xl:pb-96"
      >
        <Link href="/formules" className="flex items-center mb-8">
          <ArrowLeftIcon
            fill={COLORS.white.DEFAULT}
            width={24}
            height={24}
          />
          <Heading level={6} className="text-white hover:text-tomato transition-all ease-in-out">
            Formules
          </Heading>
        </Link>
        <Text type="paragraphLarge" className="uppercase text-purple-ultraLight">
          {vision}
        </Text>
        <Heading level={1} className="mb-6 md:mb-10 text-tomato">{title}</Heading>
        <Introduction content={introduction.content} />
        <Paragraph>{target}</Paragraph>
        <BlocksManager blocks={blocks} />
      </PagePrestationLayout>
      <Footer footer={footer} />
    </>
  );
}

export default FormulaPage;