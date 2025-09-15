"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Code, Cpu, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThreeBackground from "@/components/three-background"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <ThreeBackground />

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-20 left-10 text-purple-500"
        animate={{ y: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Code className="h-10 w-10 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-10 text-pink-400"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Cpu className="h-12 w-12 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-1/3 text-blue-400"
        animate={{ y: [0, 15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Cloud className="h-10 w-10 opacity-40" />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-lg"
          >
            Akash Pradhan
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-purple-400"
          >
            Full Stack Web Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-[600px] text-gray-300"
          >
            Creating beautiful, functional, and performant web experiences with modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="relative overflow-hidden group bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
              onClick={scrollToNext}
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-8 w-8 text-purple-400" />
        </motion.div>
      </motion.div>

      <div ref={scrollRef} className="absolute bottom-0" />
    </section>
  )
}
