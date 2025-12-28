import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}