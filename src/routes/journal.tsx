import { createFileRoute } from "@tanstack/react-router";

import { JournalPage } from "@/components/coffee-site";

export const Route = createFileRoute("/journal")({
  component: Journal,
});

function Journal() {
  return <JournalPage />;
}