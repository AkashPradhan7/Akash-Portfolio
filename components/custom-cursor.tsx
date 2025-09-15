"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      setTrailPositions((prev) => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }]
        if (newPositions.length > 5) {
          return newPositions.slice(newPositions.length - 5)
        }
        return newPositions
      })

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
            animate={{
              x: position.x - 16,
              y: position.y - 16,
              scale: isPointer ? 1.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            style={{ backgroundColor: "white" }}
          />

          {/* Cursor trail */}
          {trailPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-40 bg-white mix-blend-difference"
              initial={{ opacity: 0.7, scale: 0.7 }}
              animate={{
                x: pos.x - 8,
                y: pos.y - 8,
                opacity: 0.2 - i * 0.05,
                scale: 0.7 - i * 0.1,
              }}
              exit={{ opacity: 0 }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  )
}
