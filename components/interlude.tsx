"use client"

import { useEffect, useRef } from "react"
import { Reveal } from "@/components/reveal"
import { videos } from "@/lib/media"

/**
 * Faixa larga de vídeo entre seções, com paralaxe leve — serve de respiro
 * visual e reforça o clima cinematográfico da página.
 */
export function Interlude() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      // -1 (entrando por baixo) → 1 (saindo por cima)
      const relative = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
      node.style.transform = `translate3d(0, ${relative * -60}px, 0) scale(1.2)`
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

  return (
    <section className="relative h-[65vh] min-h-[420px] w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className="absolute inset-0 h-full w-full scale-125 object-cover opacity-40 will-change-transform"
      >
        <source src={videos.interlude} type="video/mp4" />
      </video>

      {/* Escurecimento nas pontas para colar nas seções vizinhas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/45 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(0,0,0,.8))]" />

      {/* Linhas neon no topo e na base */}
      <div className="neon-divider absolute inset-x-0 top-0" />
      <div className="neon-divider absolute inset-x-0 bottom-0" />

      <div className="relative flex h-full items-center justify-center px-6">
        <Reveal direction="zoom" className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-cyan-400">
            Ianov Technology
          </p>
          <p className="mx-auto max-w-4xl text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
            Seu próximo produto digital começa com{" "}
            <span className="neon-text">uma conversa</span>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
