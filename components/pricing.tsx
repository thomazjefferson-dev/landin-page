import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    description: "Perfeito para validar sua ideia",
    price: "R$ 1.500",
    period: "projeto único",
    features: [
      "Design responsivo",
      "Otimização SEO básica",
      "Formulário de contato",
      "Até 3 seções",
      "1 revisão incluída",
      "Entrega em 7 dias",
    ],
  },
  {
    name: "Site Institucional",
    description: "Para sua presença digital completa",
    price: "R$ 3.500",
    period: "projeto único",
    features: [
      "Design personalizado",
      "Até 8 páginas",
      "Otimização SEO avançada",
      "Integração com redes sociais",
      "Painel administrativo",
      "3 revisões incluídas",
      "Entrega em 15 dias",
    ],
    popular: true,
  },
  {
    name: "Sistema Customizado",
    description: "Solução completa sob medida",
    price: "A partir de R$ 8.000",
    period: "projeto único",
    features: [
      "Desenvolvimento personalizado",
      "Design UI/UX completo",
      "Backend e banco de dados",
      "Painel administrativo",
      "Integrações com APIs",
      "Suporte por 30 dias",
      "Prazos flexíveis",
    ],
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-20 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Planos e Preços
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Escolha o plano ideal para o seu projeto
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border-border bg-card ${
                plan.popular ? "border-2 border-primary shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Mais Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    / {plan.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                  size="lg"
                >
                  Solicitar Orçamento
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
