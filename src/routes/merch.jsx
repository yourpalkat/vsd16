import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@apollo/client/react";
import { GET_ALL_PRODUCTS } from "../graphql";

export const Route = createFileRoute("/merch")({
  component: MerchPage,
});

function MerchPage() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) {
    return <p>Loading…</p>
  };

  if (error) {
    console.log("Error fetching content: ", error.message);
    return;
  };

  console.log("PRODUCTS: ", data);

  return (
    <>
      <section className="gridWrapper sectionOne">
        <h1 className="heading2">VSD Merch!</h1>
        <p>Stickers? Shirts? Something? Coming soon.</p>
      </section>
    </>
  );
}
