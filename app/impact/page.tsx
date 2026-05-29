import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import { Quote, Users, Stethoscope, Heart, Sparkles } from "lucide-react"

export const metadata = {
  title: "Impact | Dr. Toyin Tofade",
  description: "The lasting impact of Dr. Toyin Tofade on students, the pharmacy profession, health equity, and mentorship.",
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0C3050] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Impact
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              The Mark of a Leader is What She Leaves Behind
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Dr. Tofade doesn&apos;t measure her work in enrollment numbers alone, though the numbers are extraordinary. She measures it in students who became deans, in faculty who found their voice, in communities that received care they might not otherwise have had.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* On Students */}
          <AnimatedSection className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Students-stand-together-with-Toyin-at-Inauguration-ceremony-1220x686-DbJKrtKeD8H6sPRS63tEtZFcCRgVTh.jpg"
                  alt="Dr. Tofade with students at ACPHS"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6F1FB] flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#0C3050]" />
                  </div>
                  <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
                    On Students
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                  Students at the Center of Every Decision
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed mb-4">
                  In 2017, at the end of her first year as Dean at Howard, a student placed a wrapped gift and a long handwritten letter on her desk. The letter called her &ldquo;a ray of sunshine&rdquo; and &ldquo;a stunning example of leadership.&rdquo;
                </p>
                <p className="text-[#5C4A2A] leading-relaxed">
                  She didn&apos;t open it. She kept it as a reminder, she said, that &ldquo;I&apos;m here to serve the students, and I must keep on making them top of mind, top of heart, top of focus in every decision that I make.&rdquo; She opened the gift only at the end of her sixth year, when she felt she had finally earned it.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* On the Pharmacy Profession */}
          <AnimatedSection className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6F1FB] flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-[#0C3050]" />
                  </div>
                  <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
                    On the Pharmacy Profession
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                  Transforming Pharmacy Education
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed mb-4">
                  As Dean at Howard, Dr. Tofade oversaw the creation of a landmark FDA-GlaxoSmithKline fellowship in regulatory affairs, opening new career pathways for pharmacy graduates that had never existed before. She built partnerships in 16 countries. She elevated Howard&apos;s residency match rate from 36 to over 50 percent.
                </p>
                <p className="text-[#5C4A2A] leading-relaxed">
                  At ACPHS, she launched seven new academic programs in a single year, the largest expansion in the institution&apos;s 141-year history. She introduced ACPHS Online, making health sciences education accessible beyond Albany. She doubled industrial fellowships for graduates in a single year.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ACPHS-Leadership-at-Commencement-1540x866-ci3ehWzNdhlELXVoWhcvgaBT6Y98h2.jpg"
                  alt="ACPHS Leadership at Commencement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* On Health Equity */}
          <AnimatedSection className="mb-20">
            <div className="bg-[#0C3050] rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E6F1FB] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#0C3050]" />
                </div>
                <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
                  On Health Equity
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-white mb-6">
                A Global Commitment to Health Access
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Dr. Tofade has served on national boards including the Accreditation Council for Pharmacy Education, the Board of Pharmacy Specialties, and more.
              </p>
              <p className="text-white/80 leading-relaxed">
                As FIP Academic Pharmacy Section President, she has shaped pharmacy education globally, with a particular commitment to ensuring that countries with the greatest health needs have access to the most prepared practitioners.
              </p>
            </div>
          </AnimatedSection>

          {/* On Mentorship */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/width_1600-GkSLNYFMO55UbJlTSsTX5O02hp4dCB.jpeg"
                  alt="Dr. Tofade with mentee"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0E8F8] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#3D1854]" />
                  </div>
                  <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
                    On Mentorship
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-6">
                  Paying It Forward
                </h2>
                <p className="text-[#5C4A2A] leading-relaxed mb-4">
                  She gives credit freely to Professor Fred Eckel, who recognized her in Nigeria before she recognized herself; to Dr. Natalie Eddington, who kept her on track to the deanship when she doubted herself; to Dr. Freeman Hrabowski, whose integrity and vision inspired her approach to leadership.
                </p>
                <p className="text-[#5C4A2A] leading-relaxed">
                  And she pays it forward: through the Tofade Aspiring Leaders Endowed Fund at Howard, through the countless students she has guided, and through Global Women Leaders Inc., the nonprofit she founded to inspire and equip women worldwide.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 bg-[#3D1854]">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-[#C6993A] mx-auto mb-4 rotate-180" />
          <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed">
            Everywhere I&apos;ve gone, I&apos;ve led with heart.
          </blockquote>
          <cite className="text-[#C9A0E8] text-sm not-italic mt-4 block">
            Dr. Toyin Tofade
          </cite>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  )
}
