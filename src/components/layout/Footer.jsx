import React from "react";
import Container from "../ui/Container";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="text-white font-semibold">{site.brand.name}</div>
            <div className="text-white/60 text-sm">
              Delivery only • New Jersey
            </div>
          </div>
          <a
            href={site.brand.phoneHref}
            className="text-white/80 hover:text-white transition"
          >
            Call: {site.brand.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}