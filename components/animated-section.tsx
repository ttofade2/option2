"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right"
  delay?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
          if (currentRef) {
            observer.unobserve(currentRef)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, hasAnimated])

  const getTransformStyle = () => {
    if (isVisible) {
      return { opacity: 1, transform: "translateY(0) translateX(0)" }
    }
    switch (animation) {
      case "fade-in-up":
        return { opacity: 0, transform: "translateY(20px)" }
      case "fade-in":
        return { opacity: 0, transform: "translateY(0)" }
      case "slide-in-left":
        return { opacity: 0, transform: "translateX(-20px)" }
      case "slide-in-right":
        return { opacity: 0, transform: "translateX(20px)" }
      default:
        return { opacity: 0, transform: "translateY(20px)" }
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getTransformStyle(),
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  )
}
