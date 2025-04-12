"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Code, Server, Database, Layers, Palette, LineChart, Cloud, Smartphone } from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    icon: <Code className="h-8 w-8" />,
    description: "React.js, Next.js, Vue.js",
  },
  {
    name: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    description: "Node.js, Express, NestJS",
  },
  {
    name: "Database",
    icon: <Database className="h-8 w-8" />,
    description: "MongoDB, PostgreSQL, MySQL",
  },
  {
    name: "UI/UX Design",
    icon: <Palette className="h-8 w-8" />,
    description: "Figma, Adobe XD, Tailwind CSS",
  },
  {
    name: "DevOps",
    icon: <Cloud className="h-8 w-8" />,
    description: "Docker, AWS, CI/CD",
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="h-8 w-8" />,
    description: "React Native, Flutter",
  },
  {
    name: "Architecture",
    icon: <Layers className="h-8 w-8" />,
    description: "Microservices, Serverless",
  },
  {
    name: "Data Visualization",
    icon: <LineChart className="h-8 w-8" />,
    description: "D3.js, Chart.js, Three.js",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
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
                <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
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
