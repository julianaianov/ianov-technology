import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Showcase } from "@/components/showcase"
import { Portfolio } from "@/components/portfolio"
import { Interlude } from "@/components/interlude"
import { Process } from "@/components/process"
import { Technologies } from "@/components/technologies"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollProgress } from "@/components/scroll-progress"
import { CursorGlow } from "@/components/cursor-glow"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <CursorGlow />

      <Header />
      <Hero />
      <Services />
      <Showcase />
      <Portfolio />
      <Interlude />
      <Process />
      <Technologies />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
