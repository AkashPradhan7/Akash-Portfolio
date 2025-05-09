"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Online Salon Appointment System",
    description:
      "This is a website designed to streamline the process of booking appointments at a salon or barbershop. The system allows customers to view available time slots, select services, and book appointments with their preferred barber or stylist.",
    image: "/urban-fades.png",
    tags: ["React.js", "Next.js","TypeScript", "Tailwind", "Email js" , "Framer Motion"],
    liveLink: "https://urban-fades.vercel.app/",
    githubLink: "https://github.com/AkashPradhan7/Urban-Fades",
  },
  {
    id: 2,
    title: "Amplify ( Music Website )",
    description: "Landing Page with featured artists, trending playlists, buy course features.",
    image: "/amplify.png",
    tags: ["React.js", "Next.js", "TypeScript" ,"Tailwind"],
    liveLink: "https://music-amplify-tmxs.vercel.app/",
    githubLink: "https://github.com/AkashPradhan7/my-music",
  },
  {
    id: 3,
    title: "Sky GPT",
    description:
      "Sky-GPT is a sleek ChatGPT clone built with modern web technologies. It offers real-time conversational AI with a clean, responsive UI, powered by advanced language models for seamless chatting, creative writing, coding help, and more.",
    image: "/skygpt.png",
    tags: ["Rect.js","Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveLink: "https://sky-gpt.vercel.app/",
    githubLink: "https://github.com/AkashPradhan7/Sky-GPT",
  },
  {
    id: 4,
    title: "Coming Soon",
    description: "---------------------",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Python", "Flask", "OpenAI"],
    liveLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

  const filteredProjects = filter ? projects.filter((project) => project.tags.includes(filter)) : projects

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
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are some of my recent projects. Each one was built to solve a specific problem and showcase different
            skills.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(null)}
              className="rounded-full"
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={1500} className="h-full">
                  <div className="h-full overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
