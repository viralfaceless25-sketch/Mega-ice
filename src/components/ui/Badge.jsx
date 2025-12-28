import React from "react";
import { cn } from "../../lib/cn";

export default function Badge({ className = "", children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.2em] uppercase text-white/80",
        className
      )}
    >
      {children}
    </span>
  );
}