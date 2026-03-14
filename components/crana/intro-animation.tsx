"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Breathing air particles - gentle, organic movement
  const airParticles = useMemo(() => {
    if (!isMounted) return []
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 6,
      opacity: 0.1 + Math.random() * 0.3,
    }))
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => setPhase(5), 5500),
      setTimeout(() => {
        setPhase(6)
        onComplete()
      }, 6500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase < 6 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Breathing gradient background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.03) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Floating air particles - gentle upward drift like clean air */}
          <div className="absolute inset-0 overflow-hidden">
            {airParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-primary"
                style={{
                  left: `${particle.x}%`,
                  width: particle.size,
                  height: particle.size,
                  opacity: particle.opacity,
                }}
                initial={{ y: "120vh", x: 0 }}
                animate={phase >= 1 ? {
                  y: "-20vh",
                  x: [0, 15, -10, 5, 0],
                } : {}}
                transition={{
                  y: { duration: particle.duration, delay: particle.delay, ease: "linear" },
                  x: { duration: particle.duration / 2, delay: particle.delay, repeat: 2, ease: "easeInOut" },
                }}
              />
            ))}
          </div>

          {/* Central breathing orb - expands and contracts like breathing */}
          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={phase >= 1 ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Outer breathing ring */}
            <motion.div
              className="w-[500px] h-[500px] rounded-full border border-primary/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={phase >= 1 ? {
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Middle breathing ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-primary/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={phase >= 1 ? {
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              } : {}}
              transition={{
                duration: 4,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Inner breathing glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)",
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={phase >= 1 ? {
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              } : {}}
              transition={{
                duration: 4,
                delay: 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Center pulse point */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"
              initial={{ scale: 0, opacity: 0 }}
              animate={phase >= 1 ? {
                scale: [1, 1.5, 1],
                opacity: 1,
                boxShadow: [
                  "0 0 20px rgba(34, 211, 238, 0.4)",
                  "0 0 60px rgba(34, 211, 238, 0.8)",
                  "0 0 20px rgba(34, 211, 238, 0.4)"
                ]
              } : {}}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5 }
              }}
            />
          </motion.div>

          {/* Product silhouette preview - appears mid-way */}
          <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, scale: 1, y: 0 } : {}}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Device silhouette */}
            <div className="relative">
              <motion.div
                className="w-32 h-56 rounded-[40px] bg-gradient-to-b from-secondary/80 to-card/80 border border-border/30 backdrop-blur-sm"
                animate={phase >= 3 ? {
                  boxShadow: [
                    "0 0 30px rgba(34, 211, 238, 0.1)",
                    "0 0 60px rgba(34, 211, 238, 0.2)",
                    "0 0 30px rgba(34, 211, 238, 0.1)"
                  ]
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Inner glow circle */}
                <motion.div
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-primary/20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute top-[52px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/50" />

                {/* Vent lines */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-16 space-y-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="h-px bg-border/40"
                      initial={{ scaleX: 0 }}
                      animate={phase >= 3 ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>

                {/* Status bar */}
                <motion.div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary/60"
                  initial={{ scaleX: 0 }}
                  animate={phase >= 3 ? { scaleX: 1 } : {}}
                  transition={{ delay: 1.2, duration: 0.5 }}
                />
              </motion.div>

              {/* Floating particles around device */}
              <motion.div
                className="absolute -top-6 -left-6 w-2 h-2 rounded-full bg-primary/40"
                animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/3 -right-8 w-1.5 h-1.5 rounded-full bg-primary/30"
                animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Text content - overlays the product */}
          <div className="absolute flex flex-col items-center z-20">
            {/* "Breathe" text - appears first */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: phase >= 4 ? 0 : 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-lg md:text-xl tracking-[0.5em] uppercase text-primary/60"
                initial={{ y: 30, opacity: 0 }}
                animate={phase >= 2 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                Breathe
              </motion.p>
            </motion.div>

            {/* Brand name reveal */}
            <motion.div
              className="overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-foreground"
                initial={{ y: 80, opacity: 0 }}
                animate={phase >= 4 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              >
                CRANA
              </motion.h1>
            </motion.div>

            {/* Gradient line separator */}
            <motion.div
              className="mt-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={phase >= 4 ? { width: 200, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Launching Soon tag */}
            <motion.div
              className="mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={phase >= 5 ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={phase >= 5 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm tracking-[0.3em] uppercase text-primary">
                  Launching Soon
                </span>
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-6 text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground/60"
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 5 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Advanced Air Purification
            </motion.p>
          </div>

          {/* Corner frames */}
          {[
            { pos: "top-6 left-6", lines: ["top-0 left-0 w-12 h-px", "top-0 left-0 w-px h-12"] },
            { pos: "top-6 right-6", lines: ["top-0 right-0 w-12 h-px", "top-0 right-0 w-px h-12"] },
            { pos: "bottom-6 left-6", lines: ["bottom-0 left-0 w-12 h-px", "bottom-0 left-0 w-px h-12"] },
            { pos: "bottom-6 right-6", lines: ["bottom-0 right-0 w-12 h-px", "bottom-0 right-0 w-px h-12"] },
          ].map((corner, i) => (
            <motion.div
              key={i}
              className={`absolute ${corner.pos} w-12 h-12`}
              initial={{ opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className={`absolute ${corner.lines[0]} bg-primary/30`} />
              <div className={`absolute ${corner.lines[1]} bg-primary/30`} />
            </motion.div>
          ))}

          {/* Subtle vignette */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
