import { createFileRoute } from "@tanstack/react-router";
import CountdownTimer from "../components/Countdown";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <section className="gridWrapper sectionOne">
        <h1 className="heading1"><span>16th International Independent</span>Video Store Day</h1>
        <CountdownTimer />
      </section>
      <section className="gridWrapper sectionTwo">
        <div>
          <h3 className="heading3">Participating Stores</h3>
          <p>Here's a few of the stores participating in VSD 16, but this is only a sample! Click the link to see many, many more!</p>
          <a href="/stores" className="cta">Find a store near you!</a>
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
