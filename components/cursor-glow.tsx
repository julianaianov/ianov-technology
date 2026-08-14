"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Facho de luz neon que acompanha o cursor.
 * Só é ativado em dispositivos com ponteiro fino (desktop) e quando
 * o usuário não pediu redução de movimento.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || reduced) return

    setEnabled(true)

    let frame = 0
    // Posição alvo (mouse) e posição renderizada — a diferença cria o "atraso" suave.
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const loop = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    frame = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[600px] w-[600px] rounded-full opacity-60 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,.13) 0%, rgba(59,130,246,.08) 35%, transparent 68%)",
      }}
    />
  )
}
