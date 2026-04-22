import { createFileRoute } from "@tanstack/react-router";

import { ShopPage } from "@/components/coffee-site";

export const Route = createFileRoute("/shop")({
  component: Shop,
});

function Shop() {
  return <ShopPage />;
}