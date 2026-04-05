"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Quote } from "lucide-react"

export function FaithQuoteStrip() {
  return (
    <section className="bg-[#3D1854] py-12">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-10 h-10 text-[#C6993A] mx-auto mb-4 rotate-180" />
        <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-4">
          Grateful to God for the faculty, staff, and students who bring ACPHS to life every day and for the opportunity to lead a college community united by a shared purpose: advancing health and transforming lives.
        </blockquote>
        <cite className="text-[#C9A0E8] text-sm not-italic">
          President Toyin Tofade, acphs.edu
        </cite>
      </AnimatedSection>
    </section>
  )
}
