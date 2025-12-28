import React from "react";
import { cn } from "../../lib/cn";

export default function Button({
  as = "button",
  href,
  onClick,
  children,
  className = "",
  variant = "primary",
}) {
  const Comp = as;

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/40";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/85 shadow-[0_18px_60px_rgba(59,130,246,0.35)]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10 backdrop-blur";

  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(base, styles, className)}
    >
      {children}
    </Comp>
  );
}