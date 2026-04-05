import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareerTimeline } from "@/components/career/career-timeline"
import { EducationSection } from "@/components/career/education-section"
import { HonorsSection } from "@/components/career/honors-section"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Career | Dr. Toyin Tofade",
  description: "The distinguished career of Dr. Toyin Tofade spanning clinical pharmacy, academic leadership, and executive positions in health sciences education.",
}

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0C3050] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-up">
              <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
                Career
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                A Career Dedicated to Raising Leaders
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                From clinical pharmacist to college president, Dr. Tofade&apos;s career reflects an unwavering commitment to excellence in healthcare education.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200} className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBPRINT-29-ttMLAmNkynKIvs28tJalh1qkILdzJ4.jpg"
                  alt="Dr. Toyin Tofade professional portrait"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <CareerTimeline />

      {/* Pull Quote */}
      <section className="py-16 bg-[#3D1854]">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-[#C6993A] mx-auto mb-4 rotate-180" />
          <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-4">
            I am grateful to God for this new opportunity...Today, I stand before you, not as an individual, but as a representative of a community that has chosen to place its trust in me... As the first Black female president of this College, I am acutely aware of the historic significance of this moment.
          </blockquote>
        </AnimatedSection>
      </section>

      {/* Education */}
      <EducationSection />

      {/* Honors */}
      <HonorsSection />

      <Footer />
    </main>
  )
}
