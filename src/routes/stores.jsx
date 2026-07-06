import { useQuery } from "@apollo/client/react";
import { createFileRoute } from "@tanstack/react-router";
import StoreList from "../components/StoreList";
import { GET_STORE_PAGE_CONTENT } from "../graphql";

export const Route = createFileRoute("/stores")({
  component: Stores,
});

function Stores() {
  const { loading, error, data } = useQuery(GET_STORE_PAGE_CONTENT);

  if (loading) {
    return <p>Loading…</p>
  };

  if (error) {
    console.log("Error fetching content: ", error.message);
    return;
  };

  const allStores = [...data?.stores?.nodes];
  const pageContent = { ...data?.pages?.nodes[0]?.storePageFields };

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
