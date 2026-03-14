"use client"

import { useEffect, useRef } from "react"

export function AboutSection() {
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
      id="about"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Visual element */}
          <div className="reveal relative order-2 lg:order-1" style={{ transitionDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-border/30 animate-pulse-glow" />
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              
              {/* Inner content */}
              <div className="absolute inset-16 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-light text-primary mb-2">C</div>
                  <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">CRANA</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-2 h-2 rounded-full bg-primary animate-float" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-2 h-2 rounded-full bg-accent animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-2 h-2 rounded-full bg-primary/50 animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-2 h-2 rounded-full bg-accent/50 animate-float" style={{ animationDelay: "3s" }} />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="order-1 lg:order-2">
            <div 
              className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-card/30 mb-6"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                About Us
              </span>
            </div>

            <h2 
              className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
              style={{ transitionDelay: "0.2s" }}
            >
              Built on Engineering.{" "}
              <span className="text-primary">Designed for Better Living.</span>
            </h2>

            <div className="space-y-6">
              <p 
                className="reveal text-lg text-muted-foreground leading-relaxed"
                style={{ transitionDelay: "0.3s" }}
              >
                CRANA is focused on developing premium air purification technology 
                that combines strong air cleaning performance, durable system design, 
                and modern aesthetic refinement.
              </p>

              <p 
                className="reveal text-lg text-muted-foreground leading-relaxed"
                style={{ transitionDelay: "0.4s" }}
              >
                Our mission is to create cleaner, healthier, and more intelligent 
                indoor environments through advanced purification engineering and 
                thoughtful product innovation.
              </p>

              <p 
                className="reveal text-lg text-muted-foreground leading-relaxed"
                style={{ transitionDelay: "0.5s" }}
              >
                Every CRANA system is designed with a vision of powerful performance, 
                low-noise operation, practical usability, and premium visual presence.
              </p>
            </div>

            {/* Stats */}
            <div 
              className="reveal grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/30"
              style={{ transitionDelay: "0.6s" }}
            >
              <div>
                <div className="text-3xl font-display text-primary mb-1">ESP</div>
                <div className="text-xs tracking-wider uppercase text-muted-foreground">Technology</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary mb-1">99%</div>
                <div className="text-xs tracking-wider uppercase text-muted-foreground">Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary mb-1">0dB</div>
                <div className="text-xs tracking-wider uppercase text-muted-foreground">Near Silent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
