import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/merch")({
  component: MerchPage,
});

function MerchPage() {
  return (
    <>
      <section className="gridWrapper sectionOne">
        <h1 className="heading2">VSD Merch!</h1>
        <p>Stickers? Shirts? Something? Coming soon.</p>
      </section>
    </>
  );
}
