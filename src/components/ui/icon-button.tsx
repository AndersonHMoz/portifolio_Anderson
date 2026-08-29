import type { ButtonHTMLAttributes } from "react";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function IconButton({
  label,
  className = "",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      {...props}
      className={[
        "inline-flex h-10 w-10 items-center justify-center",
        "rounded-full border border-white/10",
        "bg-white/3",
        "text-white/60",
        "transition-all duration-300",
        "hover:border-white/20",
        "hover:bg-white/8",
        "hover:text-white",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-lime-300",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}