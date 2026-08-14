"use client"

import Image from "next/image"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface NeonLogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

/**
 * A logo tratada como um letreiro de neon:
 * - halo pulsante por trás,
 * - uma cópia borrada em `screen` fazendo o brilho do tubo,
 * - contorno luminoso via drop-shadow,
 * - varredura de scanner e flicker sutil,
 * - paralaxe leve seguindo o cursor.
 */
export function NeonLogo({ width = 620, height = 186, className, priority }: NeonLogoProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = wrapRef.current
    if (!node || frame.current) return
    const { clientX, clientY } = e

    frame.current = requestAnimationFrame(() => {
      frame.current = 0
      const rect = node.getBoundingClientRect()
      const px = (clientX - rect.left) / rect.width - 0.5
      const py = (clientY - rect.top) / rect.height - 0.5
      node.style.transform = `perspective(1000px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`
    })
  }

  const handleLeave = () => {
    if (wrapRef.current) wrapRef.current.style.transform = ""
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "relative inline-block transition-transform duration-500 ease-out will-change-transform",
        className,
      )}
    >
      {/* Halo que respira */}
      <div
        aria-hidden
        className="logo-halo animate-neon-breathe absolute -inset-x-24 -inset-y-16 -z-10"
      />

      {/* Brilho do tubo: mesma logo, borrada, em modo screen */}
      <Image
        src="/logo.png"
        alt=""
        aria-hidden
        width={width}
        height={height}
        className="logo-neon-bloom pointer-events-none absolute inset-0 h-full w-full select-none"
      />

      {/* Logo nítida */}
      <Image
        src="/logo.png"
        alt="Ianov Technology"
        width={width}
        height={height}
        priority={priority}
        className="logo-neon animate-neon-flicker relative h-auto w-full select-none"
      />

      {/* Varredura de scanner recortada na área da logo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="logo-scanline absolute inset-x-0 h-1/3" />
      </div>
    </div>
  )
}
