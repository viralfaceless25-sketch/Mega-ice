import React from "react";
import PageShell from "../components/layout/PageShell";
import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustBar />

      {/* Placeholder blocks you’ll replace later */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-10">
          <div className="text-2xl font-bold">Products & Sizes</div>
          <div className="text-white/60 mt-3">
            Placeholder only (per your instruction). We’ll fill real sizes and
            pricing later.
          </div>
        </div>
      </section>
    </PageShell>
  );
}