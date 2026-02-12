import { NextResponse } from "next/server";

const zoneConfig = {
  iphone: {
    domain: process.env.IPHONE_DOMAIN ?? "http://localhost:3001",
    basePath: "/iphone",
  },
  ipad: {
    domain: process.env.IPAD_DOMAIN ?? "http://localhost:3002",
    basePath: "/ipad",
  },
  macbook: {
    domain: process.env.MACBOOK_DOMAIN ?? "http://localhost:3003",
    basePath: "/macbook",
  },
} as const;

type ZoneName = keyof typeof zoneConfig;

function isZoneName(value: string): value is ZoneName {
  return value in zoneConfig;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ zone: string }> }
) {
  const { zone } = await context.params;

  if (!isZoneName(zone)) {
    return NextResponse.json(
      { ok: false, reason: "unknown-zone" },
      { status: 404 }
    );
  }

  const target = `${zoneConfig[zone].domain}${zoneConfig[zone].basePath}`;

  try {
    const response = await fetch(target, {
      method: "GET",
      cache: "no-store",
      redirect: "manual",
      signal: AbortSignal.timeout(2500),
    });

    const isUp = response.status < 500;

    return NextResponse.json(
      {
        ok: isUp,
        statusCode: response.status,
      },
      {
        status: isUp ? 200 : 503,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        reason: "unreachable",
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  }
}
