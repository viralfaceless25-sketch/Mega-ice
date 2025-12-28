import React from "react";
import Container from "../ui/Container";
import { site } from "../../data/site";

export default function TrustBar() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {site.differentiators.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="text-white font-semibold">{d.title}</div>
              <div className="text-white/60 text-sm mt-2">{d.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}