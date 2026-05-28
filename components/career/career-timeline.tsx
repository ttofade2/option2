"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Briefcase, GraduationCap, Church, Building2, Award } from "lucide-react"

const timelineItems = [
  {
    period: "1994 - 1997",
    title: "Clinical Pharmacist & Resident",
    organization: "UNC Hospitals, Chapel Hill, NC",
    description: "Completed MS in Pharmacy Practice (1994) and PharmD (1997) at UNC Chapel Hill. Completed two clinical residencies, including an ASHP accredited residency at UNC hospitals.",
    icon: GraduationCap,
    side: "left",
    color: "navy",
  },
  {
    period: "1997 - 2002",
    title: "Clinical Specialist & Faculty",
    organization: "UNC Hospitals & UNC Eshelman School of Pharmacy",
    description: "Continued as a Clinical Specialist and developed and taught the Internal Medicine pharmacy student rotation. Served concurrently as Clinical Associate Professor.",
    icon: Briefcase,
    side: "right",
    color: "navy",
  },
  {
    period: "2002 - 2011",
    title: "Director, Pharmacotherapy Services",
    organization: "Wake AHEC, Raleigh, NC",
    description: "Led pharmacotherapy services across North Carolina Wake region. Named Wake AHEC Mentor of the Year (2008).",
    icon: Building2,
    side: "left",
    color: "navy",
  },
  {
    period: "2011 - 2016",
    title: "Associate Professor & Assistant Dean",
    organization: "University of Maryland School of Pharmacy",
    description: "Served as Associate Professor then Assistant Dean of the Experiential Learning Program, overseeing clinical education across the state.",
    icon: GraduationCap,
    side: "right",
    color: "navy",
  },
  {
    period: "2016 - 2022",
    title: "Dean & Professor",
    organization: "Howard University College of Pharmacy",
    description: "Transformational leader at the nation preeminent HBCU pharmacy school. Enrollment nearly doubled; alumni giving rose 70%; 18 international partnerships established.",
    icon: Award,
    side: "left",
    color: "navy",
  },
  {
    period: "2022 - 2026",
    title: "10th President",
    organization: "Albany College of Pharmacy and Health Sciences",
    description: "The first Black woman elected president in ACPHS 141-year history. Approved seven new degree programs in 2024. Applications increased 19%, PharmD deposits increased 210%.",
    icon: Award,
    side: "right",
    color: "gold",
  },
]

export function CareerTimeline() {
  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
            Professional Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
            Career Timeline
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0C3050] via-[#C6993A] to-[#3D1854] hidden md:block" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <AnimatedSection
                key={index}
                animation={item.side === "left" ? "slide-in-left" : "slide-in-right"}
                delay={index * 100}
              >
                <div className={`flex items-center ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
                  <div className={`w-full md:w-5/12 ${item.side === "right" ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`}>
                    <div
                      className={`p-6 rounded-xl shadow-lg ${
                        item.color === "navy"
                          ? "bg-[#0C3050] text-white"
                          : item.color === "plum"
                          ? "bg-[#3D1854] text-white"
                          : "bg-[#C6993A] text-[#2C1A0E]"
                      }`}
                    >
                      <span className={`text-sm font-semibold ${item.color === "gold" ? "text-[#2C1A0E]/70" : "text-[#FAC775]"}`}>
                        {item.period}
                      </span>
                      <h3 className="font-serif text-xl font-bold mt-2 mb-1">{item.title}</h3>
                      <p className={`text-sm mb-3 ${item.color === "gold" ? "text-[#2C1A0E]/80" : "text-[#B5D4F4]"}`}>
                        {item.organization}
                      </p>
                      <p className={`text-sm leading-relaxed ${item.color === "gold" ? "text-[#2C1A0E]/90" : "opacity-90"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 ${
                      item.color === "navy" ? "bg-[#0C3050]" : item.color === "plum" ? "bg-[#3D1854]" : "bg-[#C6993A]"
                    }`}>
                      <item.icon className={`w-6 h-6 ${item.color === "gold" ? "text-[#2C1A0E]" : "text-white"}`} />
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
