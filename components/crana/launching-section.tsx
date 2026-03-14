"use client"

import { useEffect, useRef } from "react"

const labels = [
  "Advanced ESP Purification",
  "Premium Modern Design",
  "Launching Soon",
]

export function LaunchingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = section.querySelectorAll(".reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="launching"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div 
          className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          style={{ transitionDelay: "0.1s" }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary">
            Coming Soon
          </span>
        </div>

        {/* Heading */}
        <h2 
          className="reveal font-display text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-8"
          style={{ transitionDelay: "0.2s" }}
        >
          A New Standard in{" "}
          <span className="text-primary glow-text">Air Purification</span>{" "}
          is Arriving.
        </h2>

        {/* Description */}
        <p 
          className="reveal max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-16"
          style={{ transitionDelay: "0.3s" }}
        >
          The first CRANA air purification system is launching soon. 
          Designed to deliver advanced purification performance, premium 
          aesthetics, and a refined user experience for modern indoor spaces.
        </p>

        {/* Product silhouette visual */}
        <div 
          className="reveal relative max-w-lg mx-auto mb-16"
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="relative aspect-[3/4]">
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse-glow" />
            </div>

            {/* Device silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Base shape */}
                <div className="w-48 h-80 rounded-[60px] bg-gradient-to-b from-secondary to-card border border-border/50 shadow-2xl">
                  {/* Inner details */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border border-border/30 bg-card/50" />
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border border-primary/20" />
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary/50 animate-pulse" />
                  </div>

                  {/* Vent lines */}
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-px bg-border/50" />
                    ))}
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary/50" />
                </div>

                {/* Floating particles around device */}
                <div className="absolute -top-4 -left-8 w-2 h-2 rounded-full bg-primary/40 animate-float" />
                <div className="absolute top-1/4 -right-10 w-1.5 h-1.5 rounded-full bg-accent/50 animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-1/4 -left-12 w-1 h-1 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute -bottom-6 -right-6 w-2 h-2 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "3s" }} />
              </div>
            </div>

            {/* Reflection line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>

        {/* Labels */}
        <div 
          className="reveal flex flex-wrap items-center justify-center gap-4 md:gap-8"
          style={{ transitionDelay: "0.5s" }}
        >
          {labels.map((label, index) => (
            <div key={label} className="flex items-center gap-3">
              {index > 0 && (
                <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
              )}
              <span className="text-sm tracking-wider uppercase text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
