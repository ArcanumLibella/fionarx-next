import React from 'react';
import { BlocksManager, PageLayout } from "../../_components";
import { Footer } from "../../_components/organisms";
import NotFoundPage from "../../404";
import { fetchDataFromStrapi } from "../../_utils/strapi.utils";

const LegalPage = async ({ params }) => {
  const globalData = await fetchDataFromStrapi("global?populate=deep");
  const { slug } = params;
  let legalPolicy;

  try {
    const legalPolicies = await fetchDataFromStrapi(`legal-policies?populate=deep`);
    if (legalPolicies && legalPolicies.length > 0) {
      legalPolicy = legalPolicies.find((legalPolicy) => legalPolicy?.attributes?.slug === slug);
      console.log("legalPolicy !!!!! ", legalPolicy)
    }
  } catch (error) {
    console.error("Error fetching legal policies", error);
    return <NotFoundPage />;
  }

  if (!legalPolicy || !legalPolicy.attributes) {
    return <NotFoundPage />;
  }

  const { title, blocks } = legalPolicy.attributes || [];
  const footer = globalData.attributes.footer || null;

  return (
    <>
      <PageLayout
        className="xl:pb-64"
        title={title}
        introduction={title}
        slug={legalPolicy.attributes.slug}
      >
        <BlocksManager blocks={blocks} />
      </PageLayout>
      <Footer footer={footer} />
    </>
  );
};

export default LegalPage;
