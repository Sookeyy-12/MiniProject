"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bike, Zap } from "lucide-react"

export default function HeroAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[300px] md:h-[400px] bg-muted/50 rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground">Loading animation...</span>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-muted/50 rounded-lg overflow-hidden">
      {/* City background */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full h-1/3 bg-muted-foreground/10 flex items-end">
          {/* Buildings */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-muted-foreground/20 w-12 md:w-16 mx-1"
              style={{
                height: `${Math.random() * 80 + 40}px`,
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Road */}
      <div className="absolute bottom-0 w-full h-1/4 bg-muted-foreground/20"></div>

      {/* Bike animation */}
      <motion.div
        className="absolute bottom-10 left-0"
        initial={{ x: -100 }}
        animate={{ x: "calc(100% + 100px)" }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <div className="relative">
          <Bike className="h-12 w-12 md:h-16 md:w-16 text-primary" />
          <motion.div
            className="absolute -top-4 -right-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            <Zap className="h-4 w-4 md:h-6 md:w-6 text-primary" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scooter animation (going the other way) */}
      <motion.div
        className="absolute bottom-10 right-0"
        initial={{ x: "calc(100% + 100px)" }}
        animate={{ x: -100 }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
          delay: 2,
        }}
      >
        <div className="relative transform scale-x-[-1]">
          <Bike className="h-10 w-10 md:h-14 md:w-14 text-secondary" />
          <motion.div
            className="absolute -top-4 -right-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            <Zap className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
          </motion.div>
        </div>
      </motion.div>

      {/* Sun/Moon */}
      <motion.div
        className="absolute top-8 right-8 bg-primary rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ width: "40px", height: "40px" }}
      />

      {/* Clouds */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-16 bg-background rounded-full opacity-70"
          style={{
            width: `${Math.random() * 60 + 40}px`,
            height: "20px",
            left: `${i * 30 + 10}%`,
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: i * 0.3 }}
        />
      ))}
    </div>
  )
}

