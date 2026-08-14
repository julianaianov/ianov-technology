import Image from "next/image"
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#processo", label: "Processo" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
]

const contactLines = [
  { icon: Mail, text: "ianov.technology@gmail.com" },
  { icon: Phone, text: "(21) 99500-7374" },
  { icon: MapPin, text: "Rio de Janeiro, Brasil" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black">
      {/* Brilho da base da página */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative mx-auto px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Marca */}
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Ianov Technology"
              width={180}
              height={40}
              className="mb-5 h-10 w-auto drop-shadow-[0_0_14px_rgba(34,211,238,.6)]"
            />
            <p className="max-w-md leading-relaxed text-slate-400">
              Transformando negócios através da tecnologia. Criamos soluções digitais que impulsionam
              o crescimento e a inovação.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Contato
            </h3>
            <ul className="space-y-3 text-slate-400">
              {contactLines.map((line) => (
                <li key={line.text} className="flex items-center gap-2.5">
                  <line.icon className="h-4 w-4 flex-shrink-0 text-cyan-400/70" />
                  <span className="break-all">{line.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Ianov Technology. Todos os direitos reservados.</p>

          <a
            href="#inicio"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
          >
            Voltar ao topo
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
