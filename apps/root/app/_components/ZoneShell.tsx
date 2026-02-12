"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type ZoneName = "iphone" | "ipad" | "macbook";

type HealthState = "checking" | "up" | "down";

interface ZoneShellProps {
  zone: ZoneName;
}

export default function ZoneShell({ zone }: ZoneShellProps) {
  const [state, setState] = useState<HealthState>("checking");

  const label = useMemo(() => zone.charAt(0).toUpperCase() + zone.slice(1), [zone]);

  const checkHealth = useCallback(async () => {
    setState("checking");
    try {
      const response = await fetch(`/api/zone-health/${zone}`, {
        cache: "no-store",
      });
      setState(response.ok ? "up" : "down");
    } catch {
      setState("down");
    }
  }, [zone]);

  useEffect(() => {
    void checkHealth();
  }, [checkHealth]);

  useEffect(() => {
    if (state === "up") {
      window.location.replace(`/_zones/${zone}`);
    }
  }, [state, zone]);

  if (state === "checking") {
    return (
      <main className="min-h-[70vh] bg-zinc-50 px-6 py-8">
        <section className="mx-auto max-w-5xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-zinc-900">{label} Zone</h1>
          <p className="mt-2 text-sm text-zinc-600">Checking zone availability...</p>
        </section>
      </main>
    );
  }

  if (state === "down") {
    return (
      <main className="min-h-[70vh] bg-zinc-50 px-6 py-8">
        <section className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-red-300 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Zone Unavailable</p>
          <h1 className="mt-2 text-2xl font-semibold text-zinc-900">{label} is temporarily unavailable</h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-700">
            We could not load this section right now. Please retry in a moment.
          </p>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={() => void checkHealth()}
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
            >
              Retry
            </button>
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

  return (
    <main className="min-h-[70vh] bg-zinc-50 px-6 py-8">
      <section className="mx-auto max-w-5xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">{label} Zone</h1>
        <p className="mt-2 text-sm text-zinc-600">Zone is available. Opening now...</p>
      </section>
    </main>
  );
}
