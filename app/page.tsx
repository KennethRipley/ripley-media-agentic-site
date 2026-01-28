"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";
  const logoSrc = "/rma-agentic-white.png";

  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyNav(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Writing", href: "/writing" },
    { label: "Thesis", href: "/thesis" },
    { label: "Services", href: "#services" },
    { label: "Deliverables", href: "#deliverables" },
    { label: "About", href: "#about" },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div
        className={[
          "fixed left-0 top-0 z-50 w-full border-b border-zinc-200/60 bg-white/90 backdrop-blur transition-all duration-200",
          showStickyNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="w-28" />
            <a href="/" className="flex items-center justify-center">
              <Image
                src={logoSrc}
                alt="Ripley Media Agentic"
                width={900}
                height={220}
                priority
                className="h-14 w-auto sm:h-16"
              />
            </a>
            <div className="w-28 flex justify-end">
              <a
                href="#call"
                className="hidden rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900 sm:inline-flex"
              >
                Book a call
              </a>
            </div>
          </div>

          <nav className="mt-3 hidden items-center justify-center gap-7 text-sm text-zinc-700 sm:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-zinc-950">
                {item.label}
              </a>
            ))}
            <a href={executiveBriefHref} className="hover:text-zinc-950">
              Executive brief
            </a>
          </nav>
        </div>
      </div>

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center text-center">
            <a href="/" className="flex items-center justify-center">
              <Image
                src={logoSrc}
                alt="Ripley Media Agentic"
                width={1200}
                height={300}
                priority
                className="h-44 w-auto sm:h-56 md:h-64 lg:h-72"
              />
            </a>

            <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-700">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-zinc-950">
                  {item.label}
                </a>
              ))}
              <a
                href="#call"
                className="rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-900"
              >
                Book a call
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700">
            Agentic AI • Programmatic CTV • Partnerships
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Turn agentic concepts into measurable CTV growth.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            A measured path to agentic success—starting with the first rung of agentic-ready inventory, governance, and execution—so you’re positioned to capture the growth to come.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3" id="call">
            <a
              href="#contact"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-900"
            >
              Book a call
            </a>
            <a
              href={executiveBriefHref}
              className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Download executive brief (PDF)
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold">Services</h2>
        </div>
      </section>

      <section id="deliverables" className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold">Deliverables</h2>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold">About</h2>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} Ripley Media Agentic
      </footer>
    </main>
  );
}
