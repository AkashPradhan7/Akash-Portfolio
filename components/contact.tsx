"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, Phone, MessageCircle, Inbox } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white overflow-hidden"
    >
      {/* Floating Contact Icons */}
      <motion.div
        className="absolute top-16 left-10 text-purple-400/20"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <Mail size={36} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-12 text-pink-400/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      >
        <Phone size={40} />
      </motion.div>

      {/* <motion.div
        className="absolute bottom-16 left-1/4 text-purple-300/20"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <MessageCircle size={34} />
      </motion.div> */}

      <motion.div
        className="absolute bottom-24 right-1/3 text-pink-300/20"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <Inbox size={34} />
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-zinc-800/40 backdrop-blur-lg border border-zinc-700 rounded-xl p-6 md:p-8 shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks! I’ll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form action="https://formsubmit.co/contact2akashpradhan@gmail.com" method="POST" onSubmit={handleSubmit}>
                <motion.div variants={itemVariants} className="space-y-4 mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-zinc-900 text-white border-zinc-700 focus:ring-purple-500"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4 mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="bg-zinc-900 text-white border-zinc-700 focus:ring-purple-500"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4 mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-zinc-900 text-white border-zinc-700 focus:ring-purple-500"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                    </span>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" />
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
