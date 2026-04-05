"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export function PullQuoteSection() {
  return (
    <section className="py-20 md:py-28 bg-[#EDE5D4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Quote */}
          <AnimatedSection animation="slide-in-left" className="md:col-span-3">
            <div className="gold-bar pl-8">
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2C1A0E] leading-relaxed">
                There are so many ways to achieve our goals. If the idea of serving a higher purpose appeals to you, I invite you to join me on this journey. Together we&apos;ll work to solve problems that change the world.
              </blockquote>
            </div>
            <p className="mt-6 text-[#5C4A2A] pl-8">
              Dr. Toyin Tofade
            </p>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="slide-in-right" className="md:col-span-2">
            <div className="relative aspect-square max-w-xs mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-13-4PYhwiBUNcoVMeWlPILvmPxMCfWywq.jpg"
                alt="Dr. Toyin Tofade seated portrait"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
              {/* Decorative frame */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full border-4 border-[#C6993A] rounded-xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
