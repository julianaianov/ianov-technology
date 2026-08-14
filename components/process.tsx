import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TimelineLine } from "@/components/timeline-line"
import { TiltCard } from "@/components/tilt-card"
import { Search, PenTool, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e desafios para criar a solução ideal.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planejamento",
    description: "Definimos estratégia, arquitetura e cronograma detalhado do projeto.",
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento",
    description: "Construímos sua solução com as melhores tecnologias e práticas do mercado.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega",
    description: "Lançamos seu projeto e oferecemos suporte contínuo para garantir o sucesso.",
  },
]

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title={
            <>
              Um processo <span className="gradient-text">transparente</span> do início ao fim
            </>
          }
          subtitle="Uma metodologia comprovada, com você acompanhando cada entrega."
        />

        <div className="relative">
          {/* Trilho que se desenha conforme a rolagem */}
          {/* Marcadores têm 56px: o trilho passa pelo centro deles (28px) */}
          <TimelineLine orientation="horizontal" className="left-0 top-[27px] hidden lg:block" />
          <TimelineLine orientation="vertical" className="left-[27px] top-0 lg:hidden" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 130}>
                <div className="relative flex gap-6 lg:block">
                  {/* Marcador do trilho */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-black shadow-[0_0_28px_-6px_rgba(34,211,238,.9)]">
                      <step.icon className="h-6 w-6 text-cyan-300" />
                    </div>
                  </div>

                  <TiltCard
                    intensity={4}
                    className="glass mt-0 flex-1 rounded-2xl p-6 lg:mt-8 lg:p-7"
                  >
                    <div className="mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-5xl font-bold text-transparent opacity-90">
                      {step.number}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="leading-relaxed text-slate-400">{step.description}</p>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
