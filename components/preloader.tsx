"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          {/* Logo with pulse */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 relative"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative w-24 h-24"
            >
              <Image src="/babu.png" alt="babu" width={100} height={100} className="rounded-full"/>
              {/* Sparkles */}
              <motion.div
                animate={{ x: [-5, 5, -5], y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full"
              />
              <motion.div
                animate={{ x: [5, -5, 5], y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400 rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Gradient Loading Bar */}
          <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
              className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
