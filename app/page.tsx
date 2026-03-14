"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IntroAnimation } from "@/components/crana/intro-animation"
import { Navigation } from "@/components/crana/navigation"
import { Particles } from "@/components/crana/particles"
import { HeroSection } from "@/components/crana/hero-section"
import { AboutSection } from "@/components/crana/about-section"
import { TechnologySection } from "@/components/crana/technology-section"
import { IntelligenceSection } from "@/components/crana/intelligence-section"
import { LaunchingSection } from "@/components/crana/launching-section"
import { ContactSection } from "@/components/crana/contact-section"
import { Footer } from "@/components/crana/footer"

export default function CranaPage() {
  const [showIntro, setShowIntro] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
    // Small delay before showing content for smooth transition
    setTimeout(() => setContentVisible(true), 100)
  }, [])

  return (
    <>
      {/* Cinematic intro animation - only renders once */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      
      {/* Main content - reveals after intro */}
      <motion.main 
        className="relative min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Ambient particles and glow lines */}
        <Particles />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Page sections */}
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <IntelligenceSection />
        <LaunchingSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </>
  )
}
