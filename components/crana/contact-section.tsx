"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xgvkzjzr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div
              className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-card/30 mb-6"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Get in Touch
              </span>
            </div>

            <h2
              className="reveal font-display text-4xl md:text-5xl font-light leading-tight mb-6"
              style={{ transitionDelay: "0.2s" }}
            >
              Connect with <span className="text-primary">CRANA</span>
            </h2>

            <p
              className="reveal text-lg text-muted-foreground leading-relaxed mb-8"
              style={{ transitionDelay: "0.3s" }}
            >
              For business inquiries, partnerships, dealership interest, or early
              brand updates, connect with our team.
            </p>

            <div
              className="reveal space-y-4"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg border border-border/50 bg-card/30 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>cranatechnologies@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg border border-border/50 bg-card/30 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Karnataka, India</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg border border-border/50 bg-card/30 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+91 7996064494</span>
              </div>
            </div>
          </div>

          <div
            className="reveal"
            style={{ transitionDelay: "0.5s" }}
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light mb-2 text-foreground">Message Sent</h3>
                  <p className="text-muted-foreground">
                    Thanks for contacting CRANA. We will get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New CRANA Website Inquiry" />
                <input type="hidden" name="_replyto" value="cranatechnologies@gmail.com" />

                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="h-14 bg-card/30 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="h-14 bg-card/30 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="bg-card/30 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
