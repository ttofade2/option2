import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { WorkWithMeForm } from "@/components/work-with-me-form"
import { Award, Users, Building2, Briefcase, Mic, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Work With Prof. Tofade | Executive Coaching & Advisory",
  description: "Partner with Prof. Toyin Tofade for executive coaching, leadership development, board advisory, and speaking engagements.",
}

const offerings = [
  {
    icon: Award,
    title: "Executive Leadership Coaching",
    audience: "For presidents, deans, VPs, and senior leaders in higher education and healthcare",
    points: [
      "Leading institutional transformation, merger, and complex organisational change",
      "Strategic vision, board relations, and governance dynamics",
      "Executive presence, stakeholder communications, and crisis leadership",
      "Building high-performing teams and sustainable leadership cultures",
      "Leading as a first, a woman, or an underrepresented leader in a traditional institution",
    ],
  },
  {
    icon: Building2,
    title: "Organisational & Team Development",
    audience: "For leadership teams building alignment and high performance",
    points: [
      "Strategic planning facilitation for academic and healthcare institutions",
      "Team culture diagnostics, alignment workshops, and accreditation-ready cultures",
    ],
  },
  {
    icon: Briefcase,
    title: "Board Advisory & Governance",
    audience: "For boards seeking executive insight at the governance level",
    points: [
      "Institutional strategy, president/CEO evaluation, and health sciences sector expertise",
      "Strategic partnership and merger evaluation advisory",
    ],
  },
]

const whoSheWorksWith = [
  "Presidents, deans, VPs, and C-suite leaders in higher education and healthcare",
  "Emerging leaders preparing for their first senior executive role",
  "Women navigating historically exclusionary leadership environments",
  "Boards seeking advisory expertise in higher education governance and health systems",
  "Professional associations seeking speakers, facilitators, and strategic advisors",
]

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-10 bg-[#0C3050] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Executive Coaching & Board Advisory
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Work With Prof. Tofade
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#5C4A2A] text-lg leading-relaxed mb-0">
                Prof. Tofade is a Certified Professional Co-active Coach (CPCC) with over two decades of executive leadership experience across higher education, healthcare, and global policy. She has led an institutional merger, secured public-private partnerships, built high-performing teams across multiple institutions, and navigated the full complexity of senior academic and healthcare administration.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who She Works With */}
      {/* <section className="py-16 bg-[#0C3050]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Clientele
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mt-4">
              Who Prof. Tofade Works With
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {whoSheWorksWith.map((item, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 50}>
                <div className="flex items-start gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-[#FAC775] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Offerings */}
      <section className="pb-20 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Offerings
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {offerings.map((offering, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0C3050] flex items-center justify-center flex-shrink-0">
                      <offering.icon className="w-6 h-6 text-[#FAC775]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#2C1A0E] mb-1">
                        {offering.title}
                      </h3>
                      <p className="text-[#C6993A] font-medium text-sm">
                        {offering.audience}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {offering.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-[#5C4A2A]">
                        <span className="text-[#C6993A] mt-1.5">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Note */}
      <section className="py-12 bg-[#EDE5D4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h3 className="font-serif text-xl font-bold text-[#2C1A0E] mb-4">
              A Note on Availability
            </h3>
            <p className="text-[#5C4A2A] leading-relaxed">
              Prof. Tofade maintains a selective coaching practice alongside her ongoing advisory commitments. Engagements are accepted on a limited basis to ensure depth and genuine impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#0C3050] font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Submit an Enquiry
            </h2>
            <p className="text-[#5C4A2A] mt-4">
              Complete the form below to discuss working with Prof. Tofade.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <WorkWithMeForm />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
