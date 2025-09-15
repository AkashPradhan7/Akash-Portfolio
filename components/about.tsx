"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code, Cloud, Cpu, Server } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // ✅ Client-side only rendering for animations
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900/20 to-purple-900/20 overflow-hidden"
    >
      {/* ✅ Floating tech icons */}
      {mounted && (
        <>
          <motion.div
            className="absolute top-10 left-10 text-purple-400/30"
            animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <Code size={32} />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-10 text-purple-300/30"
            animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
          >
            <Cloud size={32} />
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/3 text-purple-400/20"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Cpu size={28} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-1/4 text-purple-300/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <Server size={28} />
          </motion.div>

          {/* ✨ Floating sparkles/stars */}
          {[...Array(10)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-400/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </>
      )}

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* ✅ Original Content (unchanged) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              About Me
            </h2>
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with over 2 years of
              experience building modern web applications. I specialize in 
              React.js, Next JS, Tailwind CSS, Javascript , Node.js, and cloud technologies.
            </p>
            <p className="text-muted-foreground">
              I'm constantly exploring new tools, frameworks, and trends — not
              just to stay current, but because I genuinely enjoy the process of
              learning and evolving as a developer. Tech excites me, whether
              it’s a breakthrough in AI, a slick new JavaScript library, or just
              finding a more elegant way to write code. 
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking, reading sci-fi
              novels, or experimenting with new technologies or using new AI tools.
            </p>
          </motion.div>

          {/* Profile Image with Tilt */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="16px"
              className="w-full max-w-md transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl p-1 border border-purple-500/20">
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
  );
}
