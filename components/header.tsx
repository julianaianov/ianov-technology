"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#tecnologias", label: "Tecnologias" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("")

  // Header ganha vidro + borda neon depois dos primeiros pixels de rolagem.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Destaca no menu a seção que está na tela.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Trava a rolagem do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-cyan-400/15 bg-black/70 backdrop-blur-xl shadow-[0_8px_40px_-20px_rgba(34,211,238,.6)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* z-50 mantém a barra (e o botão de fechar) acima do painel mobile */}
        <div
          className={cn(
            "relative z-50 flex items-center justify-between transition-all duration-500",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <a href="#inicio" className="group flex items-center gap-2" aria-label="Ianov Technology - início">
            <Image
              src="/logo.png"
              alt="Ianov Technology"
              width={240}
              height={60}
              className={cn(
                "w-auto transition-all duration-500 group-hover:brightness-125",
                "drop-shadow-[0_0_10px_rgba(34,211,238,.55)] group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,.95)]",
                scrolled ? "h-9 lg:h-11" : "h-11 lg:h-14",
              )}
            />
          </a>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.href
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-300",
                )}
              >
                {link.label}
                {/* Sublinhado neon: cresce no hover, fica aceso na seção ativa */}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee] transition-transform duration-300",
                    active === link.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}

            <Button
              asChild
              className="btn-sheen ml-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold text-black shadow-[0_0_22px_-6px_rgba(34,211,238,.9)] transition-transform hover:scale-105"
            >
              <a href="#contato">Fale Conosco</a>
            </Button>
          </nav>

          {/* Botão do menu mobile */}
          <button
            className="rounded-lg p-2 text-cyan-300 transition-colors hover:bg-cyan-400/10 md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Painel mobile em tela cheia */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-40 origin-top overflow-hidden bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden",
          isMenuOpen ? "max-h-[100svh] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav className="container mx-auto flex flex-col gap-2 px-4 pt-24 pb-10">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-between border-b border-white/5 py-4 text-2xl font-semibold text-slate-200 transition-colors hover:text-cyan-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
              <span className="text-sm text-cyan-400/60">0{i + 1}</span>
            </a>
          ))}

          <Button
            asChild
            className="mt-6 h-12 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-base font-semibold text-black"
          >
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>
              Fale Conosco
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
