import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <>
      <section className="gridWrapper sectionOne">
        <h1 className="heading2">Register Your Store</h1>
        <p>Participating Stores.</p>
      </section>
      <section className="gridWrapper sectionTwo">
        <div>
          <h2 className="heading3">Registration Form</h2>
          <p>The thing you have to do to register a store and send money will go here</p>
        </div>
      </section>
    </>
  );
}
