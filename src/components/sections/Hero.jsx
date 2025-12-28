import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { site } from "../../data/site";
import IceHeroScene from "../3d/IceHeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <IceHeroScene />
      </div>

      {/* fog overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black" />

      <Container className="relative pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Delivery Only • New Jersey • Call to Order
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.03]">
            {site.brand.name}
          </h1>

          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
            Ice and dry ice delivered fast across New Jersey. No warehouse pickup
            — on-call delivery only.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button as="a" href={site.brand.phoneHref} variant="primary">
              {site.brand.cta} • {site.brand.phoneDisplay}
            </Button>
            <Button as="a" href={site.brand.phoneHref} variant="secondary">
              Ask about Dry Ice Fog / Cold Aura
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}