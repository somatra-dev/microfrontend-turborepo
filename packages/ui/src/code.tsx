import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const classes = [
    "rounded bg-black/5 px-1 py-0.5 font-semibold text-black/80 dark:bg-white/10 dark:text-white/80",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <code className={classes}>{children}</code>;
}
