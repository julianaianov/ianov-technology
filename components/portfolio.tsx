"use client";

import React from "react";
// @ts-ignore
import MicrolinkCard from "@microlink/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PortfolioItem {
  title: string;
  url: string;
}

const portfolioItems: PortfolioItem[] = [
  { title: "Estacionamento Rotativo", url: "https://estacionamento-rotativo.vercel.app" },
  { title: "Maricá Recicla", url: "https://marica-recicla.vercel.app" },
  { title: "Unity Offshore", url: "https://www.unityoffshore.co/" },
  { title: "Gabinete Isaac", url: "https://gabinete-isaac.vercel.app" },
  { title: "MediCannabis Brasil", url: "https://medicannabisbrasil.vercel.app" },
  { title: "PED 2025", url: "https://ped-2025.vercel.app" },
  { title: "Cynthia Romão App", url: "https://cynthia-romao-app.vercel.app" },
  { title: "Ianov Trade", url: "https://ianov-trade.vercel.app" },
  { title: "Lawyer Assistant", url: "https://ianov-juridico.vercel.app" },
  { title: "Bitcoe", url: "https://bitcoe.vercel.app" },
  { title: "Codemar Contratos", url: "https://codemar-contratos.vercel.app" },
];

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-cyan-400 transition-all duration-300 h-full">
      <MicrolinkCard
        url={item.url}
        size="large"
        media="screenshot"
        style={{
          borderRadius: "1rem",
          backgroundColor: "#09090b",
          color: "white",
        }}
      />
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nosso <span className="text-cyan-400">Portfólio</span>
        </h2>

        {/* Grid: visível em telas médias e grandes */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>

        {/* Carrossel: visível apenas em telas pequenas */}
        <div className="md:hidden w-full px-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 basis-full">
                  <PortfolioCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 md:left-0 border-zinc-600 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-cyan-400 disabled:opacity-30 z-10" />
            <CarouselNext className="right-1 md:right-0 border-zinc-600 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-cyan-400 disabled:opacity-30 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
