import { BlocksManager, Footer, Hero, MainLayout, SectionCTA, Subtitle } from "./_components";
import { fetchDataFromStrapi } from "./_utils/strapi.utils";

const Home = async () => {
  const data = await fetchDataFromStrapi("global?populate=deep");
  const introduction = data.attributes.introduction || null;
  const blocks = data.attributes.blocks || [];
  const sectionCTA = data.attributes.sectionCTA || null;
  const footer = data.attributes.footer || null;

  return (
    <MainLayout>
      <Hero />
      <div className="HomeContent relative xl:-right-1/3 3xl:-right-2/5 max-w-800 lg:max-w-5xl xl:max-w-800 2xl:max-w-5xl px-4 md:px-8 xl:px-0 mt-24 mb-12 md:mb-0 md:ml-20 xl:ml-0">
        <Subtitle subtitle={introduction.content} />
        <BlocksManager blocks={blocks} />
      </div>
      {sectionCTA && (
        <SectionCTA
          key={`SectionCTA-${sectionCTA.id}`}
          title={sectionCTA.title}
          subtitle={sectionCTA.subtitle}
          button={sectionCTA.button}
          className="relative md:-bottom-20 xl:-bottom-36 2xl:-bottom-64 py-16 md:py-24 md:ml-20"
        />
      )}
      <Footer footer={footer} />
    </MainLayout>
  );
}

export default Home;