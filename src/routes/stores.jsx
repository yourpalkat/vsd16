import { createFileRoute } from "@tanstack/react-router";
import StoreList from "../components/StoreList";

export const Route = createFileRoute("/stores")({
  component: Stores,
});

function Stores() {
  return (
    <>
      <section className="gridWrapper sectionOne">
        <h1 className="heading2">Participating Video Stores</h1>
        <p>"Oh, a video store? I didn't know those still existed." You're kidding, right? WE ARE LEGION. Check out all these amazing stores who are participating in VSD this year!</p>
        <StoreList />
      </section>
      <section className="gridWrapper sectionTwo">
        <div>
          <h2 className="heading3">Join us!</h2>
          <p>Do you have a video store? Wanna participate in Video Store Day? Sure you do! Just click the link to sign up!</p>
          <a href="/register" className="cta">Register your store!</a>
        </div>
      </section>
    </>
  );
}
