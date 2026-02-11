import IphoneZoneComponent from "@repo/ui/components/iphone/IphoneZoneComponent";

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

      <main className="mx-auto w-full max-w-6xl">
        <IphoneZoneComponent />
      </main>
    </div>
  );
}
