"use client"

import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  /** Intensidade da inclinação 3D em graus. 0 desativa o tilt. */
  intensity?: number
  className?: string
}

/**
 * Card que inclina em 3D seguindo o cursor e projeta um facho de luz
 * no ponto onde o mouse está (via variáveis --mx/--my usadas no CSS).
 */
export function TiltCard({ children, intensity = 7, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return

    const { clientX, clientY } = e
    if (frame.current) return

    frame.current = requestAnimationFrame(() => {
      frame.current = 0
      const rect = node.getBoundingClientRect()
      const px = (clientX - rect.left) / rect.width
      const py = (clientY - rect.top) / rect.height

      node.style.setProperty("--mx", `${px * 100}%`)
      node.style.setProperty("--my", `${py * 100}%`)

      if (intensity > 0) {
        const rotateY = (px - 0.5) * intensity * 2
        const rotateX = (0.5 - py) * intensity * 2
        node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`
      }
    })
  }

  const handleLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.transform = ""
    node.style.setProperty("--mx", "50%")
    node.style.setProperty("--my", "50%")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("spotlight-card", className)}
    >
      {children}
    </div>
  )
}
