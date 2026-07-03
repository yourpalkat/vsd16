import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@apollo/client/react";
import { GET_ABOUT_PAGE_CONTENT } from "../graphql";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
    const { loading, error, data } = useQuery(GET_ABOUT_PAGE_CONTENT);
  
    if (loading) {
      return <p>Loading…</p>
    };
  
    if (error) {
      console.log("Error fetching content: ", error.message);
      return;
    };
  
  const pageContent = data?.page?.aboutPageFields;

  return (
    <>
      {pageContent.sectionOne.contentSectionOne && (
        <section className="gridWrapper sectionOne">
          {pageContent.sectionOne.subheadSectionOne && (
            <h1 className="heading2">{pageContent.sectionOne.subheadSectionOne}</h1>
          )}
          <div dangerouslySetInnerHTML={{ __html: pageContent.sectionOne.contentSectionOne }}></div>
        </section>
      )}
      <section className="gridWrapper sectionTwo">
        <div>
          {pageContent.sectionTwo.subheadSectionTwo && (
            <h2 className="heading3">{pageContent.sectionTwo.subheadSectionTwo}</h2>
          )}
          <ul className="aboutList">
            {pageContent.sectionTwo.nameOne && (
              <li>
                <img src={pageContent.sectionTwo.headshotOne.node.sourceUrl} alt={pageContent.sectionTwo.headshotOne.node.altText ? pageContent.sectionTwo.headshotOne.node.altText : pageContent.sectionTwo.nameOne} />
                <div>
                  <h3 className="heading5">{pageContent.sectionTwo.nameOne}</h3>
                  {pageContent.sectionTwo.bioOne && (<p>{pageContent.sectionTwo.bioOne}</p>)}
                </div>
              </li>
            )}
            {pageContent.sectionTwo.nameTwo && (
              <li>
                <img src={pageContent.sectionTwo.headshotTwo.node.sourceUrl} alt={pageContent.sectionTwo.headshotTwo.node.altText ? pageContent.sectionTwo.headshotTwo.node.altText : pageContent.sectionTwo.nameTwo} />
                <div>
                  <h3 className="heading5">{pageContent.sectionTwo.nameTwo}</h3>
                  {pageContent.sectionTwo.bioTwo && (<p>{pageContent.sectionTwo.bioTwo}</p>)}
                </div>
              </li>
            )}
            {pageContent.sectionTwo.nameThree && (
              <li>
                <img src={pageContent.sectionTwo.headshotThree.node.sourceUrl} alt={pageContent.sectionTwo.headshotThree.node.altText ? pageContent.sectionTwo.headshotThree.node.altText : pageContent.sectionTwo.nameThree} />
                <div>
                  <h3 className="heading5">{pageContent.sectionTwo.nameThree}</h3>
                  {pageContent.sectionTwo.bioThree && (<p>{pageContent.sectionTwo.bioThree}</p>)}
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>
      {pageContent.sectionThree.contentSectionThree && (
        <section className="gridWrapper sectionThree">
          <h2 className="heading3">{pageContent.sectionThree.subheadSectionThree}</h2>
          <div dangerouslySetInnerHTML={{ __html: pageContent.sectionThree.contentSectionThree }}></div>
        </section>
      )}
    </>
  );
}
