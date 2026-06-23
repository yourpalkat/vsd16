import { createFileRoute, Link } from "@tanstack/react-router";
import CountdownTimer from "../components/Countdown";
import StoreSample from "../components/StoreSample";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="gridWrapper sectionOne homeSplash">
        <h1 className="heading1"><span>16th International Independent</span>Video Store Day</h1>
        <h2 className="subHeading">October 17, 2026</h2>
        <CountdownTimer />
      </section>
      <section className="gridWrapper sectionTwo">
        <div>
          <h3 className="heading3">Participating Stores</h3>
          <p>Here's a few of the stores participating in VSD 16, but this is only a sample! Check the <Link to="/stores">Stores page</Link> to see many, many more!</p>
          <StoreSample />
          <Link to="/stores" className="cta">Find a store near you!</Link>
        </div>
      </section>
      <section className="gridWrapper sectionThree">
        <h3 className="heading3">Featuring</h3>
        <p>Logos of and links to industry partners here</p>
        <p>Also if we're doing tie-in releases or exclusives or what have you, they go here</p>
      </section>
    </>
  );
}
