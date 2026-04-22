import { createFileRoute } from "@tanstack/react-router";

import { OrderPage } from "@/components/coffee-site";

export const Route = createFileRoute("/order")({
  component: Order,
});

function Order() {
  return <OrderPage />;
}
