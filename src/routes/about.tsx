import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/coffee-site";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <AboutPage />;
}
