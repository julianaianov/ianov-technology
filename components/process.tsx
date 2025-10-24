import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e desafios para criar a solução ideal.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Definimos estratégia, arquitetura e cronograma detalhado do projeto.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos sua solução com as melhores tecnologias e práticas do mercado.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Lançamos seu projeto e oferecemos suporte contínuo para garantir o sucesso.",
  },
]

export function Process() {
  return (
    <section id="processo" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Nosso processo de trabalho</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Uma metodologia comprovada que garante resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border">
              <CardContent className="p-6 lg:p-8">
                <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-pulse drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
