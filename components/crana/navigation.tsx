"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Coming Soon", href: "#launching" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Find active section
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-light tracking-[0.3em] text-foreground hover:text-primary transition-colors duration-300"
          >
            CRANA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm tracking-wider uppercase transition-all duration-300 relative py-2",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <MobileMenu activeSection={activeSection} onNavClick={handleNavClick} />
        </div>
      </nav>
    </header>
  )
}

function MobileMenu({ 
  activeSection, 
  onNavClick 
}: { 
  activeSection: string
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground"
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col gap-1.5">
          <span className={cn(
            "block h-px bg-current transition-all duration-300",
            isOpen && "rotate-45 translate-y-2"
          )} />
          <span className={cn(
            "block h-px bg-current transition-all duration-300",
            isOpen && "opacity-0"
          )} />
          <span className={cn(
            "block h-px bg-current transition-all duration-300",
            isOpen && "-rotate-45 -translate-y-2"
          )} />
        </div>
      </button>

      {/* Mobile menu overlay */}
      <div className={cn(
        "fixed inset-0 top-20 bg-background/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              onNavClick(e, item.href)
              setIsOpen(false)
            }}
            className={cn(
              "text-xl tracking-wider uppercase transition-colors duration-300",
              activeSection === item.href.slice(1)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
