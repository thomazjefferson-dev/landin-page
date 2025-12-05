import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Process } from "@/components/process"
import { Technologies } from "@/components/technologies"
import { Pricing } from "@/components/pricing"
import { ContactForm } from "@/components/contact-form"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Technologies />
      <Pricing />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}
