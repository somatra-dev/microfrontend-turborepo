import { NextRequest, NextResponse } from "next/server";

const zones = ["iphone", "ipad", "macbook"] as const;
type ZoneName = (typeof zones)[number];
const zoneSet = new Set<string>(zones);

const zoneOrigins: Record<ZoneName, string> = {
  iphone: process.env.IPHONE_DOMAIN ?? "http://localhost:3001",
  ipad: process.env.IPAD_DOMAIN ?? "http://localhost:3002",
  macbook: process.env.MACBOOK_DOMAIN ?? "http://localhost:3003",
};

function isZoneName(value: string): value is ZoneName {
  return zoneSet.has(value);
}

async function isZoneAvailable(zone: ZoneName): Promise<boolean> {
  try {
    const response = await fetch(new URL(`/${zone}`, zoneOrigins[zone]), {
      method: "GET",
      cache: "no-store",
      redirect: "manual",
      signal: AbortSignal.timeout(2500),
    });

    return response.status < 500;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const [, maybeZone] = request.nextUrl.pathname.split("/");
  if (!maybeZone || !isZoneName(maybeZone)) {
    return NextResponse.next();
  }

  const zone = maybeZone;

  if (
    request.nextUrl.pathname === `/${zone}/profile` ||
    request.nextUrl.pathname.startsWith(`/${zone}/profile/`)
  ) {
    return NextResponse.next();
  }

  const targetUrl = new URL(request.nextUrl.pathname, zoneOrigins[zone]);
  targetUrl.search = request.nextUrl.search;

  const isHtmlNavigation =
    request.method === "GET" && request.headers.get("accept")?.includes("text/html");

  if (!isHtmlNavigation) {
    return NextResponse.rewrite(targetUrl);
  }

  const available = await isZoneAvailable(zone);

  if (available) {
    return NextResponse.rewrite(targetUrl);
  }

  const fallbackUrl = request.nextUrl.clone();
  fallbackUrl.pathname = "/fallback";
  fallbackUrl.search = "";
  fallbackUrl.searchParams.set("zone", zone);
  fallbackUrl.searchParams.set(
    "from",
    `${request.nextUrl.pathname}${request.nextUrl.search}`
  );

  return NextResponse.redirect(fallbackUrl);
}

export const config = {
  matcher: ["/iphone/:path*", "/ipad/:path*", "/macbook/:path*"],
};
