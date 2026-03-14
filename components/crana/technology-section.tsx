"use client"

import { useEffect, useRef } from "react"
import { Zap, Layers, Wind, RefreshCw } from "lucide-react"

const technologies = [
  {
    icon: Zap,
    title: "Particle Charging",
    description: "Airborne particles are electrically charged for effective capture.",
  },
  {
    icon: Layers,
    title: "Electrostatic Collection",
    description: "Charged particles are drawn into specialized collection stages engineered for efficient purification.",
  },
  {
    icon: Wind,
    title: "Optimized Airflow Engineering",
    description: "Internal airflow paths are designed for smooth circulation and effective clean air delivery.",
  },
  {
    icon: RefreshCw,
    title: "Washable Collection System",
    description: "A practical and durable collection design supports long-term usability and maintenance.",
  },
]

export function TechnologySection() {
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
      id="technology"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-accent/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-card/30 mb-6"
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              ESP Technology
            </span>
          </div>

          <h2 
            className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            style={{ transitionDelay: "0.2s" }}
          >
            Advanced Electrostatic{" "}
            <span className="text-primary">Precipitation Technology</span>
          </h2>

          <p 
            className="reveal max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
            style={{ transitionDelay: "0.3s" }}
          >
            CRANA uses advanced ESP-based purification principles to capture 
            airborne particles efficiently through engineered charging and 
            collection stages.
          </p>
        </div>

        {/* Technology grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="reveal group relative p-8 lg:p-10 rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-border/50 bg-card/50 mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-light mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>

                {/* Decorative line */}
                <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="reveal mt-20 flex items-center justify-center gap-4" style={{ transitionDelay: "0.8s" }}>
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-border" />
          <div className="w-3 h-3 rounded-full border border-primary/50 animate-pulse-glow" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  )
}
