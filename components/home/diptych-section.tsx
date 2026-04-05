"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { GraduationCap, Church } from "lucide-react"

export function DiptychSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
            Two Callings, One Frame
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
            A Life of Dual Purpose
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Academic Leadership Card */}
          <AnimatedSection animation="slide-in-left">
            <div className="bg-[#0C3050] rounded-2xl overflow-hidden shadow-xl h-full">
              <div className="relative aspect-[16/10]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4eecff39fbc66cedd4cea353d30ff64e-p8UV1WOys0WbWjL7CPl5DG23SEGPBw.jpeg"
                  alt="Dr. Tofade at Albany College of Pharmacy Inauguration"
                  fill
                  className="object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C3050] to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6F1FB] flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#0C3050]" />
                  </div>
                  <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
                    Academic Leadership
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  Transforming Health Sciences Education
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  As the 10th President of Albany College of Pharmacy and Health Sciences, Dr. Tofade is guiding the institution through its most transformative era: new programs, record enrollment, and a bold new vision for health sciences education that reaches around the world.
                </p>
                <Link
                  href="/career"
                  className="inline-flex items-center text-[#C6993A] hover:text-[#FAC775] font-semibold transition-colors"
                >
                  Explore Her Career
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Pastoral Calling Card */}
          <AnimatedSection animation="slide-in-right">
            <div className="bg-[#3D1854] rounded-2xl overflow-hidden shadow-xl h-full">
              <div className="relative aspect-[16/10]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/width_1600%20%282%29-M7EJydLtTHa07mXRfg16RW7FSjl53E.jpeg"
                  alt="Dr. Tofade speaking at Jubilee Christian Church"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1854] to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0E8F8] flex items-center justify-center">
                    <Church className="w-6 h-6 text-[#3D1854]" />
                  </div>
                  <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
                    Pastoral Calling
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  Raising People Into Their Calling
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  As Senior Pastor of Jubilee Christian Church International, a global community with presence across North America, Africa, Europe, and the Caribbean, Dr. Tofade serves alongside her husband, Pastor Bisi Tofade, with the same commitment to raising people into the fullness of who they are called to be.
                </p>
                <Link
                  href="/her-story"
                  className="inline-flex items-center text-[#C6993A] hover:text-[#FAC775] font-semibold transition-colors"
                >
                  Read Her Story
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA Buttons */}
        <AnimatedSection animation="fade-in-up" delay={300} className="flex flex-wrap justify-center gap-4 mt-12">
          <Link
            href="/her-story"
            className="px-8 py-3 bg-[#0C3050] hover:bg-[#0C3050]/90 text-white font-semibold rounded-md transition-colors duration-200"
          >
            Her Story
          </Link>
          <Link
            href="/speaker-request"
            className="px-8 py-3 bg-[#C6993A] hover:bg-[#FAC775] text-[#2C1A0E] font-semibold rounded-md transition-colors duration-200"
          >
            Request Dr. Tofade to Speak
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
