import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { site } from "../../data/site";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      <Container className="relative pointer-events-auto">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-400/80 to-purple-500/80" />
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm">
                {site.brand.name}
              </div>
              <div className="text-white/60 text-xs">{site.brand.cta}</div>
            </div>
          </div>

          <Button as="a" href={site.brand.phoneHref} variant="primary">
            {site.brand.phoneDisplay}
          </Button>
        </div>
      </Container>
    </header>
  );
}