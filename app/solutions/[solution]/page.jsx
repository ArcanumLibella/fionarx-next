import React from 'react';
import Link from "next/link";
import { Heading, BlocksManager, Paragraph, Text, Footer, Subtitle } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import { COLORS } from "@/app/_constants/Colors";
import { ArrowLeftIcon } from "@/public/_assets/icons";
import { fetchDataFromStrapi, fetchSEODataSolutions } from "@/app/_utils/strapi.utils";
import { SolutionLayout } from "@/app/_components/layouts";

export async function generateMetadata({ params }) {
  const seoData = await fetchSEODataSolutions(params.solution);
  if (!seoData) return;
 
  return {
    title: "| Solutions > " + seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: seoData.keywords,
    robots: seoData.metaRobots,
    alternates: {
      canonical: `/solutions/${params.solution}`,
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
  console.log("params", params)
  console.log("slug", slug)
  let solution;
  console.log("solution", solution)

  try {
    const solutions = await fetchDataFromStrapi("solutions?populate=deep");
    console.log("solutions !!!!!", solutions)
    if (solutions && solutions.length > 0) {
      solution = solutions.find((solution) => solution?.attributes?.slug === slug);
      console.log("SLUG ????", slug)
      console.log("SOLUTION ????", solution)

    }
  } catch (error) {
    console.log("PROUUUT")
    console.error("Error fetching solutions", error);
    return <UnderConstructionPage />;
  }

  if (!solution || !solution.attributes) {
    console.log("POUET !")
    return <UnderConstructionPage />;
  }

  const { title, vision, target, introduction, blocks } = solution.attributes || [];
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
          {vision}
        </Text>
        <Heading level={1} className="h1 mb-6 md:mb-10 text-tomato">{title}</Heading>
        <Subtitle subtitle={introduction.content} />
        <Paragraph>{target}</Paragraph>
        <BlocksManager blocks={blocks} />
      </SolutionLayout>
      <Footer footer={footer} />
    </>
  );
}

export default SolutionPage;