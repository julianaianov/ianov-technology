import { AutoVideo } from "@/components/auto-video"
import { Counter } from "@/components/counter"
import { Reveal } from "@/components/reveal"
import { posters, videos } from "@/lib/media"
import { Cpu, Gauge, Rocket, Layers } from "lucide-react"

/**
 * Números conferidos com o próprio conteúdo do site:
 * projetos = itens do portfólio, stacks = lista de tecnologias,
 * frentes = lista de serviços. Atualize junto com essas listas.
 */
const stats = [
  { value: 11, suffix: "+", label: "Projetos no ar", icon: Rocket },
  { value: 9, suffix: "", label: "Tecnologias no stack", icon: Cpu },
  { value: 6, suffix: "", label: "Frentes de serviço", icon: Layers },
  { value: 100, suffix: "%", label: "Código sob medida", icon: Gauge },
]

const differentials = [
  {
    title: "Do zero ao ar em semanas",
    text: "Sprints curtos, entregas visíveis e você acompanhando cada etapa.",
  },
  {
    title: "Performance como requisito",
    text: "Sites que carregam rápido, rankeiam melhor e convertem mais.",
  },
  {
    title: "Tecnologia que não envelhece",
    text: "Stack moderno e arquitetura preparada para crescer com o negócio.",
  },
]

export function Showcase() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute right-[-10%] bottom-0 h-[380px] w-[380px] rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Faixa de números */}
        <div className="mb-24 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} direction="zoom">
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 text-center transition-colors hover:border-cyan-400/40 lg:p-8">
                <stat.icon className="mx-auto mb-3 h-5 w-5 text-cyan-400/70 transition-transform duration-500 group-hover:scale-125" />
                <div className="text-4xl font-bold lg:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} className="gradient-text" />
                </div>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                {/* Brilho na base do card */}
                <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Vídeo + diferenciais */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <div className="neon-frame group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <AutoVideo
                src={videos.showcase}
                poster={posters.showcase}
                className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />

              {/* Véu escuro + linhas de scanner */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div
                className="absolute inset-0 opacity-25 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(34,211,238,.5) 0px, rgba(34,211,238,.5) 1px, transparent 1px, transparent 4px)",
                }}
              />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">Em produção</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Engenharia, design e dados no mesmo time
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cyan-400">
                Por que a Ianov
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mb-8 text-balance text-3xl font-bold leading-tight lg:text-4xl">
                Tecnologia que <span className="gradient-text">gera resultado</span>, não só telas
                bonitas
              </h2>
            </Reveal>

            <div className="space-y-6">
              {differentials.map((item, i) => (
                <Reveal key={item.title} delay={160 + i * 100} direction="right">
                  <div className="group flex gap-4">
                    <div className="mt-1.5 flex-shrink-0">
                      <span className="block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] transition-transform duration-300 group-hover:scale-150" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-white transition-colors group-hover:text-cyan-300">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-slate-400">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
