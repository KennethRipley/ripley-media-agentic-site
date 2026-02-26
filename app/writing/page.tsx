type Post = {
  title: string;
  dek: string;
  href: string;
  source?: string;
  tags?: string[];
};

export default function WritingPage() {
  // Maintain ONE list, ordered newest → oldest.
  const posts: Post[] = [
    {
      title: "The Agentic Shift Is Simple Economics",
      dek: "A simpler way to think about the agentic shift: less standards drama, more economics. Lower transaction costs, less manual work, and more money kept by buyers and sellers.",
      href: "https://open.substack.com/pub/ripleymedia/p/the-agentic-shift-is-simple-economics?utm_campaign=post-expanded-share&utm_medium=web",
      source: "Substack",
      tags: ["Agentic", "Economics", "CTV", "Programmatic"],
    },
    {
      title: "AdCP vs IAB Tech Lab: I’ve Seen This Movie Before",
      dek: "A practical take on what AdCP signals, what the Tech Lab might do next, and why execution beats hype.",
      href: "https://open.substack.com/pub/ripleymedia/p/adcp-vs-iab-tech-lab-ive-seen-this?utm_campaign=post-expanded-share&utm_medium=web",
      source: "Substack",
      tags: ["Agentic", "AdCP", "CTV", "Programmatic"],
    },
    {
      title: "AdCP vs the Stack: Are We Innovating… or Protecting the Pipes?",
      dek: "A clear-eyed look at the incentives behind the ‘agentic’ moment—and how the ecosystem may try to protect its existing pipes.",
      href: "https://open.substack.com/pub/ripleymedia/p/adcp-vs-the-stack-are-we-innovating?utm_campaign=post-expanded-share&utm_medium=web",
      source: "Substack",
      tags: ["Agentic", "AdCP", "Ecosystem", "Workflow"],
    },
  ];

  const featured = posts[0];
  const recent = posts.slice(1);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-3 max-w-2xl text-zinc-700">
        Selected posts — quick reads that connect agentic concepts to real execution.
      </p>

      {featured && (
        <div className="mt-10">
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-medium text-zinc-600">
                Featured post • {featured.source ?? "Substack"}
              </p>
              <span className="text-xs font-medium text-zinc-900 underline underline-offset-4 opacity-70 group-hover:opacity-100">
                Read on Substack →
              </span>
            </div>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
              {featured.title}
            </h2>

            <p className="mt-2 text-sm text-zinc-700">{featured.dek}</p>

            {!!featured.tags?.length && (
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </a>
        </div>
      )}

      {recent.length > 0 && (
        <section className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Recent posts
            </h2>
            <a
              href="https://ripleymedia.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4"
            >
              View all on Substack →
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((post) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-medium text-zinc-600">
                    {post.source ?? "Substack"}
                  </p>
                  <span className="text-xs font-medium text-zinc-900 underline underline-offset-4 opacity-70 group-hover:opacity-100">
                    Read →
                  </span>
                </div>

                <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-zinc-900">
                  {post.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm text-zinc-700">
                  {post.dek}
                </p>

                {!!post.tags?.length && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );

}
