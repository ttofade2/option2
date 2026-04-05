import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import Link from "next/link"
import { Quote, Heart, Users, Sparkles, Globe } from "lucide-react"

export const metadata = {
  title: "Global Women Leaders Inc. | Dr. Toyin Tofade",
  description: "Global Women Leaders Inc. was founded by Dr. Toyin Tofade to inspire and train women internationally to maximize their leadership potential.",
}

export default function GlobalWomenLeadersPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#3D1854] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A0E8] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-up">
              <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
                Global Women Leaders Inc.
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Raising Women to Lead, Everywhere
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Global Women Leaders Inc. was born from a conviction that has driven Dr. Tofade across every chapter of her life: that women, equipped and empowered, can transform their institutions, their communities, and their world.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200} className="relative">
              <div className="relative aspect-[4/3] max-w-lg mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-6-q0P0vSj5erXtzppvPSDIdY1KFzPSrZ.jpg"
                  alt="Dr. Toyin Tofade with her husband Pastor Bisi Tofade"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-lg text-[#5C4A2A] leading-relaxed mb-6">
              As a Nigerian-born pharmacist who became the first Black woman to lead a major U.S. pharmacy college, Dr. Tofade knows firsthand what it means to walk into rooms where no one looks like you and to walk in anyway.
            </p>
            <p className="text-lg text-[#5C4A2A] leading-relaxed">
              She founded Global Women Leaders Inc. to ensure that fewer women have to walk that road alone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#EDE5D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 rounded-full bg-[#3D1854] flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2C1A0E] mb-4">
                  Mission
                </h3>
                <p className="text-[#5C4A2A] leading-relaxed">
                  To inspire and train women internationally to maximize their leadership potential across academic institutions, healthcare systems, faith communities, and beyond.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 rounded-full bg-[#C6993A] flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-[#2C1A0E]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2C1A0E] mb-4">
                  What We Believe
                </h3>
                <p className="text-[#5C4A2A] leading-relaxed">
                  We believe leadership is a calling, not a credential. We believe that when one woman rises, she creates room for others. We believe that the most powerful leaders are those who lead from a place of service, faith, and unshakeable purpose.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 rounded-full bg-[#0C3050] flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2C1A0E] mb-4">
                  Who We Serve
                </h3>
                <p className="text-[#5C4A2A] leading-relaxed">
                  Women in healthcare, academia, ministry, and public life at every stage of their journey. First-generation professionals stepping into new authority. Established leaders who want to pour into the next generation. Faith communities building cultures of women&apos;s leadership.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Strip */}
      <section className="py-16 bg-[#3D1854]">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-[#C6993A] mx-auto mb-4 rotate-180" />
          <blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed">
            When one woman rises, she creates room for others.
          </blockquote>
        </AnimatedSection>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
              Empowering Women
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Leadership in Action
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-in-up" delay={0}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/width_1600%20%283%29-MrWL2kr8LYyneLyEapdDnikecIkOoF.jpeg"
                  alt="Dr. Tofade in worship"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-15-luDDbRcem9lez0PG8ZFVAkCAYWIZOQ.jpg"
                  alt="Dr. Tofade in prayer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SF_PBweb-21-58yMSIPq5DL84zHwbBJ6YshMVEdS5y.jpg"
                  alt="Dr. Tofade and Pastor Bisi Tofade"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-[#0C3050]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-[#C6993A] flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-[#2C1A0E]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Whether you are a woman ready to grow into the fullness of your calling, an organization looking to partner with us, or a donor committed to unlocking women&apos;s potential globally, we want to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/speaker-request"
                className="px-8 py-3 bg-[#C6993A] hover:bg-[#FAC775] text-[#2C1A0E] font-semibold rounded-md transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/speaker-request"
                className="px-8 py-3 border-2 border-white/30 hover:border-[#FAC775] hover:text-[#FAC775] text-white font-semibold rounded-md transition-colors"
              >
                Partner With Us
              </Link>
              <Link
                href="/speaker-request"
                className="px-8 py-3 border-2 border-white/30 hover:border-[#FAC775] hover:text-[#FAC775] text-white font-semibold rounded-md transition-colors"
              >
                Support the Mission
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
