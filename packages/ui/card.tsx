import { type JSX } from "react";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  const classes = [
    "group block rounded-2xl border border-black/10 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-black",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="text-lg font-semibold text-black transition group-hover:text-black/80 dark:text-white dark:group-hover:text-white/80">
        {title} <span className="ml-1">-&gt;</span>
      </h2>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">
        {children}
      </p>
    </a>
  );
}
