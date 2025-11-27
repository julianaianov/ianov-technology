"use client";

import React from "react";
// @ts-ignore
import MicrolinkCard from "@microlink/react";

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
  { title: "Lawyer Assistant", url: "https://lawyer-assistent.vercel.app" },
  { title: "Bitcoe", url: "https://bitcoe.vercel.app" },
  { title: "Codemar Contratos", url: "https://codemar-contratos.vercel.app" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nosso <span className="text-cyan-400">Portfólio</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-cyan-400 transition-all duration-300"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
