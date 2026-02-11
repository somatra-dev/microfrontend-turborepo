"use client";

import Image from "next/image";
import { useGetIphonesQuery } from "@repo/redux/feature/iphone";

function formatPrice(price?: number) {
  if (price == null) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function IphoneZoneComponent() {
  const { data, isLoading, isError } = useGetIphonesQuery();

  if (isLoading) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">Loading iPhones...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <p className="text-sm text-red-700">
          Failed to load iPhones from iphone-service.
        </p>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">No iPhones available.</p>
      </section>
    );
  }

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {data.map((iphone, index) => (
        <article
          key={`${iphone.productName}-${iphone.productPrice}`}
          className={`rounded-2xl border p-4 shadow-sm ${
            index % 2 === 0
              ? "border-zinc-200 bg-white"
              : "border-sky-200 bg-sky-50"
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-zinc-100 sm:w-44">
              {iphone.productImageUrl ? (
                <Image
                  src={iphone.productImageUrl}
                  alt={iphone.productName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                  No image
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-zinc-900">
                  {iphone.productName}
                </h2>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
                  {formatPrice(iphone.productPrice)}
                </span>
              </div>
              <p className="text-sm text-zinc-600">{iphone.productDescription}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
