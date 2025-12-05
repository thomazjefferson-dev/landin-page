"use client"
import { Globe, Rocket, Smartphone, Palette } from "lucide-react"
import dynamic from "next/dynamic"

const MagicBento = dynamic(() => import("./magic-bento").then((mod) => ({ default: mod.default })), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  ),
})

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Sites responsivos e otimizados para SEO que transmitem a essência da sua marca com performance excepcional.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Páginas de alta conversão focadas em resultados, com design estratégico para maximizar suas campanhas.",
  },
  {
    icon: Smartphone,
    title: "Sistemas e Apps",
    description:
      "Aplicativos web e mobile sob medida que resolvem problemas reais do seu negócio com tecnologia de ponta.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Experiências digitais intuitivas e memoráveis que encantam usuários e impulsionam seu negócio.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="flex justify-center items-center">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 94, 255"
          />
        </div>
      </div>
    </section>
  )
}
