"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const particleCount = 30
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            bottom: `-5%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `particle-float ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Ambient glow lines */}
      <div 
        className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-glow-line"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-glow-line"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-glow-line"
        style={{ animationDelay: '4s' }}
      />
    </div>
  )
}
