"use client";

import Image from "next/image";
// @ts-ignore
import MicrolinkCard from "@microlink/react";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

interface PortfolioItem {
  title: string;
  url: string;
  tag: string;
  /**
   * Print salvo em `public/portfolio/`. Use quando o site for um app que só
   * monta a tela depois de carregar: o serviço de captura fotografa antes
   * disso e o card sairia em branco. Informe também `description`.
   */
  screenshot?: string;
  description?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Sistema de Estacionamento Rotativo",
    url: "https://estacionamento-rotativo.vercel.app",
    tag: "Sistema",
    screenshot: "/portfolio/estacionamento-rotativo.png",
    description: "Sistema de gerenciamento de estacionamento rotativo",
  },
  { title: "Unity Offshore", url: "https://www.unityoffshore.co/", tag: "Institucional" },
  { title: "Gabinete Isaac", url: "https://gabinete-isaac.vercel.app", tag: "Portal" },
  { title: "MediCannabis Brasil", url: "https://medicannabisbrasil.vercel.app", tag: "Plataforma" },
  { title: "PED 2025", url: "https://ped-2025.vercel.app", tag: "Evento" },
  { title: "Cynthia Romão App", url: "https://cynthia-romao-app.vercel.app", tag: "App" },
  { title: "Ianov Trade", url: "https://ianov-trade.vercel.app", tag: "Dashboard" },
  { title: "Lawyer Assistant", url: "https://ianov-juridico.vercel.app", tag: "IA" },
  { title: "Bitcoe", url: "https://bitcoe.vercel.app", tag: "Fintech" },
  { title: "Codemar Contratos", url: "https://codemar-contratos.vercel.app", tag: "Gestão" },
];

/** Moldura comum a todos os cards, com o levantar e o brilho no hover. */
const frameClass =
  "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,.7)]";

/**
 * Card com print salvo no projeto. Reproduz o layout do card do Microlink
 * (imagem, título, descrição e domínio) para ficar idêntico aos demais.
 */
function StaticCard({ item }: { item: PortfolioItem }) {
  const domain = item.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={frameClass}>
      <div className="overflow-hidden bg-black transition-transform duration-700 group-hover:scale-[1.04]">
        <Image
          src={item.screenshot as string}
          alt={`Tela do projeto ${item.title}`}
          width={1280}
          height={800}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold leading-snug text-white">{item.title}</h3>
        {item.description && (
          <p className="mt-2 leading-relaxed text-slate-400">{item.description}</p>
        )}
        <div className="mt-4 flex items-center justify-between gap-3 text-slate-500">
          <span className="truncate text-sm">{domain}</span>
          <ArrowUpRight className="h-4 w-4 flex-shrink-0 transition-colors group-hover:text-cyan-300" />
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_40px_-10px_rgba(34,211,238,.8)] transition-opacity duration-500 group-hover:opacity-100" />
    </a>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  // Apps que só montam a tela após carregar saem em branco na captura ao vivo;
  // para esses usamos o print salvo em public/portfolio/.
  if (item.screenshot) return <StaticCard item={item} />;

  // O card do Microlink já é um <a> para o projeto — por isso o wrapper aqui
  // é uma div: âncora dentro de âncora é HTML inválido e quebra a hidratação.
  return (
    <div className={frameClass}>
      {/* Screenshot ao vivo do projeto */}
      <div className="overflow-hidden transition-transform duration-700 group-hover:scale-[1.04]">
        <MicrolinkCard
          url={item.url}
          size="large"
          media="screenshot"
          style={{
            border: "none",
            borderRadius: "1rem",
            backgroundColor: "#09090b",
            color: "white",
          }}
        />
      </div>

      {/* Faixa de informação que sobe no hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black via-black/95 to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">{item.tag}</p>
            <p className="mt-1 font-semibold text-white">{item.title}</p>
          </div>
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-cyan-400/40 text-cyan-300">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* Brilho de borda no hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_40px_-10px_rgba(34,211,238,.8)] transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full overflow-hidden py-24 text-white lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute left-[-10%] bottom-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfólio"
          title={
            <>
              Projetos que já estão <span className="gradient-text">no ar</span>
            </>
          }
          subtitle="Cada card é uma captura ao vivo do projeto. Clique para visitar."
        />

        {/* Grid: telas médias e grandes */}
        <div className="hidden grid-cols-1 gap-8 sm:grid-cols-2 md:grid lg:grid-cols-3 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.url} delay={(index % 3) * 110} direction="zoom">
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* Carrossel: telas pequenas */}
        <div className="w-full px-2 md:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2">
              {portfolioItems.map((item) => (
                <CarouselItem key={item.url} className="basis-full pl-2">
                  <PortfolioCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 z-10 border-cyan-400/30 bg-black/80 text-white hover:bg-cyan-400/10 hover:text-cyan-300 disabled:opacity-30" />
            <CarouselNext className="right-1 z-10 border-cyan-400/30 bg-black/80 text-white hover:bg-cyan-400/10 hover:text-cyan-300 disabled:opacity-30" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
