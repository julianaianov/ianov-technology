import Image from "next/image"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import { Reveal } from "@/components/reveal"

const formacao = [
  "Análise e Desenvolvimento de Sistemas - UCA (Cursando)",
  "Curso Universitário \"Blockchain Advanced\" - FIAP - SP",
  "Especialização profissional \"Desvendando a blockchain\" e \"Propriedade Intelectual\" - SENAI - RJ",
  "Fundamentos de Gestão de TI - FGV Fundação Getúlio Vargas",
  "Inteligência Artificial e Machine Learning - UNISSELVI",
]

export function ProfileJuliana() {
  return (
    <Reveal>
      <div className="glass group relative overflow-hidden rounded-3xl transition-colors duration-500 hover:border-cyan-400/40">
        {/* Brilho de fundo do card */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative flex flex-col lg:flex-row">
          {/* Foto com halo neon */}
          <div className="relative flex aspect-square items-center justify-center lg:aspect-auto lg:min-h-[380px] lg:w-80 lg:min-w-[320px]">
            <div className="logo-halo animate-neon-breathe absolute inset-8" />
            <Image
              src="/ju.png"
              alt="Juliana Ianov - Desenvolvedora Full Stack"
              width={320}
              height={400}
              className="relative h-full w-full object-contain object-center p-4 drop-shadow-[0_0_28px_rgba(34,211,238,.35)] transition-transform duration-700 group-hover:scale-105 lg:p-6"
              priority
            />
            {/* Divisória neon entre foto e texto */}
            <span className="absolute inset-y-8 right-0 hidden w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent lg:block" />
          </div>

          {/* Conteúdo */}
          <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
            <div className="mb-7">
              <h3 className="mb-1 text-2xl font-bold text-white lg:text-3xl">Juliana Ianov</h3>
              <p className="mb-3 text-lg font-semibold">
                <span className="gradient-text">Desenvolvedora Full Stack</span>
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm">
                  <Briefcase className="h-4 w-4 text-cyan-400" />5 anos de experiência
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm">
                  <Award className="h-4 w-4 text-cyan-400" />
                  Amplo portfólio
                </span>
              </div>
            </div>

            <div>
              <h4 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                <GraduationCap className="h-4 w-4" />
                Formação
              </h4>
              <ul className="space-y-2.5 text-sm leading-relaxed text-slate-400 lg:text-base">
                {formacao.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
