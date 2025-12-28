import React from "react";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import { SITE } from "../data/site";

export default function Products() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="font-display text-5xl font-bold">Products</h1>
        <p className="text-white/70 mt-3">
          Call to order — we confirm size, quantity, price, and delivery window.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE.products.map((p) => (
            <Card key={p.name} className="p-7">
              <div className="font-semibold text-xl">{p.name}</div>
              <div className="text-sm text-white/60 mt-2">Size: {p.size}</div>
              <div className="text-sm text-white/60 mt-2">{p.notes}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}