import { Card, CardContent } from "@/components/ui/card"
import { Globe, Smartphone, Code2, Zap, Shield, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Presença digital profissional com design moderno e responsivo para fortalecer sua marca online.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e híbridos para iOS e Android que conectam você aos seus clientes.",
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description: "Plataformas personalizadas para automatizar processos e aumentar a eficiência do seu negócio.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização e velocidade garantidas para melhor experiência do usuário e SEO.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção de dados e conformidade com as melhores práticas de segurança digital.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Soluções que crescem junto com seu negócio, preparadas para o futuro.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Soluções completas para sua <span className="text-primary">transformação digital</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Oferecemos um conjunto completo de serviços para digitalizar e modernizar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 lg:p-8">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
