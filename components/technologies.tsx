import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
]

export function Technologies() {
  return (
    <section id="tecnologias" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Tecnologias modernas e confiáveis</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Utilizamos as melhores ferramentas do mercado para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
