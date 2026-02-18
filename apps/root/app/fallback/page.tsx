const supportedZones = ["iphone", "ipad", "macbook"] as const;
type ZoneName = (typeof supportedZones)[number];

function isZoneName(value: string): value is ZoneName {
  return supportedZones.includes(value as ZoneName);
}

export default async function FallbackPage({
  searchParams,
}: {
  searchParams: Promise<{ zone?: string; from?: string }>;
}) {
  const params = await searchParams;
  const zone = params.zone && isZoneName(params.zone) ? params.zone : null;
  const from = params.from ?? null;

  const label = zone
    ? `${zone.charAt(0).toUpperCase()}${zone.slice(1)}`
    : "Requested zone";
  const retryHref = zone ? `/${zone}` : "/";

  return (
    <main className="min-h-[70vh] bg-zinc-50 px-6 py-8">
      <section className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-red-300 p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em]">
          Zone Unavailable
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-900">
          {label} is temporarily unavailable
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-700">
          We could not load this section right now. Please retry in a moment.
        </p>
        {from ? (
          <p className="mt-2 text-xs text-zinc-600">Requested path: {from}</p>
        ) : null}
        <div className="mt-5 flex gap-3">
          <a
            href={retryHref}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
          >
            Retry
          </a>
          <a
            href="/"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
