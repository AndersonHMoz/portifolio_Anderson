interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "";

  return (
    <div className={`max-w-4xl ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-lime-300">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}