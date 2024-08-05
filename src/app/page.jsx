import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { BuzzwallFeatures } from '@/components/BuzzwallFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Platforms } from '@/components/Platforms'

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <BuzzwallFeatures />
        <Pricing />
        <Faqs />
        <Platforms />
      </main>
      <Footer />
    </>
  )
}
