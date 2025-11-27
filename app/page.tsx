import { Header } from "@/components/header"
import { LogoHero } from "@/components/logo-hero"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "../components/portfolio"
import { Process } from "@/components/process"
import { Technologies } from "@/components/technologies"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <LogoHero />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Technologies />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
