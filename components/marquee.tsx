import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  /** Duração de um ciclo completo */
  duration?: string
  reverse?: boolean
  /** Pausa a rolagem quando o mouse está sobre a faixa */
  pauseOnHover?: boolean
  className?: string
}

/**
 * Faixa infinita. O conteúdo é duplicado e a trilha desliza -50%,
 * o que faz o loop parecer contínuo.
 */
export function Marquee({
  children,
  duration = "32s",
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn("mask-fade-x overflow-hidden", pauseOnHover && "marquee-pause", className)}
    >
      <div
        className={cn("marquee-track", reverse && "reverse")}
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
