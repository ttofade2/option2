"use client"

import { AnimatedSection } from "@/components/animated-section"
import { BookOpen, GraduationCap, TrendingUp, Globe, Award, Heart } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    value: "1,000+",
    label: "Research Citations",
  },
  {
    icon: GraduationCap,
    value: "7",
    label: "New Academic Programs in 2024",
  },
  {
    icon: TrendingUp,
    value: "35%",
    label: "Increase in Student Deposits",
  },
  {
    icon: Globe,
    value: "18",
    label: "International Partnerships at Howard",
  },
  {
    icon: Award,
    value: "3X",
    label: "Albany Business Review Power 50",
  },
  {
    icon: Heart,
    value: "25+",
    label: "Years in Ministry",
  },
]

export function StatsBar() {
  return (
    <section className="py-16 bg-[#0C3050]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
