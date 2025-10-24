import Image from "next/image"

export function LogoHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Grid base - mantém o formato original */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Circuito neon completo - cobrindo todo o fundo com movimento mais lento */}
        <div className="absolute inset-0 z-0">
          {/* Linhas horizontais neon - mais visíveis com gradiente e movimento mais lento */}
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '24px'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '48px',
              animationDelay: '3s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '72px',
              animationDelay: '6s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '96px',
              animationDelay: '9s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '120px',
              animationDelay: '12s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '144px',
              animationDelay: '15s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '168px',
              animationDelay: '1.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '192px',
              animationDelay: '4.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '216px',
              animationDelay: '7.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '240px',
              animationDelay: '10.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '264px',
              animationDelay: '13.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '288px',
              animationDelay: '16.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '312px',
              animationDelay: '0.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '336px',
              animationDelay: '3.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '360px',
              animationDelay: '6.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '384px',
              animationDelay: '9.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '408px',
              animationDelay: '12.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '432px',
              animationDelay: '15.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '456px',
              animationDelay: '18.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '480px',
              animationDelay: '21s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '504px',
              animationDelay: '23.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '528px',
              animationDelay: '26s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '552px',
              animationDelay: '28.5s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '576px',
              animationDelay: '31s'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-100 animate-[shimmer_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              top: '600px',
              animationDelay: '33.5s'
            }}
          ></div>
          
          {/* Linhas verticais neon - mais visíveis com gradiente e movimento mais lento */}
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '24px'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '48px',
              animationDelay: '3s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '72px',
              animationDelay: '6s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '96px',
              animationDelay: '9s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '120px',
              animationDelay: '12s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '144px',
              animationDelay: '15s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '168px',
              animationDelay: '1.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '192px',
              animationDelay: '4.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '216px',
              animationDelay: '7.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '240px',
              animationDelay: '10.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '264px',
              animationDelay: '13.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '288px',
              animationDelay: '16.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '312px',
              animationDelay: '0.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '336px',
              animationDelay: '3.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '360px',
              animationDelay: '6.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '384px',
              animationDelay: '9.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '408px',
              animationDelay: '12.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '432px',
              animationDelay: '15.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '456px',
              animationDelay: '18.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '480px',
              animationDelay: '21.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '504px',
              animationDelay: '24.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '528px',
              animationDelay: '27.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '552px',
              animationDelay: '30.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '576px',
              animationDelay: '33.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '600px',
              animationDelay: '36.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '624px',
              animationDelay: '39s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '648px',
              animationDelay: '41.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '672px',
              animationDelay: '44s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '696px',
              animationDelay: '46.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '720px',
              animationDelay: '49s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '744px',
              animationDelay: '51.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '768px',
              animationDelay: '54s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '792px',
              animationDelay: '56.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '816px',
              animationDelay: '59s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '840px',
              animationDelay: '61.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '864px',
              animationDelay: '64s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '888px',
              animationDelay: '66.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '912px',
              animationDelay: '69s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '936px',
              animationDelay: '71.5s'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-100 animate-[shimmer-vertical_18s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e40af, #3b82f6, #60a5fa, #93c5fd)',
              boxShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 36px #60a5fa',
              left: '960px',
              animationDelay: '74s'
            }}
          ></div>
          
          {/* Linhas laterais - esquerda e direita */}
          <div 
            className="absolute h-full w-[2px] opacity-90 animate-[shimmer-vertical_24s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e3a8a, #1e40af, #3b82f6, #60a5fa)',
              boxShadow: '0 0 10px #1e40af, 0 0 20px #1e40af, 0 0 30px #3b82f6',
              left: '0px'
            }}
          ></div>
          <div 
            className="absolute h-full w-[2px] opacity-90 animate-[shimmer-vertical_24s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to bottom, #1e3a8a, #1e40af, #3b82f6, #60a5fa)',
              boxShadow: '0 0 10px #1e40af, 0 0 20px #1e40af, 0 0 30px #3b82f6',
              right: '0px',
              animationDelay: '12s'
            }}
          ></div>
          
          {/* Linhas horizontais laterais - topo e fundo */}
          <div 
            className="absolute w-full h-[2px] opacity-90 animate-[shimmer_24s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e3a8a, #1e40af, #3b82f6, #60a5fa)',
              boxShadow: '0 0 10px #1e40af, 0 0 20px #1e40af, 0 0 30px #3b82f6',
              top: '0px'
            }}
          ></div>
          <div 
            className="absolute w-full h-[2px] opacity-90 animate-[shimmer_24s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(to right, #1e3a8a, #1e40af, #3b82f6, #60a5fa)',
              boxShadow: '0 0 10px #1e40af, 0 0 20px #1e40af, 0 0 30px #3b82f6',
              bottom: '0px',
              animationDelay: '12s'
            }}
          ></div>
        </div>
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Logo grande centralizado com z-index para ficar sobre as linhas neon */}
            <div className="mb-8 relative z-10">
              <Image 
                src="/logo.png" 
                alt="Ianov Technology" 
                width={600} 
                height={180} 
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* Texto de apresentação com fundo transparente */}
            <div className="relative">
              {/* Fundo transparente do quadrado */}
              <div className="absolute inset-0 bg-background/20 backdrop-blur-sm rounded-lg border border-border/30 shadow-2xl -m-8 p-8"></div>
              
              {/* Conteúdo do texto */}
              <div className="relative z-10 space-y-4">
                <h1 className="text-2xl lg:text-3xl font-semibold text-foreground drop-shadow-lg">
                  Transformação Digital
                </h1>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: '#ADD8E6' }}>
                  Criamos soluções tecnológicas que impulsionam o crescimento do seu negócio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
