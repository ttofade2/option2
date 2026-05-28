import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { SpeakerRequestForm } from "@/components/speaker-request-form"
import Image from "next/image"
import { Mic, BookOpen, Heart, Users, GraduationCap, Stethoscope, Church, Sparkles } from "lucide-react"

export const metadata = {
  title: "Request Dr. Tofade to Speak | Dr. Toyin Tofade",
  description: "Invite Dr. Toyin Tofade to speak at your conference, convocation, leadership summit, or institutional event.",
}

const speakingTopics = [
  { icon: GraduationCap, title: "Transformational leadership in higher education" },
  { icon: Stethoscope, title: "Health equity, pharmacy practice, and the future of healthcare" },
  { icon: BookOpen, title: "The pharmacist as a leader: from clinical practice to the C-suite" },
  { icon: Mic, title: "Mentorship, community, and the architecture of a meaningful career" },
]

export default function SpeakerRequestPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6993A] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-up">
              <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
                Speaking Engagements
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Invite Dr. Tofade to Speak
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Dr. Toyin Tofade is a sought-after speaker for conferences, convocations, leadership summits, and institutional events. She brings rigorous scholarship, real-world experience, and a powerful personal narrative to every engagement.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200} className="relative">
              <div className="relative aspect-[4/3] max-w-lg mx-auto">
                <Image
                  src="/SF_PBweb-14.jpg"
                  alt="Dr. Toyin Tofade with her husband"
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Speaking Topics
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakingTopics.map((topic, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 50}>
                <div className="bg-[#EDE5D4] rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                  <topic.icon className="w-8 h-8 text-[#C6993A] mb-4" />
                  <p className="text-[#2C1A0E] font-medium leading-relaxed">
                    {topic.title}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Engagements */}
      <section className="py-16 bg-[#0C3050]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-[#FAC775] font-semibold text-sm uppercase tracking-wider">
              Experience
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mt-4 mb-4">
              Past Speaking Engagements
            </h2>
            <p className="text-white/80 leading-relaxed">
              Dr. Tofade has spoken at national pharmacy conferences, HBCU summits, health equity forums, institutional inaugurations, and commencement ceremonies across the United States and internationally.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#EDE5D4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#3D1854] font-semibold text-sm uppercase tracking-wider">
              Request Form
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
              Submit Your Request
            </h2>
            <p className="text-[#5C4A2A] mt-4">
              Complete the form below to request Dr. Tofade for your event.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100}>
            <SpeakerRequestForm />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
