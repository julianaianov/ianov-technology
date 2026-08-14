"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  to: number
  /** Duração da contagem em ms */
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

/**
 * Número que conta de 0 até `to` quando entra na viewport.
 */
export function Counter({ to, duration = 1800, prefix = "", suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to)
      return
    }

    let frame = 0
    let start = 0

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // easeOutExpo: acelera forte e desacelera no fim
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          frame = requestAnimationFrame(step)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
