"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-foreground">
              Dev <span className="text-primary">Thomaz</span>
            </span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          <a
            href="#servicos"
            className="text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-foreground"
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            className="text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-foreground"
          >
            Portfólio
          </a>
          <a
            href="#processo"
            className="text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-foreground"
          >
            Processo
          </a>
          <a
            href="#precos"
            className="text-sm font-medium leading-6 text-muted-foreground transition-colors hover:text-foreground"
          >
            Preços
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            <a
              href="#servicos"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfólio
            </a>
            <a
              href="#processo"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Processo
            </a>
            <a
              href="#precos"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Preços
            </a>
            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
