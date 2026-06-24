import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { createFileRoute } from "@tanstack/react-router";
import StoreList from "../components/StoreList";

export const Route = createFileRoute("/stores")({
  component: Stores,
});

const GET_PAGE_CONTENT = gql`
  query StorePageContent {
    page(id: "cG9zdDoxMTA=") {
      title
      slug
      storePageFields {
        sectionOne {
          headingSectionOne
          introTextSectionOne
        }
        sectionTwo {
          subheadSectionTwo
          introTextSectionTwo
        }
      }
    }
    stores {
      nodes {
        id
        title
        videoStoreFields {
          storeName
          streetAddress
          city
          stateprovince
          country
          videoStoreDayParticipant
          website
          instagram
          facebook
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

function Stores() {
  const { loading, error, data } = useQuery(GET_PAGE_CONTENT);

  if (loading) {
    return <p>Loading…</p>
  };

  if (error) {
    console.log("Error fetching content: ", error.message);
    return;
  };

  const allStores = [...data?.stores?.nodes];
  const pageContent = { ...data?.page?.storePageFields };

  return (
    <>
      <section className="gridWrapper sectionOne">
        {pageContent.sectionOne.headingSectionOne && (
          <h1 className="heading2">{pageContent.sectionOne.headingSectionOne}</h1>
        )}
        {pageContent.sectionOne.introTextSectionOne && (
          <div dangerouslySetInnerHTML={{ __html: pageContent.sectionOne.introTextSectionOne }}></div>
        )}
        {allStores.length > 0 && (
          <StoreList allStores={allStores} />
        )}
      </section>
      <section className="gridWrapper sectionTwo">
        <div>
          {pageContent.sectionTwo.subheadSectionTwo && (
            <h2 className="heading3">{pageContent.sectionTwo.subheadSectionTwo}</h2>
          )}
          {pageContent.sectionTwo.introTextSectionTwo && (
            <div dangerouslySetInnerHTML={{ __html: pageContent.sectionTwo.introTextSectionTwo }}></div>
          )}
          <a href="/register" className="cta">Register your store!</a>
        </div>
      </section>
    </>
  );
}
