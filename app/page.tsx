"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Policies from "@/components/policies"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Policies />
      <Footer />
    </main>
  )
}
