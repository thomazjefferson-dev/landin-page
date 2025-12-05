import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import ElectricBorder from "./electric-border"

const projects = [
  {
    title: "E-commerce Fashion",
    category: "Site Institucional",
    image: "/modern-fashion-ecommerce-website-with-elegant-prod.jpg",
    description: "Loja virtual completa com catálogo de produtos, carrinho e checkout integrado",
  },
  {
    title: "App Delivery",
    category: "Aplicativo Mobile",
    image: "/food-delivery-mobile-app-interface-with-modern-ui-.jpg",
    description: "Aplicativo de delivery com rastreamento em tempo real e pagamento integrado",
  },
  {
    title: "Dashboard Analytics",
    category: "Sistema Web",
    image: "/dark-dashboard-analytics-interface-with-charts-and.jpg",
    description: "Painel administrativo com gráficos interativos e relatórios personalizados",
  },
  {
    title: "Landing Page SaaS",
    category: "Landing Page",
    image: "/modern-saas-landing-page-with-gradient-and-clean-d.jpg",
    description: "Landing page otimizada para conversão com design moderno e responsivo",
  },
  {
    title: "App Financeiro",
    category: "Aplicativo Mobile",
    image: "/financial-mobile-app-interface-with-cards-and-tran.jpg",
    description: "Aplicativo de gestão financeira pessoal com controle de despesas",
  },
  {
    title: "Portal Imobiliário",
    category: "Site e Sistema",
    image: "/real-estate-portal-website-with-property-listings.jpg",
    description: "Portal completo para listagem e gestão de propriedades imobiliárias",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nosso Portfólio
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Projetos que desenvolvemos com excelência e dedicação
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ElectricBorder
              key={project.title}
              color="#5227FF"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</p>
                    <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  )
}
