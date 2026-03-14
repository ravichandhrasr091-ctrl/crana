"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

// Word-by-word animation component
function AnimatedWords({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 0.05 
}: { 
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const words = text.split(" ")
  
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)" 
          } : {}}
          transition={{
            duration: 0.6,
            delay: delay + (i * staggerDelay),
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// Air Purifier Visual Component with ESP Collector Plates and Pre-mesh
function AirPurifierVisual() {
  return (
    <motion.div
      className="relative w-[280px] h-[420px] md:w-[320px] md:h-[480px]"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outer glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[50px] bg-primary/5 blur-[60px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main device body */}
      <motion.div
        className="relative w-full h-full rounded-[50px] bg-gradient-to-b from-secondary/90 to-card/90 border border-border/40 backdrop-blur-sm overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 40px rgba(34, 211, 238, 0.1)",
            "0 0 80px rgba(34, 211, 238, 0.15)",
            "0 0 40px rgba(34, 211, 238, 0.1)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Top sensor ring */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <motion.div
            className="w-20 h-20 rounded-full border-2 border-primary/30"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-2 left-2 w-16 h-16 rounded-full border border-primary/20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/10"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="absolute top-[26px] left-[26px] w-7 h-7 rounded-full bg-primary/30"
            animate={{ 
              boxShadow: [
                "0 0 10px rgba(34, 211, 238, 0.3)",
                "0 0 25px rgba(34, 211, 238, 0.6)",
                "0 0 10px rgba(34, 211, 238, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute top-[30px] left-[30px] w-5 h-5 rounded-full bg-primary/60" />
        </div>

        {/* Pre-mesh filter section - grid of holes */}
        <div className="absolute top-36 left-1/2 -translate-x-1/2 w-[85%]">
          <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground/40 text-center mb-2">
            Pre-Mesh Filter
          </p>
          <div className="grid grid-cols-10 gap-1.5 p-3 rounded-lg bg-background/30 border border-border/20">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-full bg-border/30"
                initial={{ opacity: 0.2 }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  backgroundColor: [
                    "rgba(255,255,255,0.1)",
                    "rgba(34, 211, 238, 0.15)",
                    "rgba(255,255,255,0.1)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: (i % 10) * 0.05 + Math.floor(i / 10) * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* ESP Collector Plates */}
        <div className="absolute top-[240px] left-1/2 -translate-x-1/2 w-[75%]">
          <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground/40 text-center mb-2">
            ESP Collector Plates
          </p>
          <div className="relative h-20 bg-background/20 rounded-lg border border-border/20 overflow-hidden">
            {/* Vertical collector plates */}
            <div className="absolute inset-2 flex gap-1.5">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 h-full rounded-sm bg-gradient-to-b from-primary/20 to-primary/5"
                  initial={{ scaleY: 0.8, opacity: 0.3 }}
                  animate={{ 
                    scaleY: [0.8, 1, 0.8],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.08,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            {/* Electric field lines */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.05) 50%, transparent 100%)"
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Air output vents */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[70%] space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-[3px] rounded-full bg-gradient-to-r from-transparent via-border/50 to-transparent"
              initial={{ scaleX: 0.8, opacity: 0.3 }}
              animate={{ scaleX: 1, opacity: [0.3, 0.6, 0.3] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Status indicator bar */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-primary/70"
          animate={{
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              "0 0 10px rgba(34, 211, 238, 0.3)",
              "0 0 20px rgba(34, 211, 238, 0.5)",
              "0 0 10px rgba(34, 211, 238, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Air flow particles inside device */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{ left: `${20 + (i % 4) * 20}%` }}
            initial={{ top: "70%", opacity: 0 }}
            animate={{
              top: ["70%", "15%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Floating ambient particles around device */}
      {[
        { top: "-10%", left: "-15%", size: 6, delay: 0 },
        { top: "20%", left: "-20%", size: 4, delay: 0.5 },
        { top: "50%", right: "-18%", size: 5, delay: 1 },
        { top: "70%", right: "-15%", size: 3, delay: 1.5 },
        { bottom: "10%", left: "-12%", size: 4, delay: 2 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            top: particle.top,
            left: particle.left,
            right: particle.right,
            bottom: particle.bottom,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-8, 8, -8],
            x: [-5, 5, -5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background gradient orbs */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
          style={{ y: y1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </motion.div>

      {/* Hero content - two column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left column - Text content */}
          <motion.div 
            className="text-center lg:text-left"
            style={{ y: y2, opacity }}
          >
            {/* Launching Soon Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/5 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-xs tracking-[0.2em] uppercase text-primary">
                Launching Soon
              </span>
            </motion.div>

            {/* Main heading - word by word */}
            <div className="mb-6">
              <motion.div 
                className="overflow-hidden mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
                  <AnimatedWords text="Clean Air," delay={0.5} staggerDelay={0.1} />
                </h1>
              </motion.div>

              <motion.div 
                className="overflow-hidden mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-primary glow-text">
                  <AnimatedWords text="Reimagined" delay={0.8} staggerDelay={0.1} />
                </h1>
              </motion.div>

              <motion.div 
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground/70">
                  <AnimatedWords text="Through Advanced Engineering" delay={1.1} staggerDelay={0.06} />
                </h2>
              </motion.div>
            </div>

            {/* Animated divider */}
            <motion.div 
              className="w-32 h-px mx-auto lg:mx-0 mb-8 bg-gradient-to-r from-transparent via-primary to-transparent lg:from-primary lg:via-primary/50 lg:to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Description paragraphs */}
            <div className="space-y-4 mb-10">
              <motion.p 
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <AnimatedWords 
                  text="CRANA is building the next generation of premium air purification." 
                  delay={1.7} 
                  staggerDelay={0.04}
                />
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <AnimatedWords 
                  text="Advanced ESP technology with collector plates that capture particles as small as 0.01 microns." 
                  delay={2} 
                  staggerDelay={0.035}
                />
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#technology")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                >
                  Explore Technology
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#contact")}
                  className="border-border/50 text-foreground hover:bg-card hover:border-primary/50 px-8 py-6 text-sm tracking-wider uppercase transition-all duration-300"
                >
                  Get Notified
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Air Purifier Visual */}
          <motion.div 
            className="flex items-center justify-center"
            style={{ opacity }}
          >
            <AirPurifierVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        style={{ opacity }}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
