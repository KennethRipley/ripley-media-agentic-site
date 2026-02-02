// app/thesis/page.tsx

export default function ThesisPage() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top nav (simple + clean) */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-700">
            Ripley Media Agentic
          </a>

          <nav className="flex items-center gap-4">
            <a href="/writing" className="text-sm text-zinc-700 hover:text-zinc-900">
              Writing
            </a>
            <a href="/thesis" className="text-sm font-semibold text-zinc-900">
              Thesis
            </a>
            <a href="/#services" className="text-sm text-zinc-700 hover:text-zinc-900">
              Services
            </a>
            <a href="/#deliverables" className="text-sm text-zinc-700 hover:text-zinc-900">
              Deliverables
            </a>
            <a
              href="/#contact"
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a call
            </a>
          </nav>
        </div>
      </header>

      {/* Page header */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
          Thesis • Agentic AI • Programmatic CTV
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">The Thesis</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700">
          Agentic buying/selling will not win on cool prototypes. It will win in production—where execution is easiest.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/"
            className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Back to home
          </a>
          <a
            href="/writing"
            className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Read my writing
          </a>
          <a
            href={executiveBriefHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Download executive brief (PDF)
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="max-w-4xl space-y-10">
          {/* Why now */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Why now</h2>
            <p className="mt-4 text-zinc-700">
              Today, CTV revenue is trapped in workflow friction: packaging, deal setup, creative QA, measurement
              mapping, supply-path complexity, and troubleshooting. As agents emerge, spend will route to platforms and
              sellers who make execution feel like checkout: simple, auditable, repeatable.
            </p>
          </div>

          {/* What changed */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">What changed</h2>
            <p className="mt-4 text-zinc-700">
              What changed (and raises urgency): the agentic “execution layer” is moving from concept to real reference
              implementations + standards extensions—including Prebid taking stewardship of AdCP-based seller-agent code
              (the “Prebid Sales Agent”), and IAB Tech Lab publishing an agentic roadmap that emphasizes interoperable,
              governed execution.
            </p>
          </div>

          {/* The problem */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">The problem</h2>
            <p className="mt-4 text-zinc-700">
              Most organizations are not “agentic-ready” because inventory and offers are not consistently
              machine-executable, and workflow paths aren’t reliably repeatable end-to-end.
            </p>
            <p className="mt-4 text-zinc-700">
              This creates an activation/integration tax that slows time-to-spend, reduces repeat spend, and strands
              revenue. It also creates a governance tax: without permissions, approvals, and audit logs, enterprises
              won’t let agents touch premium inventory or budgets at scale.
            </p>
          </div>

          {/* My Role (NO BUBBLE / NO CARD) */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">My role</h2>
            <p className="mt-4 text-zinc-700">
              I help platforms and publishers clean up inventory and packaging so it’s ready for agentic execution —
              without consuming product roadmap. I translate strategy into practical machine-readable offer specs,
              partner workflows, and a pilot that proves measurable outcomes.
            </p>
          </div>

          {/* Premium section (standalone) */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Scale premium without commoditization</h2>
            <p className="mt-4 text-zinc-700">
              Historically, the most premium publisher inventory (tentpole moments, sponsorship-like placements,
              high-impact CTV units, curated pods) avoided automation because “programmatic” too often meant loss of
              control and price leakage. Agentic workflows flip that: premium becomes a governed product—machine-readable
              offer specs plus permissions, controls, and logging—so execution is fast and protected.
            </p>
            <p className="mt-4 text-zinc-700">
              Platforms and publishers can safely scale premium monetization by making terms enforceable (who can buy,
              what they get, how it runs, what gets measured), preserving scarcity and differentiation while eliminating
              manual friction.
            </p>
          </div>

          {/* Sprint */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">The 30-Day Agentic Readiness Sprint</h2>
            <p className="mt-4 text-zinc-700">In ~30 days, you have:</p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-700">
              <li>a clear view of what’s blocking agentic execution,</li>
              <li>machine-readable offer specs + “gold standard” offers, and</li>
              <li>a pilot plan with success metrics — without major platform rewrites.</li>
            </ol>
          </div>

          {/* Deliverables */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">What gets delivered</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700">
              <li>
                <span className="font-semibold">Agentic Readiness Scorecard:</span> what’s clean, what’s messy, what to
                fix first (tied to revenue impact)
              </li>
              <li>
                <span className="font-semibold">Offer Specs + Gold Standards:</span> naming, rules, eligibility,
                measurement mapping, required metadata, plus governance fields (owners/approvals/change log)
              </li>
              <li>
                <span className="font-semibold">CTV Format Mapping (where relevant):</span> standardize high-impact
                formats (e.g., Pause/Menu) + creative requirements to reduce QA churn and failed launches
              </li>
              <li>
                <span className="font-semibold">Pilot Plan + KPI Dashboard:</span> time-to-launch, repeat spend,
                yield/fill, measurement clarity, and what becomes fully executable vs. where HITL is required
              </li>
            </ul>
          </div>

          {/* Measurement */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">How success is measured</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700">
              <li>Launch cycle time: days → hours</li>
              <li>Fewer manual steps / fewer escalations</li>
              <li>Higher repeat spend + adoption</li>
              <li>Better yield/fill and fewer stranded impressions</li>
              <li>Cleaner measurement alignment</li>
              <li>% of offers executable without human intervention (and where approvals are required: time-to-approval)</li>
              <li>Premium CPM integrity: premium automation volume up without premium CPM dilution</li>
            </ul>
          </div>

          {/* Engagement model */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Engagement model</h2>
            <p className="mt-4 text-zinc-700">
              A short kickoff + weekly working sessions with your functional owners (product/ops/partnerships/sales). I
              keep the scope tight, focus on executable changes, and hand your team a repeatable playbook.
            </p>
          </div>

          {/* Contact */}
          <div className="border-t border-zinc-200 pt-10">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

            <div className="mt-4 space-y-1 text-zinc-700">
              <p className="font-semibold text-zinc-900">Ken Ripley — Ripley Media Agentic</p>
              <p>
                <a className="underline hover:text-zinc-900" href="mailto:kenneth@ripley.media">
                  kenneth@ripley.media
                </a>
              </p>
              <p>
                <a className="underline hover:text-zinc-900" href="https://www.linkedin.com/in/kennethripley/">
                  linkedin.com/in/kenripley
                </a>
              </p>
              <p>
                <a className="underline hover:text-zinc-900" href="/">
                  www.ripley.media
                </a>
              </p>
              <p>
                <a className="underline hover:text-zinc-900" href="/writing">
                  www.ripley.media/writing
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Book a call
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

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-zinc-600">
          © {new Date().getFullYear()} Ripley Media Agentic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}