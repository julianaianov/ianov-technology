"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { AutoVideo } from "@/components/auto-video"
import { NeonLogo } from "@/components/neon-logo"
import { NeonParticles } from "@/components/neon-particles"
import { RotatingWords } from "@/components/rotating-words"
import { Reveal } from "@/components/reveal"
import { posters, videos } from "@/lib/media"

const highlights = ["experiências digitais", "aplicativos mobile", "sistemas sob medida", "automações com IA"]

export function Hero() {
  return (
    <section
      id="inicio"
      className="noise-overlay relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      {/* ---------- Camadas de fundo ---------- */}
      <div className="absolute inset-0 -z-10">
        {/* Vídeo cinematográfico */}
        <AutoVideo
          src={videos.hero}
          poster={posters.hero}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.28]"
        />

        {/* Escurecimento para o texto respirar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,.75)_75%)]" />

        {/* Grade técnica com fade nas bordas */}
        <div className="grid-bg grid-bg-drift mask-fade absolute inset-0" />

        {/* Rede de partículas reagindo ao cursor */}
        <NeonParticles className="absolute inset-0 h-full w-full" />

        {/* Auroras neon */}
        <div className="animate-aurora absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-cyan-500/20 blur-[130px]" />
        <div
          className="animate-aurora absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px]"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="animate-aurora absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]"
          style={{ animationDelay: "9s" }}
        />
      </div>

      {/* ---------- Conteúdo ---------- */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal direction="zoom">
            <div className="mb-10 flex justify-center lg:mb-12">
              <NeonLogo priority className="w-[300px] sm:w-[420px] lg:w-[560px]" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Transformação digital de ponta a ponta
              <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Criamos{" "}
              <RotatingWords words={highlights} className="whitespace-nowrap" />
              <br className="hidden sm:block" /> que colocam seu negócio anos à frente.
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300/90 lg:text-xl">
              Sites, apps e plataformas construídos com tecnologia de ponta — rápidos, escaláveis e
              desenhados para converter.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="btn-sheen group h-13 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 text-base font-semibold text-black shadow-[0_0_30px_-6px_rgba(34,211,238,.9)] transition-all hover:scale-[1.04] hover:shadow-[0_0_50px_-6px_rgba(34,211,238,1)]"
                asChild
              >
                <a href="#contato">
                  Começar meu projeto
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="glass h-13 rounded-full border-cyan-400/30 px-8 text-base text-cyan-100 transition-all hover:scale-[1.04] hover:border-cyan-400/70 hover:bg-cyan-400/10 hover:text-white"
                asChild
              >
                <a href="#portfolio">
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  Ver nossos projetos
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Prova rápida */}
          <Reveal delay={520}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
              {["Entrega rápida", "Código próprio", "Suporte contínuo", "Rio de Janeiro, BR"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <a
        href="#servicos"
        aria-label="Rolar para os serviços"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-300 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Explore</span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-cyan-400/40">
          <span className="animate-scroll-cue mt-1.5 h-1.5 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </span>
      </a>
    </section>
  )
}
