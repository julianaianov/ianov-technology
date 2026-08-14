import { Globe, Smartphone, Code2, Zap, Shield, TrendingUp, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Presença digital profissional com design moderno e responsivo para fortalecer sua marca online.",
    tags: ["Next.js", "SEO", "Design"],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para iOS e Android que conectam você aos seus clientes.",
    tags: ["iOS", "Android", "PWA"],
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description:
      "Plataformas personalizadas para automatizar processos e aumentar a eficiência do seu negócio.",
    tags: ["Dashboards", "APIs", "Integrações"],
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização e velocidade garantidas para melhor experiência do usuário e SEO.",
    tags: ["Core Web Vitals", "Cache", "CDN"],
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção de dados e conformidade com as melhores práticas de segurança digital.",
    tags: ["LGPD", "Auth", "Backup"],
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Soluções que crescem junto com seu negócio, preparadas para o futuro.",
    tags: ["Cloud", "Docker", "CI/CD"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden py-24 lg:py-32">
      {/* Fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="grid-bg mask-fade absolute inset-0 opacity-60" />
        <div className="absolute right-[-15%] top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="O que fazemos"
          title={
            <>
              Soluções completas para sua{" "}
              <span className="gradient-text">transformação digital</span>
            </>
          }
          subtitle="Um conjunto completo de serviços para digitalizar e modernizar seu negócio — do primeiro rascunho ao suporte depois do lançamento."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <TiltCard className="glass group h-full rounded-2xl p-7 lg:p-8">
                {/* Ícone com anel neon */}
                <div className="relative mb-6 inline-flex">
                  <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-lg transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                  <div className="relative flex h-13 w-13 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 to-blue-600/10 transition-all duration-500 group-hover:border-cyan-400/70 group-hover:shadow-[0_0_24px_-4px_rgba(34,211,238,.85)]">
                    <service.icon className="h-6 w-6 text-cyan-300 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 text-cyan-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </h3>

                <p className="mb-6 leading-relaxed text-slate-400">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
