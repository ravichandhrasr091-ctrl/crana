"use client"

import { useEffect, useRef } from "react"
import { Crosshair, Volume2, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Crosshair,
    label: "Precision airflow control",
  },
  {
    icon: Volume2,
    label: "Low-noise engineering",
  },
  {
    icon: Shield,
    label: "Durable internal design",
  },
  {
    icon: Sparkles,
    label: "Premium modern integration",
  },
]

export function IntelligenceSection() {
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
      id="intelligence"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Content */}
          <div>
            <div 
              className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-card/30 mb-6"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Purification Intelligence
              </span>
            </div>

            <h2 
              className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
              style={{ transitionDelay: "0.2s" }}
            >
              Technology That Works{" "}
              <span className="text-primary">Beyond Filtration</span>
            </h2>

            <p 
              className="reveal text-lg text-muted-foreground leading-relaxed mb-12"
              style={{ transitionDelay: "0.3s" }}
            >
              CRANA is designed around a more advanced purification philosophy, 
              combining air movement control, particle capture efficiency, and 
              engineered internal architecture for superior everyday air treatment.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="reveal group flex items-center gap-4"
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-border/50 bg-card/30 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="reveal relative" style={{ transitionDelay: "0.5s" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Main visual container */}
              <div className="absolute inset-0 rounded-3xl border border-border/30 bg-gradient-to-b from-card/40 to-card/10 backdrop-blur-sm overflow-hidden">
                {/* Animated lines */}
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                      style={{
                        top: `${20 + i * 15}%`,
                        animation: `pulse-glow 3s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="w-40 h-40 rounded-full border border-primary/20 animate-pulse-glow" />
                    
                    {/* Inner ring */}
                    <div className="absolute inset-4 rounded-full border border-primary/30" />
                    
                    {/* Core */}
                    <div className="absolute inset-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary/40 animate-pulse" />
                    </div>

                    {/* Orbital particles */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-primary/30" />
                <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-primary/30" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-primary/30" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-primary/30" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
