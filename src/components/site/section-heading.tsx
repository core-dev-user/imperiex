import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold",
          )}
        >
          <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-5xl">
          {title}{" "}
          {highlight ? <em className="not-italic text-gradient-gold">{highlight}</em> : null}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
