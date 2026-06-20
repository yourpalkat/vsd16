import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="about">
      <div className="index-brand">
        <h1>Video Store Day 2026</h1>
        <p>About Us.</p>
      </div>
    </div>
  );
}
