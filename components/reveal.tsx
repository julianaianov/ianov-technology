"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealDirection = "up" | "left" | "right" | "zoom"

interface RevealProps {
  children: ReactNode
  /** Direção da entrada do elemento */
  direction?: RevealDirection
  /** Atraso em ms — use para escalonar listas */
  delay?: number
  /** Fração do elemento visível antes de disparar */
  threshold?: number
  /** Repete a animação toda vez que o elemento reentra na tela */
  repeat?: boolean
  className?: string
  as?: ElementType
}

const directionClass: Record<RevealDirection, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
}

/**
 * Envolve qualquer conteúdo e o revela quando entra na viewport.
 * Usa IntersectionObserver puro — sem biblioteca de animação.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  repeat = false,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Sem suporte a IntersectionObserver: mostra imediatamente.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (!repeat) observer.unobserve(entry.target)
        } else if (repeat) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, repeat])

  return (
    <Tag
      ref={ref}
      className={cn("reveal", directionClass[direction], visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
