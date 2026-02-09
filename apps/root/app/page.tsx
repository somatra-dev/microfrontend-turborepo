import { ZoneNav } from "@repo/ui/zone-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900">
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Root Zone
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Multi-Zone Router</h1>
        <p className="mt-2 text-base text-zinc-600">
          Choose a zone to open the dedicated experience.
        </p>
      </header>

      <main className="mx-auto max-w-4xl">
        <ZoneNav />
      </main>
    </div>
  );
}
