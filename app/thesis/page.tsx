export default function ThesisPage() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-semibold tracking-tight">
            Ripley Media Agentic
          </a>

          <nav className="flex items-center gap-3">
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
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a conversation
            </a>
          </nav>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            Thesis • Agentic AI • Programmatic CTV
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The Thesis (why now)
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-700">
            Agentic buying/selling will not win on cool prototypes. It will win in production—where execution is
            easiest. Today, CTV revenue is trapped in workflow friction: packaging, deal setup, creative QA,
            measurement mapping, supply-path complexity, and troubleshooting. As agents emerge, spend will route
            to platforms and sellers who make execution feel like checkout: simple, auditable, repeatable.
          </p>

          {/* What changed */}
          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-base font-semibold">What changed (and raises urgency)</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700">
              The agentic “execution layer” is moving from concept to real reference implementations + standards
              extensions—including Prebid taking stewardship of AdCP-based seller-agent code (the “Prebid Sales
              Agent”), and IAB Tech Lab publishing an agentic roadmap that emphasizes interoperable, governed
              execution.
            </p>
          </div>

          {/* The problem */}
          <h2 className="mt-12 text-2xl font-semibold tracking-tight">The Problem</h2>
          <p className="mt-4 text-zinc-700">
            Most organizations are not “agentic-ready” because inventory and offers are not consistently
            machine-executable, and workflow paths aren’t reliably repeatable end-to-end.
          </p>

          <p className="mt-4 text-zinc-700">
            This creates an activation/integration tax that slows time-to-spend, reduces repeat spend, and strands
            revenue. It also creates a governance tax: without permissions, approvals, and audit logs, enterprises
            won’t let agents touch premium inventory or budgets at scale.
          </p>

          {/* My role */}
          <h2 className="mt-12 text-2xl font-semibold tracking-tight">My Role</h2>
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-sm leading-relaxed text-zinc-700">
              I help platforms and publishers clean up inventory and packaging so it’s ready for agentic execution —
              without consuming product roadmap. I translate strategy into practical machine-readable offer specs,
              partner workflows, and a pilot that proves measurable outcomes.
            </p>
          </div>

          {/* Standalone Premium section (moved OUT of My Role bubble) */}
          <h2 className="mt-12 text-2xl font-semibold tracking-tight">
            Scale premium without commoditization
          </h2>

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

          {/* Sprint */}
          <h2 className="mt-12 text-2xl font-semibold tracking-tight">
            The 30-Day Agentic Readiness Sprint
          </h2>

          <p className="mt-4 text-zinc-700">In ~30 days, you have:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-zinc-700">
            <li>a clear view of what’s blocking agentic execution,</li>
            <li>machine-readable offer specs + “gold standard” offers, and</li>
            <li>a pilot plan with success metrics — without major platform rewrites.</li>
          </ol>

          <h3 className="mt-10 text-lg font-semibold tracking-tight">What gets delivered</h3>
          <ul className="mt-3 space-y-2 text-zinc-700">
            <li>
              • <span className="font-semibold">Agentic Readiness Scorecard:</span> what’s clean, what’s messy, what
              to fix first (tied to revenue impact)
            </li>
            <li>
              • <span className="font-semibold">Offer Specs + Gold Standards:</span> naming, rules, eligibility,
              measurement mapping, required metadata, plus governance fields (owners/approvals/change log)
            </li>
            <li>
              • <span className="font-semibold">CTV Format Mapping (where relevant):</span> standardize high-impact
              formats (e.g., Pause/Menu) + creative requirements to reduce QA churn and failed launches
            </li>
            <li>
              • <span className="font-semibold">Pilot Plan + KPI Dashboard:</span> time-to-launch, repeat spend,
              yield/fill, measurement clarity, and what becomes fully executable vs. where HITL is required
            </li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold tracking-tight">How success is measured</h3>
          <ul className="mt-3 space-y-2 text-zinc-700">
            <li>• Launch cycle time: days → hours</li>
            <li>• Fewer manual steps / fewer escalations</li>
            <li>• Higher repeat spend + adoption</li>
            <li>• Better yield/fill and fewer stranded impressions</li>
            <li>• Cleaner measurement alignment</li>
            <li>• % of offers executable without human intervention (and where approvals are required: time-to-approval)</li>
            <li>• Premium CPM integrity: premium automation volume up without premium CPM dilution</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold tracking-tight">Engagement model</h3>
          <p className="mt-3 text-zinc-700">
            A short kickoff + weekly working sessions with your functional owners (product/ops/partnerships/sales). I
            keep the scope tight, focus on executable changes, and hand your team a repeatable playbook.
          </p>

          {/* Contact */}
          <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-sm font-semibold">Contact</h3>
            <p className="mt-3 text-sm text-zinc-700">
              Ken Ripley — Ripley Media Agentic
              <br />
              <a className="underline" href="mailto:kenneth@ripley.media">
                kenneth@ripley.media
              </a>
              <br />
              LinkedIn:{" "}
              <a className="underline" href="https://www.linkedin.com/in/kennethripley/">
                linkedin.com/in/kenripley
              </a>
              <br />
              Website:{" "}
              <a className="underline" href="https://www.ripley.media">
                www.ripley.media
              </a>
              <br />
              Writing:{" "}
              <a className="underline" href="https://www.ripley.media/writing">
                www.ripley.media/writing
              </a>
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={executiveBriefHref}
                className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download executive brief (PDF)
              </a>

              <a
                href="/"
                className="inline-flex rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-white"
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
          © {new Date().getFullYear()} Ripley Media Agentic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}