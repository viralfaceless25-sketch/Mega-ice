import React from "react";
import { Phone } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { SITE } from "../../data/site";

export default function CallCTA() {
  return (
    <section className="py-20">
      <Container>
        <Card className="p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-24 w-80 h-80 rounded-full bg-purple-400/20 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                Ready to order?
              </h3>
              <p className="text-white/70 mt-3">
                This site is built for calls. We’ll confirm everything on the phone.
              </p>
            </div>

            <a href={`tel:${SITE.phoneTel}`}>
              <Button className="gap-2 px-10 py-4 text-base">
                <Phone size={18} />
                Call {SITE.phoneDisplay}
              </Button>
            </a>
          </div>
        </Card>
      </Container>
    </section>
  );
}