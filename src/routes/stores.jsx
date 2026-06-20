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
        <p>Participating Stores.</p>
        <StoreList />
      </section>
      <section className="gridWrapper sectionTwo">
        <h2 className="heading3">Join us!</h2>
        <p>Do you have a video store? Wanna participate in Video Store Day? Sure you do!</p>
        <a href="#">CTA</a>
      </section>
    </>
  );
}
