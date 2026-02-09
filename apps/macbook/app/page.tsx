export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50 px-6 py-12 text-zinc-900">
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Zone
        </p>
        <h1 className="mt-3 text-4xl font-semibold">MacBook</h1>
        <p className="mt-2 text-base text-zinc-600">
          Dense information, dashboards, and long-form editing.
        </p>
      </header>

      <main className="mx-auto max-w-4xl">
        <section className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Deep work
            </span>
            <span className="text-xs text-zinc-500">Keyboard first</span>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="text-sm font-semibold">Command center</p>
              <p className="mt-1 text-sm text-zinc-600">
                Full dashboards with filters, charts, and activity feeds.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-semibold text-emerald-700">
                <div className="rounded-xl bg-white px-3 py-2">Insights</div>
                <div className="rounded-xl bg-white px-3 py-2">Automations</div>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-100 p-4">
              <p className="text-sm font-semibold">Focus mode</p>
              <p className="mt-1 text-sm text-zinc-600">
                Long-form editing with contextual shortcuts.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                  New doc
                </button>
                <button className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
