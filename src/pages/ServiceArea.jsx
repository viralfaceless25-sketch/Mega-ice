import React from "react";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import { SITE } from "../data/site";

export default function ServiceArea() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="font-display text-5xl font-bold">Service Area</h1>
        <p className="text-white/70 mt-3">
          Delivery-only across {SITE.serviceArea}. Call to confirm coverage near you.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {["North NJ", "Central NJ", "South NJ"].map((r) => (
            <Card key={r} className="p-6">
              <div className="font-semibold">{r}</div>
              <div className="text-sm text-white/60 mt-2">
                Route + timing depends on availability — call to confirm.
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}