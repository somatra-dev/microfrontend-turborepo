export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-12 text-zinc-900">
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
          Zone
        </p>
        <h1 className="mt-3 text-4xl font-semibold">iPad</h1>
        <p className="mt-2 text-base text-zinc-600">
          Multi-pane workspace for planning, review, and collaboration.
        </p>
      </header>

      <main className="mx-auto max-w-4xl">
        <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Split layout
            </span>
            <span className="text-xs text-zinc-500">Side-by-side</span>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold">Workspace</p>
              <p className="mt-1 text-sm text-zinc-600">
                Wider layout with multiple panes for deep dives.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-semibold text-blue-700">
                <div className="rounded-xl bg-white px-3 py-2">Boards</div>
                <div className="rounded-xl bg-white px-3 py-2">Timeline</div>
                <div className="rounded-xl bg-white px-3 py-2">Assets</div>
              </div>
            </div>
            <div className="rounded-2xl border border-blue-100 p-4">
              <p className="text-sm font-semibold">Shared actions</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button className="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700">
                  Export
                </button>
                <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  New board
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
