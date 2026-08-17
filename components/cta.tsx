"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { AutoVideo } from "@/components/auto-video"
import { ProfileJuliana } from "@/components/profile-juliana"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { posters, videos } from "@/lib/media"

const whatsappUrl =
  "https://wa.me/5521995007374?text=Olá!%20Gostaria%20de%20solicitar%20uma%20cotação%20para%20um%20sistema/app/site."

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "ianov.technology@gmail.com",
    href: "mailto:ianov.technology@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rio de Janeiro, Brasil",
  },
]

export function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="grid-bg mask-fade absolute inset-0 opacity-50" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Perfil */}
          <div className="mb-16 lg:mb-20">
            <ProfileJuliana />
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-cyan-400">
                  Fale com a gente
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mb-5 text-balance text-3xl font-bold leading-tight lg:text-5xl">
                  Vamos transformar seu negócio <span className="gradient-text">juntos</span>
                </h2>
              </Reveal>

              <Reveal delay={160}>
                <p className="mb-10 text-lg leading-relaxed text-slate-400">
                  Conte o que você precisa e a gente responde com um plano claro: escopo, prazo e
                  valor — sem enrolação.
                </p>
              </Reveal>

              {/* Destaque WhatsApp */}
              <Reveal delay={220}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sheen group mb-8 flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/70 hover:shadow-[0_16px_50px_-16px_rgba(37,211,102,.8)]"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-white">
                      Solicitar cotação no WhatsApp
                    </span>
                    <span className="flex items-center gap-2 text-sm text-slate-300">
                      <Phone className="h-3.5 w-3.5" />
                      (21) 99500-7374
                    </span>
                  </span>
                  <span className="text-2xl text-[#25D366] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>

              <div className="space-y-4">
                {contacts.map((contact, i) => {
                  const content = (
                    <TiltCard
                      intensity={3}
                      className="glass flex items-start gap-4 rounded-2xl p-5"
                    >
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                        <contact.icon className="h-5 w-5 text-cyan-300" />
                      </span>
                      <span>
                        <span className="block font-semibold text-white">{contact.label}</span>
                        <span className="text-slate-400">{contact.value}</span>
                      </span>
                    </TiltCard>
                  )

                  return (
                    <Reveal key={contact.label} delay={280 + i * 90}>
                      {contact.href ? (
                        <a href={contact.href} className="block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </Reveal>
                  )
                })}
              </div>
            </div>

            {/* Vídeo temático */}
            <Reveal direction="right">
              <div className="neon-frame group relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[560px]">
                <AutoVideo
                  src={videos.contact}
                  poster={posters.contact}
                  className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">Próximo passo</p>
                  <p className="mt-2 text-2xl font-bold leading-snug text-white">
                    Conte sua ideia — devolvemos um plano
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
