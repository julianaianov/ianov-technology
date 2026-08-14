"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

interface NeonParticlesProps {
  /** Densidade: 1 partícula a cada N px² de tela */
  density?: number
  /** Distância máxima (px) para desenhar a linha entre dois nós */
  linkDistance?: number
  className?: string
}

/**
 * Rede de partículas em canvas que reage ao cursor — os nós próximos
 * ao mouse acendem e se conectam, dando a sensação de circuito vivo.
 */
export function NeonParticles({
  density = 14000,
  linkDistance = 130,
  className,
}: NeonParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let frame = 0
    let running = true
    const mouse = { x: -9999, y: -9999 }

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Menos partículas em telas pequenas para preservar a fluidez.
      const count = Math.min(110, Math.max(24, Math.floor((width * height) / density)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Rebate nas bordas para manter todos em cena.
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const dxm = p.x - mouse.x
        const dym = p.y - mouse.y
        const distMouse = Math.sqrt(dxm * dxm + dym * dym)
        const near = distMouse < 170

        ctx.beginPath()
        ctx.arc(p.x, p.y, near ? p.r * 1.9 : p.r, 0, Math.PI * 2)
        ctx.fillStyle = near ? "rgba(103,232,249,.95)" : "rgba(59,130,246,.55)"
        ctx.shadowBlur = near ? 14 : 6
        ctx.shadowColor = near ? "#67e8f9" : "#3b82f6"
        ctx.fill()
      }

      ctx.shadowBlur = 0

      // Liga os nós próximos — opacidade cai com a distância.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > linkDistance) continue

          const midX = (a.x + b.x) / 2
          const midY = (a.y + b.y) / 2
          const dm = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2)
          const boost = dm < 200 ? 1 - dm / 200 : 0

          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(${boost > 0.2 ? "103,232,249" : "59,130,246"},${
            (1 - dist / linkDistance) * (0.22 + boost * 0.6)
          })`
          ctx.lineWidth = 0.7 + boost
          ctx.stroke()
        }
      }

      if (running) frame = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    // Congela a animação quando a seção sai da tela ou a aba perde o foco.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true
        frame = requestAnimationFrame(draw)
      } else if (!entry.isIntersecting) {
        running = false
        cancelAnimationFrame(frame)
      }
    })
    observer.observe(canvas)

    build()
    frame = requestAnimationFrame(draw)

    window.addEventListener("resize", build)
    window.addEventListener("mousemove", onMouseMove, { passive: true })
    document.addEventListener("mouseleave", onMouseLeave)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("resize", build)
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [density, linkDistance])

  return <canvas ref={canvasRef} aria-hidden className={className} />
}
