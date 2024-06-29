import React from 'react';
import { fetchDataFromStrapi } from "../_utils/strapi.utils";
import { BlocksManager } from "../_components";
import { PageLayout } from "../_components/layouts";
import NotFoundPage from "../404";

const SinglePage = async ({ params }) => {
  const { slug } = params;

  try {
    const pages = await fetchDataFromStrapi(`pages?filters[slug][$eq]=${slug}&populate=deep`);

    if (!pages || pages.length === 0) {
      // Return a 404 page if no page was found for the slug
      return <NotFoundPage />
    }

    const page = pages[0];
    const blocks = page.attributes.blocks || [];

    return (
      <PageLayout
        className="overflow-y-auto xl:pb-96 2xl:pb-[36rem]"
        title={page.attributes.title}
        slug={page.attributes.slug}
      >
        <BlocksManager blocks={blocks} />
      </PageLayout>
    );
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return a 500 error page if something went wrong
    return <p>Something went wrong. Please try again later.</p>;
  }
};

export default SinglePage;
