"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/AkashPradhan7", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/akash-pradhan7/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/akashcrazy77/", label: "Instagram" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact2akashpradhan@gmail.com", label: "Email" },
  ]

  return (
    <footer className="py-4 border-t"> {/* height kam karne ke liye py-8 → py-4 */}
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Text center me */}
          <p className="text-sm text-muted-foreground w-full text-center">
            &copy; {new Date().getFullYear()} Akash Pradhan. All rights reserved.
          </p>

          {/* Social icons right side */}
          <div className="flex items-center space-x-4 ml-auto">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                aria-label={link.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
