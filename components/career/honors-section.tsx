"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Award, Star, Medal, Trophy } from "lucide-react"

const honors = [
  {
    year: "2023, 2024, 2025",
    title: "Albany Business Review Power 50",
    description: "Named to the region's most influential business leaders list for three consecutive years.",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "ASHP Donald E. Francke Medal",
    description: "For significant international contributions to pharmacy practice.",
    icon: Medal,
  },
  {
    year: "2022",
    title: "Top 25 Women Leaders in Healthcare Education",
    description: "Women We Admire recognition.",
    icon: Star,
  },
  {
    year: "2021",
    title: "UNC Eshelman Pharmacy Alumni Distinguished Service Award",
    description: "Honoring outstanding contributions to the pharmacy profession.",
    icon: Award,
  },
  {
    year: "2020",
    title: "A. Richard Bliss Jr. Grand Council Citation of Appreciation",
    description: "Kappa Psi Pharmaceutical Fraternity recognition.",
    icon: Award,
  },
  {
    year: "2019",
    title: "Fred M. Eckel Pharmacy Leadership Award",
    description: "The first Black person to receive this honor from UNC.",
    icon: Trophy,
  },
  {
    year: "2018",
    title: "FIP Fellow",
    description: "The first Black woman named Fellow of the International Pharmaceutical Federation.",
    icon: Medal,
  },
  {
    year: "2016",
    title: "Excellence & Distinction in Medicine and Health",
    description: "Christian Association of Nigerian Americans recognition.",
    icon: Star,
  },
  {
    year: "2008",
    title: "Wake AHEC Mentor of the Year",
    description: "Recognizing exceptional mentorship in pharmacy education.",
    icon: Award,
  },
]

export function HonorsSection() {
  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-[#C6993A] font-semibold text-sm uppercase tracking-wider">
            Recognition
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1A0E] mt-4">
            Selected Honors & Awards
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {honors.map((honor, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 50}
            >
              <div className="bg-[#EDE5D4] rounded-xl p-6 flex items-start gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-[#C6993A] flex items-center justify-center flex-shrink-0">
                  <honor.icon className="w-7 h-7 text-[#2C1A0E]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[#C6993A] font-bold text-sm">
                      {honor.year}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#2C1A0E]">
                      {honor.title}
                    </h3>
                  </div>
                  <p className="text-[#5C4A2A]">
                    {honor.description}
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
