import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Paintbrush, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e desafios para criar a melhor estratégia digital.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "Design",
    description: "Criamos protótipos interativos e design systems alinhados com sua identidade.",
  },
  {
    icon: Code,
    number: "03",
    title: "Desenvolvimento",
    description: "Transformamos designs em código limpo, performático e escalável.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lançamento",
    description: "Deploy seguro e suporte contínuo para garantir o sucesso do seu projeto.",
  },
]

export function Process() {
  return (
    <section id="processo" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nosso Processo</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Uma metodologia comprovada para entregar resultados excepcionais
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <Card key={step.number} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
