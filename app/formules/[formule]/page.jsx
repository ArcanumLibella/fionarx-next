import React from 'react';
import Link from "next/link";
import { Heading, BlocksManager, Paragraph, Text, Footer, Subtitle } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { COLORS } from "@/app/_constants/Colors";
import { ArrowLeftIcon } from "@/public/_assets/icons";
import { fetchDataFromStrapi, fetchSEODataFormules } from "@/app/_utils/strapi.utils";
import { PageFormuleLayout } from "@/app/_components/layouts";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataFormules(params.formule);
  if (!seoData) return;
 
  return {
    title: "| Formules > " + seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/formules/${params.formule}`,
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
      <PageFormuleLayout
        className="xl:pb-48 2xl:pb-96"
      >
        <Link href="/formules" className="flex items-center mb-8">
          <ArrowLeftIcon
            fill={COLORS.white.DEFAULT}
            width={24}
            height={24}
          />
          <span className="h6 font-bold text-white uppercase hover:text-tomato transition-all ease-in-out">
            Formules
          </span>
        </Link>
        <Text type="paragraphLarge" className="uppercase text-purple-ultraLight">
          {vision}
        </Text>
        <Heading level={1} className="h1 mb-6 md:mb-10 text-tomato">{title}</Heading>
        <Subtitle subtitle={introduction.content} />
        <Paragraph>{target}</Paragraph>
        <BlocksManager blocks={blocks} />
      </PageFormuleLayout>
      <Footer footer={footer} />
    </>
  );
}

export default FormulaPage;