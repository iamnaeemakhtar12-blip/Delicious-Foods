"use client"

import * as React from "react"
import { motion, useTransform, MotionValue, useMotionValue, useReducedMotion } from "framer-motion"
import Image from "next/image"

interface FloatingFoodAssetProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  initialPosition: { x: string | number; y: string | number }
  floatOffset?: number
  floatDuration?: number
  parallaxValueX?: MotionValue<number>
  parallaxValueY?: MotionValue<number>
  parallaxMultiplier?: number
  rotation?: number
  zIndex?: number
  blur?: boolean
  priority?: boolean
}

export function FloatingFoodAsset({
  src,
  alt,
  width,
  height,
  className = "",
  initialPosition,
  floatOffset = 10,
  floatDuration = 4,
  parallaxValueX,
  parallaxValueY,
  parallaxMultiplier = 0,
  rotation = 0,
  zIndex = 10,
  blur = false,
  priority = false,
}: FloatingFoodAssetProps) {
  // If parallax is provided, we map the generic mouse movement to X and Y shifts
  const shouldReduceMotion = useReducedMotion()
  
  // Create a default motion value
  const defaultMotionValue = useMotionValue(0)
  
  const parallaxX = useTransform(
    parallaxValueX || defaultMotionValue,
    [-0.5, 0.5], // Normalized viewport coordinates
    [-20 * parallaxMultiplier, 20 * parallaxMultiplier]
  )
  const parallaxY = useTransform(
    parallaxValueY || defaultMotionValue,
    [-0.5, 0.5],
    [-20 * parallaxMultiplier, 20 * parallaxMultiplier]
  )

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        left: initialPosition.x,
        top: initialPosition.y,
        zIndex,
        x: (parallaxValueX && !shouldReduceMotion) ? parallaxX : 0,
        y: (parallaxValueY && !shouldReduceMotion) ? parallaxY : 0,
        rotate: rotation,
        filter: blur ? "blur(4px)" : "none",
        width,
        height,
        willChange: "transform"
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 0.8, delay: 0.2 },
        scale: { type: "spring", stiffness: 50, damping: 15, delay: 0.2 },
      }}
    >
      <motion.div
        animate={{ y: shouldReduceMotion ? 0 : [0, -floatOffset, 0] }}
        transition={{
          repeat: Infinity,
          duration: floatDuration,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain drop-shadow-2xl"
          sizes={`${width}px`}
          priority={priority}
        />
      </motion.div>
    </motion.div>
  )
}
