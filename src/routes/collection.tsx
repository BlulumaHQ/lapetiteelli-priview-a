import { createFileRoute } from "@tanstack/react-router";

import { CollectionPage } from "@/components/coffee-site";

export const Route = createFileRoute("/collection")({
  component: Collection,
});

function Collection() {
  return <CollectionPage />;
}
