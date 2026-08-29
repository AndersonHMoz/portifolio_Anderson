import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-lime-300 text-black shadow-[0_10px_35px_rgba(216,255,62,0.22)] hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_16px_45px_rgba(216,255,62,0.32)]",

  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]",

  ghost:
    "text-white/60 hover:bg-white/[0.04] hover:text-white",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={[
        "inline-flex min-h-12 items-center justify-center",
        "rounded-full px-6 py-3",
        "text-sm font-semibold",
        "transition-all duration-300",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-lime-300",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-[#050506]",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}