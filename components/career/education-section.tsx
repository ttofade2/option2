"use client"

import { AnimatedSection } from "@/components/animated-section"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "BPharm",
    institution: "Obafemi Awolowo University, Ile-Ife, Nigeria (1989)",
  },
  {
    degree: "MS in Pharmacy Practice",
    institution: "UNC Eshelman School of Pharmacy, Chapel Hill (1994)",
  },
  {
    degree: "Doctor of Pharmacy (PharmD)",
    institution: "UNC Eshelman School of Pharmacy, Chapel Hill (1997)",
  },
  {
    degree: "Clinical Pharmacokinetics Residency",
    institution: "UNC Chapel Hill (1994)",
  },
  {
    degree: "ASHP-Accredited Residency",
    institution: "UNC Hospitals (1995)",
  },
  {
    degree: "Academic Leadership Academy",
    institution: "The Pennsylvania State University (2016)",
  },
  {
    degree: "Management Development Programme",
    institution: "Harvard Graduate School of Education (2017)",
  },
  {
    degree: "Certificate in Public Leadership",
    institution: "Harvard Kennedy School (2023)",
  },
]

export function EducationSection() {
  return (
    <section className="py-20 bg-[#E6F1FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-[#0C3050] font-semibold text-sm uppercase tracking-wider">
            Academic Credentials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
            Education
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0C3050] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2C1A0E]">
                    {item.degree}
                  </h3>
                  <p className="text-[#5C4A2A] text-sm mt-1">
                    {item.institution}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
