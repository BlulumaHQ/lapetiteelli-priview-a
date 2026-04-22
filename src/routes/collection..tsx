import { createFileRoute } from "@tanstack/react-router";

import { CoffeeDetailPage } from "@/components/coffee-site";

export const Route = createFileRoute("/collection/")({
  component: CoffeeDetail,
});

function CoffeeDetail() {
  const { slug } = Route.useParams();
  return <CoffeeDetailPage slug={slug} />;
}
