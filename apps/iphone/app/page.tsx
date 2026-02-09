export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900">
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Zone
        </p>
        <h1 className="mt-3 text-4xl font-semibold">iPhone</h1>
        <p className="mt-2 text-base text-zinc-600">
          Compact flows, quick actions, and glanceable updates.
        </p>
      </header>

      <main className="mx-auto max-w-3xl">
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Pocket tasks
            </span>
            <span className="text-xs text-zinc-500">Portrait focus</span>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-sm font-semibold">Quick actions</p>
              <p className="mt-1 text-sm text-zinc-600">
                One-tap workflows for on-the-go moments.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
                  Start
                </button>
                <button className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700">
                  Preview
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-4">
              <p className="text-sm font-semibold">Today</p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                <li>Recent activity</li>
                <li>Favorites</li>
                <li>Offline cache</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
