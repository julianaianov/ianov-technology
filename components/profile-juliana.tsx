import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const formacao = [
  "Análise e Desenvolvimento de Sistemas - UCA (Cursando)",
  "Curso Universitário \"Blockchain Advanced\" - FIAP - SP",
  "Especialização profissional \"Desvendando a blockchain\" e \"Propriedade Intelectual\" - SENAI - RJ",
  "Fundamentos de Gestão de TI - FGV Fundação Getúlio Vargas",
  "Inteligência Artificial e Machine Learning - UNISSELVI",
]

export function ProfileJuliana() {
  return (
    <Card className="border-border overflow-hidden bg-muted/20 hover:border-primary/30 transition-colors">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Foto */}
          <div className="relative lg:w-80 lg:min-w-[320px] aspect-square lg:aspect-auto lg:min-h-[340px] bg-muted/50 flex items-center justify-center">
            <Image
              src="/ju.png"
              alt="Juliana Ianov - Desenvolvedora Full Stack"
              width={320}
              height={400}
              className="object-contain object-center w-full h-full p-4 lg:p-6"
              priority
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                Juliana Ianov
              </h3>
              <p className="text-primary font-semibold text-lg mb-2">
                Desenvolvedora Full Stack
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4 text-primary/80" />
                  5 anos de experiência
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-primary/80" />
                  Amplo portfólio
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-primary mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Formação
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm lg:text-base leading-relaxed">
                {formacao.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-primary/70 mt-1.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
