import { Marquee } from "@/components/marquee"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Inteligência Artificial", category: "AI/ML" },
]

/** Palavras que passam nas faixas superiores — reforço visual da stack */
const keywords = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind",
  "Inteligência Artificial",
  "APIs",
  "Supabase",
  "React Native",
]

function MarqueePill({ label }: { label: string }) {
  return (
    <span className="mx-3 whitespace-nowrap rounded-full border border-cyan-400/20 bg-white/[0.03] px-6 py-3 text-base font-medium text-slate-300 transition-colors duration-300 hover:border-cyan-400/60 hover:text-cyan-200 lg:text-lg">
      {label}
    </span>
  )
}

export function Technologies() {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="grid-bg mask-fade absolute inset-0 opacity-50" />
        <div className="absolute left-1/2 top-0 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Nosso arsenal"
          title={
            <>
              Tecnologias <span className="gradient-text">modernas e confiáveis</span>
            </>
          }
          subtitle="As melhores ferramentas do mercado para criar soluções robustas e escaláveis."
        />
      </div>

      {/* Faixas infinitas em direções opostas */}
      <div className="mb-16 space-y-4">
        <Marquee duration="38s">
          {keywords.map((k) => (
            <MarqueePill key={k} label={k} />
          ))}
        </Marquee>
        <Marquee duration="46s" reverse>
          {[...keywords].reverse().map((k) => (
            <MarqueePill key={k} label={k} />
          ))}
        </Marquee>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {technologies.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 60} direction="zoom">
              <div className="neon-border-card h-full">
                <div className="group h-full rounded-[calc(var(--radius-lg)-2px)] bg-black/90 p-6 text-center transition-colors duration-300 hover:bg-[#04121a]">
                  <h3 className="mb-1 text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-slate-500">{tech.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
