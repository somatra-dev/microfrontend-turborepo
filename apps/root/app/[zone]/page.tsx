import { notFound } from "next/navigation";
import ZoneShell from "../_components/ZoneShell";

const supportedZones = ["iphone", "ipad", "macbook"] as const;
type ZoneName = (typeof supportedZones)[number];

function isSupportedZone(value: string): value is ZoneName {
  return supportedZones.includes(value as ZoneName);
}

export function generateStaticParams() {
  return supportedZones.map((zone) => ({ zone }));
}

export default async function ZonePage({
  params,
}: {
  params: Promise<{ zone: string }>;
}) {
  const { zone } = await params;

  if (!isSupportedZone(zone)) {
    notFound();
  }

  return <ZoneShell zone={zone} />;
}
