"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with over 5 years of experience building modern web applications. I
              specialize in React.js, Node.js, and cloud technologies.
            </p>
            <p className="text-muted-foreground">
              My journey in web development started when I built my first website at the age of 16. Since then, I've
              worked with startups and established companies to create innovative digital solutions.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new
              technologies.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="12px"
              className="w-full max-w-md"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg p-1 backdrop-blur-sm border border-border/50">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/akash.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
