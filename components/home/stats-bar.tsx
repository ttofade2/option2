"use client"

import { AnimatedSection } from "@/components/animated-section"
import { BookOpen, GraduationCap, TrendingUp, Globe, Award, Heart } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    value: "1,000+",
    label: "Research Citations",
    year: "2026",
  },
  {
    icon: TrendingUp,
    value: "210%",
    label: "Increase in Student Deposits since 2022",
    year: "2024",

  },
  {
    icon: Globe,
    value: "6",
    label: "Continents: International partnerships spanning every inhabited continent",
    year: "2021",

  },
  {
    icon: Award,
    value: "3X",
    label: "Albany Business Review Power 50",
    year: "2023, 2024, 2025",

  },

]

export function StatsBar() {
  return (
    <section className="py-16 bg-[#0C3050]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-in-up"
              delay={index * 100}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-[#C6993A] mx-auto mb-3" />
              <p className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-[#B5D4F4] text-sm">
                {stat.label}
              </p>
              <p className="text-[#B5D4F4] text-sm">
                {stat.year}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
