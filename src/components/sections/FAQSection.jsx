import React, { useState } from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "Do you have a storefront or pickup location?",
    a: "No. We are delivery-only. Place an order by phone and we deliver to you.",
  },
  {
    q: "How do I place an order?",
    a: "Call us. We confirm availability, pricing, and delivery window on the phone.",
  },
  {
    q: "Do you deliver across New Jersey?",
    a: "Yes. Coverage depends on route and time—call to confirm.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 border-t border-white/10 bg-black/10">
      <Container>
        <h2 className="font-display text-4xl md:text-5xl font-bold">FAQ</h2>
        <p className="text-white/60 mt-3 max-w-2xl">
          Quick answers — for everything else, call us.
        </p>

        <div className="mt-10 space-y-4">
          {items.map((it, i) => (
            <Card key={it.q} className="p-6">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="font-semibold">{it.q}</div>
                <ChevronDown
                  className={`transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="mt-4 text-white/70 text-sm leading-relaxed">
                  {it.a}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}