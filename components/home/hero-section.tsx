"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A0E8] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white">
          <AnimatedSection animation="fade-in-up">
            <p className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider mb-4">
              College President &middot; Senior Pastor &middot; Author &middot; Global Women&apos;s Leader &middot; Pharmacist
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <h1 className="font-serif text-5xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
              Leading with purpose.<br />
              Serving with conviction.<br />
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              Dr. Toyin Tofade is a visionary leader at the intersection of healthcare, higher education, and faith, equipping institutions and individuals to lead with excellence and purpose.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300}>
            <p className="text-[#B5D4F4] text-lg mb-8">
              10th President, Albany College of Pharmacy and Health Sciences. First Black Woman Elected President in the College&apos;s 141-Year History
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/her-story"
                className="px-6 py-3 bg-[#C6993A] hover:bg-[#FAC775] text-[#2C1A0E] font-semibold rounded-md transition-colors duration-200"
              >
                Her Story
              </Link>
              <Link
                href="/speaker-request"
                className="px-6 py-3 border-2 border-white/30 hover:border-[#FAC775] hover:text-[#FAC775] text-white font-semibold rounded-md transition-colors duration-200"
              >
                Request Dr. Tofade to Speak
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C3050]/50 to-transparent rounded-2xl z-10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-25-Ceu9iO8TFsrFeF3Ad3troZ6LR77Y7g.jpg"
              alt="Dr. Toyin Tofade - Professional Portrait"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#C6993A] rounded-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
