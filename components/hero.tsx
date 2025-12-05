"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import CountUp from "@/components/ui/count-up";

const LiquidEther = dynamic(() => import("./liquid-ether"), { ssr: false });
const Lightning = dynamic(() => import("./lightning-enhanced"), { ssr: false });
const TextType = dynamic(() => import("./text-type"), { ssr: false });

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <Lightning
            hue={260}
            xOffset={0}
            speed={0.8}
            intensity={2}
            size={1.5}
          />
        </div>
        <div className="absolute inset-0 opacity-40">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={25}
            cursorSize={120}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.6}
            autoIntensity={2.5}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Software House de Excelência</span>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Transformamos{" "}
            <span className="relative inline-block">
              <span className="relative z-8 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                <TextType
                  text={[
                    "suas ideias",
                    "seus aplicativos",
                    "seus sites",
                    "seus sistemas",
                  ]}
                  typingSpeed={100}
                  pauseDuration={8000}
                  deletingSpeed={50}
                  showCursor={true}
                  cursorCharacter="|"
                  loop={true}
                  className="inline"
                />
              </span>
            </span>{" "}
            em realidade digital
          </h1>

          <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            Desenvolvimento completo de sites, landing pages, sistemas web e
            aplicativos mobile. Design UI/UX profissional que eleva sua marca ao
            próximo nível.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="w-full sm:w-auto text-center">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                asChild
              >
                <a href="#contato">
                  Começar Projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">
                Resposta em 24h
              </p>
            </div>
            <div className="w-full sm:w-auto text-center">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 text-base px-8 py-6"
                asChild
              >
                <a href="#portfolio">Ver Portfólio</a>
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">
                +20 projetos entregues
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-foreground">
                <CountUp
                  to={20}
                  duration={2}
                  className="text-3xl font-bold text-foreground"
                />
                +
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Projetos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">
                <CountUp
                  to={100}
                  duration={2}
                  className="text-3xl font-bold text-foreground"
                />
                %
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Satisfação</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">24h</p>
              <p className="mt-1 text-sm text-muted-foreground">Resposta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
