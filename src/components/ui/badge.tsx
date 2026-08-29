import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "border-white/10 bg-white/[0.04] text-white/55",
    accent:
      "border-lime-300/20 bg-lime-300/10 text-lime-300",
  };

  return (
    <span
      {...props}
      className={[
        "inline-flex items-center rounded-md border",
        "px-3 py-1.5",
        "font-mono text-[9px] font-medium",
        "uppercase tracking-[0.12em]",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}