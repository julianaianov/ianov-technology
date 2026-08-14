"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TimelineLineProps {
  orientation?: "horizontal" | "vertical"
  className?: string
}

/**
 * Linha neon que se "desenha" conforme a seção atravessa a viewport.
 * O elemento pai precisa ser `relative`.
 */
export function TimelineLine({ orientation = "horizontal", className }: TimelineLineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const viewport = window.innerHeight
      // 0 quando a linha entra pela base, 1 quando chega ao meio da tela.
      const start = viewport * 0.9
      const end = viewport * 0.35
      const raw = (start - rect.top) / (start - end)
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const horizontal = orientation === "horizontal"

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "absolute overflow-hidden bg-white/[0.06]",
        horizontal ? "h-px w-full" : "w-px h-full",
        className,
      )}
    >
      <div
        className="h-full w-full origin-top-left transition-transform duration-200 ease-out"
        style={{
          transform: horizontal ? `scaleX(${progress})` : `scaleY(${progress})`,
          background: horizontal
            ? "linear-gradient(90deg,#22d3ee,#3b82f6,#a855f7)"
            : "linear-gradient(180deg,#22d3ee,#3b82f6,#a855f7)",
          boxShadow: "0 0 12px rgba(34,211,238,.8)",
        }}
      />
    </div>
  )
}
