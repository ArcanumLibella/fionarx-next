import React from 'react';
import { fetchDataFromStrapi } from "@/app/_utils/strapi.utils";
import { PageLayout, Heading, BlocksManager } from "@/app/_components";
import UnderConstructionPage from "@/app/under-construction";
import Link from "next/link";
import { ArrowLeftIcon } from "@/public/_assets/icons";
import { COLORS } from "@/app/_constants/Colors";

// TODO:
// export async function generateMetadata({ params }) {
//   const seoData = await fetchSEODataPage(params.page);
//   if (!seoData) return;
 
//   return {
//     title: seoData.metaTitle,
//     description: seoData.metaDescription,
//     keywords: seoData.keywords,
//     robots: seoData.metaRobots,
//     alternates: {
//       canonical: `/${params.page}`,
//     },
//     structuredData: seoData.structuredData
//   }
// }

export default async function PrestationPage({ params }) {
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

  const { title, blocks } = prestation.attributes || [];

  return (
    <PageLayout>
      <Link href="/prestations" className="flex items-center mb-8">
        <ArrowLeftIcon
          fill={COLORS.white.DEFAULT}
          width={24}
          height={24}
        />
        <Heading level={6} className="text-white hover:text-tomato transition-all ease-in-out">
          Prestations
        </Heading>
      </Link>
      <Heading level={3} className="mb-6 md:mb-10 text-tomato">{title}</Heading>
      <BlocksManager blocks={blocks} />
    </PageLayout>
  );
}

export async function generateStaticParams() {
  try {
    const prestations = await fetchDataFromStrapi("prestations");
    return prestations.map((prestation) => ({
      prestation: prestation.attributes.slug,
    }));
  } catch (error) {
    console.log("Error fetching slugs for prestations", error);
    return [];
  }
}

export const revalidate = 300;
