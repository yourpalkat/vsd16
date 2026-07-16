import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@apollo/client/react";
import { GET_HOME_PAGE_CONTENT } from "../graphql";
import CountdownTimer from "../components/Countdown";
import StoreSample from "../components/StoreSample";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  const { loading, error, data } = useQuery(GET_HOME_PAGE_CONTENT);

  if (loading) {
    return <p>Loading…</p>
  };

  if (error) {
    console.log("Error fetching content: ", error.message);
    return;
  };

  const pageContent = data?.pages?.nodes?.[0]?.homepageFields;
  const allStores = data?.stores?.nodes;

  return (
    <>
      <section className="gridWrapper sectionOne homeSplash">
        <h1 className="heading1"><span>{pageContent.surtitle}</span>{pageContent.headline}</h1>
        <h2 className="subHeading">{pageContent.date}</h2>
        <CountdownTimer />
      </section>
      {pageContent.sectionTwo.introTextSectionTwo && (
        <section className="gridWrapper sectionTwo">
          {pageContent.sectionTwo.subheadSectionTwo && (
            <h3 className="heading3">{pageContent.sectionTwo.subheadSectionTwo}</h3>
          )}
          <div dangerouslySetInnerHTML={{ __html: pageContent.sectionTwo.introTextSectionTwo }}></div>
          {pageContent.sectionTwo.ctaLink && (
            <Link to={pageContent.sectionTwo.ctaLink} className="cta">{pageContent.sectionTwo.ctaText}</Link>
          )}
        </section>
      )}
      {pageContent.sectionThree.introTextSectionThree && (
        <section className="gridWrapper sectionThree">
          <div>
            {pageContent.sectionThree.subheadSectionThree && (
              <h3 className="heading3">{pageContent.sectionThree.subheadSectionThree}</h3>
            )}
            <div dangerouslySetInnerHTML={{ __html: pageContent.sectionThree.introTextSectionThree }}></div>
            <StoreSample allStores={allStores} />
            {pageContent.sectionThree.ctaLink && (
              <Link to={pageContent.sectionThree.ctaLink} className="cta">{pageContent.sectionThree.ctaText}</Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
