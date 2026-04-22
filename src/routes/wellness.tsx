import { createFileRoute } from "@tanstack/react-router";

import { WellnessPage } from "@/components/coffee-site";

export const Route = createFileRoute("/wellness")({
  component: Wellness,
});

function Wellness() {
  return <WellnessPage />;
}
