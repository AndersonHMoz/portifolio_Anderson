import type { HTMLAttributes } from "react";

export function Container({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={[
        "mx-auto w-full max-w-350",
        "px-5 sm:px-8 lg:px-10 xl:px-12",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}