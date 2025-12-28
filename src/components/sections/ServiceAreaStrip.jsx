import React from "react";
import { MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { SITE } from "../../data/site";

export default function ServiceAreaStrip() {
  return (
    <section id="service-area" className="py-20">
      <Container>
        <div className="flex items-end justify-between gap-6 flex-col md:flex-row">
          <div>
            <div className="text-white/60 text-sm tracking-wide">Coverage</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Serving <span className="text-cyan-200">New Jersey</span>
            </h2>
            <p className="text-white/70 mt-3 max-w-2xl">
              On-call delivery — call to confirm availability and coverage near you.
            </p>
          </div>

          <a href={`tel:${SITE.phoneTel}`}>
            <Button className="gap-2">
              <Phone size={18} />
              Call to Confirm
            </Button>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {["North NJ", "Central NJ", "South NJ"].map((r) => (
            <Card key={r} className="p-6">
              <div className="flex items-center gap-2">
                <MapPin className="text-blue-200" />
                <div className="font-semibold">{r}</div>
              </div>
              <div className="text-sm text-white/60 mt-2">
                Call for order + route timing.
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}