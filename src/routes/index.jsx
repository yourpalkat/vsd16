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
        <h3 className="heading3">Featuring</h3>
        <p>Logos of and links to industry partners here</p>
        <p>Also if we're doing tie-in releases or what have you, they go here</p>
      </section>
      <section className="gridWrapper sectionThree">
        <div>
          <h3 className="heading3">Participating Stores</h3>
          <p>Here's just a few of the stores participating in VSD 16. This is only a sample! Check the <Link to="/stores">Stores page</Link> to see the full list of many, many more and find a store near you!</p>
          <StoreSample />
          <Link to="/stores" className="cta">Find a store near you!</Link>
        </div>
      </section>
    </>
  );
}
