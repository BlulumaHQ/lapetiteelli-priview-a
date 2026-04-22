import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/coffee-site";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <HomePage />;
}
