"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Code, Server, Layers, Palette, Cloud, Cpu } from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    icon: <Code className="h-8 w-8" />,
    description: "React.js, Next.js, Vue.js",
  },
  {
    name: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    description: "Node.js, Express",
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-8 w-8" />,
    description: "Figma, Adobe XD, Tailwind CSS",
  },
  {
    name: "Architecture",
    icon: <Layers className="h-8 w-8" />,
    description: "Microservices, Serverless",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-gradient-to-b from-purple-900/10 to-gray-900/20 overflow-hidden">
      {/* Floating background icons */}
      {mounted && (
        <>
          <motion.div
            className="absolute top-12 left-10 text-purple-400/20"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <Code size={36} />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-10 text-blue-400/20"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
          >
            <Cloud size={40} />
          </motion.div>
          <motion.div
            className="absolute bottom-16 left-1/4 text-pink-400/20"
            animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Cpu size={32} />
          </motion.div>

          {/* Sparkles */}
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-400/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </>
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a wide range of technologies in the web development world. Here are some of my key skills
            and expertise.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={1500} className="h-full">
                <div className="h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-purple-500/30 transition-shadow duration-300">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
