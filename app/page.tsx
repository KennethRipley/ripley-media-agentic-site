export default function Home() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf"; // Put the PDF in /public with this exact filename

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">Ripley Media Agentic</div>

          <nav className="flex items-center gap-3">
            <a href="/writing" className="text-sm text-zinc-700 hover:text-zinc-900">
              Writing
            </a>
            <a href="/thesis" className="text-sm text-zinc-700 hover:text-zinc-900">
              Thesis
            </a>
            <a href="#services" className="text-sm text-zinc-700 hover:text-zinc-900">
              Services
            </a>
            <a href="#deliverables" className="text-sm text-zinc-700 hover:text-zinc-900">
              Deliverables
            </a>
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a conversation
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            Agentic AI • Programmatic CTV • Partnerships
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Make your CTV inventory agent-ready in 30 days.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            Packaging + workflow cleanup that reduces the activation tax and unlocks incremental
            demand — without consuming your product roadmap.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a conversation
            </a>
            <a
              href="/writing"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Read my writing
            </a>
            <a
              href={executiveBriefHref}
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Download executive brief (PDF)
            </a>
          </div>

          {/* Proof strip */}
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold">Proof, not theory</p>
            <p className="mt-2 text-sm text-zinc-700">
              Operator-led GTM + partnerships across CTV/programmatic (seller + platform + partner).
              I specialize in inventory packaging readiness and workflow friction removal — so you’re
              agent-ready in 30 days without consuming the roadmap.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Clarity</p>
              <p className="mt-2 text-sm text-zinc-700">
                Identify where agents create real leverage and what to measure.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Acceleration</p>
              <p className="mt-2 text-sm text-zinc-700">
                Clean packages + workflows that reduce the integration/activation tax.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Execution</p>
              <p className="mt-2 text-sm text-zinc-700">
                A 30-day plan to become agentic-ready without eating the roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis (shortened on-page; full story lives at /thesis) */}
      <section id="thesis" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            The CTV problem isn’t AI. It’s workflow friction.
          </h2>

          <p className="mt-4 max-w-4xl text-zinc-700">
            Agentic buying will route spend toward inventory that’s clean, machine-readable, and easy
            to transact. The winners reduce manual steps in packaging, activation, and measurement —
            without massive rewrites.
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
                Build a pilot tied to repeat spend, yield, and measurement clarity.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-sm font-semibold">The promise</p>
            <p className="mt-3 text-sm text-zinc-700">
              <span className="font-semibold">
                In 30 days, your inventory is agent-ready — without consuming your product roadmap.
              </span>{" "}
              I show you what to clean up, what to standardize, and the smallest pilot that proves
              value.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/thesis"
              className="inline-flex rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Read the full thesis →
            </a>
            <a
              href={executiveBriefHref}
              className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Download executive brief (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">How I help</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            A practical operator’s approach: inventory + packaging readiness, partner workflows, and a
            pilot path that drives revenue outcomes.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">30-Day Agentic Readiness Sprint</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Make your inventory and offers clean, machine-readable, and executable — without
                hijacking the roadmap.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Offer + metadata cleanup plan</li>
                <li>• Packaging spec + “gold standard” examples</li>
                <li>• Pilot recommendation with success metrics</li>
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
              <ul className="mt-4 space-y-2 text-sm text-z
