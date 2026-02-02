export default function Home() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";
  const logoSrc = "/rma-agentic-white.png";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* MASTHEAD (big centered logo carries the page) */}
      <header className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Big centered logo */}
          <div className="flex justify-center">
            <a href="/" className="block" aria-label="Ripley Media Agentic home">
              <img
                src={logoSrc}
                alt="Ripley Media Agentic"
                className="mx-auto h-auto w-[92%] max-w-[860px] sm:w-[88%] sm:max-w-[980px] md:w-[82%] md:max-w-[1100px]"
              />
            </a>
          </div>

          {/* Proof strip (premium, reduces stiffness) */}
          <div className="mx-auto mt-7 max-w-4xl">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center sm:flex-row sm:justify-center sm:text-left">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">Operator-led</span> CTV + programmatic GTM, partnerships, and
                packaging.
              </p>
              <div className="hidden h-5 w-px bg-white/15 sm:block" />
              <p className="text-sm text-white/80">
                Focus: <span className="font-semibold text-white">agent-ready inventory</span>, workflow friction
                removal, measurable pilots.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">CTV</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Programmatic</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Partnerships</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Packaging</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Activation</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Measurement</span>
            </div>
          </div>

          {/* Centered nav */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
            <a href="/writing" className="text-white/80 hover:text-white">
              Writing
            </a>
            <a href="/thesis" className="text-white/80 hover:text-white">
              Thesis
            </a>
            <a href="#services" className="text-white/80 hover:text-white">
              Services
            </a>
            <a href="#deliverables" className="text-white/80 hover:text-white">
              Deliverables
            </a>
            <a href="#about" className="text-white/80 hover:text-white">
              About
            </a>
            <a
              href="#contact"
              className="rounded-md bg-white px-4 py-2 font-medium text-zinc-900 hover:bg-zinc-100"
            >
              Book a call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO (story-forward, no right-column boxes) */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm">
              Agentic AI • Programmatic CTV • Partnerships
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn agentic concepts into measurable CTV growth.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-zinc-700">
              A measured path to agentic success—starting with the first rung of agentic-ready inventory, governance,
              and execution—so you’re positioned to capture the growth to come.
            </p>

            {/* Executive brief CTA (hero) */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
              >
                Book a call
              </a>

              <a
                href={executiveBriefHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Download executive brief (PDF)
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Clarity</p>
                <p className="mt-2 text-sm text-zinc-700">
                  Identify where agents create real leverage, plus the smallest measurable pilot.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Acceleration</p>
                <p className="mt-2 text-sm text-zinc-700">
                  Clean offers + metadata so partners and agents can discover and transact reliably.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Execution</p>
                <p className="mt-2 text-sm text-zinc-700">
                  A 30-day readiness sprint that doesn’t hijack the roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS TEASER */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            The CTV problem isn&apos;t AI. It&apos;s workflow friction.
          </h2>

          <p className="mt-4 max-w-4xl text-zinc-700">
            Agentic buying will route spend toward inventory that&apos;s clean, machine-readable, and easy to transact.
            The winners reduce manual steps in packaging, activation, and measurement — without massive rewrites.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Inventory readiness</p>
              <p className="mt-3 text-sm text-zinc-700">
                Make offers discoverable and executable with clear rules + consistent metadata.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Friction reduction</p>
              <p className="mt-3 text-sm text-zinc-700">
                Reduce tickets, handoffs, and rework to shorten time-to-spend.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Measurable outcomes</p>
              <p className="mt-3 text-sm text-zinc-700">
                Pilot tied to repeat spend, yield, and measurement clarity.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-sm font-semibold">The promise</p>
            <p className="mt-3 text-sm text-zinc-700">
              <span className="font-semibold">
                In 30 days, your inventory is agent-ready without consuming your product roadmap.
              </span>{" "}
              I show you what to clean up, what to standardize, and the smallest pilot that proves value.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/thesis"
              className="inline-flex rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Read the full thesis →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            Practical, operator-led work that makes your inventory and workflows ready for agentic buying.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">30-Day Agentic Readiness Sprint</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Make your inventory and offers clean, machine-readable, and executable — without hijacking the roadmap.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Readiness scorecard + “activation tax” baseline</li>
                <li>• Packaging spec + gold-standard examples</li>
                <li>• Pilot plan + KPI definitions (time-to-launch, repeat spend, yield)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">Partnership + Packaging Design</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Partner-ready offers and operating terms that reduce friction and speed adoption.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• DSP/SSP/OEM alignment</li>
                <li>• Two-way value exchange</li>
                <li>• Commercial + workflow fit</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">GTM + Enablement</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Narrative, sales tools, and weekly execution that moves dollars.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Positioning + talk tracks</li>
                <li>• One-pagers + exec decks</li>
                <li>• Weekly cadence + partner pipeline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Deliverables</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            Concrete outputs you can use internally, take to partners, and measure against revenue.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Agentic Readiness Scorecard",
                body: "A clear view of what’s clean, what’s messy, and what to fix first — tied to revenue impact.",
              },
              {
                title: "Packaging Spec + Gold Standards",
                body: "A simple packaging framework and examples that make offers machine-readable and executable.",
              },
              {
                title: "Workflow Map + Friction Kill List",
                body: "Where activation breaks today, how much it costs, and the fastest path to reduce it.",
              },
              {
                title: "Pilot Plan + KPI Dashboard",
                body: "A 30–60 day pilot with success metrics (time-to-launch, repeat spend, yield, measurement clarity).",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            Ripley Media Agentic helps CTV platforms and sellers make inventory and operating workflows “agent-ready”
            without consuming the product roadmap. The focus is pragmatic: clean offers, clear rules, consistent metadata,
            fewer handoffs, and a pilot that ties directly to measurable revenue outcomes.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

            <p className="mt-3 max-w-3xl text-zinc-700">
              If you want a measured path to agentic readiness that translates into real revenue, let’s do a short call
              and decide if there’s a fit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:kenneth@ripley.media"
                className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/kennethripley/"
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Connect on LinkedIn
              </a>

              <a
                href={executiveBriefHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Executive brief (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
          © {new Date().getFullYear()} Ripley Media Agentic
        </div>
      </footer>
    </main>
  );
}
