"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="slide-in-left" className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tofade-toyinacphs10mw-11162201-nU1Bq8I8uUdWa4a1unCUU6T0ZY98Jx.jpg"
                alt="Dr. Toyin Tofade at Albany College of Pharmacy and Health Sciences"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-2/3 h-2/3 bg-[#E6F1FB] rounded-xl" />
          </AnimatedSection>

          {/* Text Content */}
          <div>
            <AnimatedSection animation="slide-in-right">
              <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
                A Legacy of Leadership
              </span>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4 mb-6">
                From the pharmacy halls of Nigeria to the presidential office of one of America&apos;s most respected health sciences colleges
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="space-y-4 text-[#5C4A2A] leading-relaxed">
                <p>
                  From the pharmacy halls of Obafemi Awolowo University in Nigeria to the presidential office of one of the nation&apos;s most respected health sciences colleges, Prof. Toyin Tofade has spent her career doing one thing: raising people up.
                </p>
                <p>
                  She has tripled enrollments, forged partnerships on six continents, and shaped pharmacists into leaders, all while remaining grateful to God for every opportunity to serve.
                </p>
                <p>
                  Whether she is charting the future of pharmacy education, mentoring a first-generation student, or speaking to thousands about health equity and leadership, Prof. Tofade brings the same conviction: that institutions exist to transform lives, and leaders exist to serve.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
