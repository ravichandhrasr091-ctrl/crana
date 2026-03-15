"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

// Word-by-word animation component
function AnimatedWords({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
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
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: delay + i * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
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
      <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
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

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text */}
          <motion.div className="text-center lg:text-left" style={{ y: y2, opacity }}>
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

            {/* Main heading */}
            <div className="mb-6">
              <motion.div
                className="overflow-hidden mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
                  <AnimatedWords text="Premium Air," delay={0.5} staggerDelay={0.1} />
                </h1>
              </motion.div>

              <motion.div
                className="overflow-hidden mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-primary glow-text">
                  <AnimatedWords text="Launching Soon" delay={0.8} staggerDelay={0.1} />
                </h1>
              </motion.div>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground/70">
                  <AnimatedWords
                    text="Powered by Advanced ESP Technology"
                    delay={1.1}
                    staggerDelay={0.06}
                  />
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

            {/* Description */}
            <div className="space-y-4 mb-10">
              <motion.p
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <AnimatedWords
                  text="CRANA is preparing to launch a premium air purifier designed with advanced engineering, elegant aesthetics, and next-generation purification intelligence."
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
                  text="Built around advanced ESP collector plate technology, CRANA is engineered to capture ultra-fine pollutants while delivering a powerful, modern air care experience."
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
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#technology")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                >
                  Explore Technology
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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

          {/* Right column - Real Air Purifier Image */}
          <motion.div
            className="flex items-center justify-center"
            style={{ opacity }}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[280px] h-[420px] md:w-[360px] md:h-[540px]">
              {/* Glow behind product */}
              <div className="absolute inset-0 rounded-[40px] bg-primary/10 blur-[80px]" />

              {/* Glass premium frame */}
              <div className="relative w-full h-full rounded-[36px] border border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                <Image
                  src="/airpurifier-hero.png"
                  alt="CRANA Air Purifier"
                  fill
                  priority
                  className="object-contain p-4"
                />
              </div>
            </div>
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
