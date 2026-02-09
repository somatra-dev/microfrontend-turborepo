type Zone = {
  name: string;
  href: string;
  description?: string;
};

type ZoneNavProps = {
  zones?: Zone[];
  className?: string;
};

const defaultZones: Zone[] = [
  { name: "iPhone", href: "/iphone", description: "Pocket tasks" },
  { name: "iPad", href: "/ipad", description: "Split layout" },
  { name: "MacBook", href: "/macbook", description: "Deep work" },
];

export function ZoneNav({ zones = defaultZones, className }: ZoneNavProps) {
  const classes = ["grid gap-4 sm:grid-cols-3", className]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={classes} aria-label="Zones">
      {zones.map((zone) => (
        <a
          key={zone.href}
          href={zone.href}
          className="group flex flex-col rounded-2xl border border-black/10 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <span className="text-sm font-semibold text-black">{zone.name}</span>
          {zone.description ? (
            <span className="mt-1 text-xs text-black/60">
              {zone.description}
            </span>
          ) : null}
          <span className="mt-3 text-xs font-semibold text-black/70">
            Open →
          </span>
        </a>
      ))}
    </nav>
  );
}
