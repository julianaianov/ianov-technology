import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  /** Rótulo pequeno acima do título */
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: "center" | "left"
  className?: string
}

/** Cabeçalho padrão das seções, com entrada animada. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-cyan-400",
            )}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            {eyebrow}
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </Reveal>
      )}

      <Reveal delay={80}>
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-5 text-pretty text-lg leading-relaxed text-slate-400",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
