"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { FloatingFoodAsset } from "./floating-food-asset"

export function HeroFoodComposition() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Motion values for normalized mouse position (-0.5 to 0.5)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth the mouse values for parallax (tighter spring for less lag)
  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 30, mass: 0.8 })
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 30, mass: 0.8 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Only apply on larger screens where it makes sense
    if (window.innerWidth < 1024) return

    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window

    // Normalize values between -0.5 and 0.5
    const x = (clientX / innerWidth) - 0.5
    const y = (clientY / innerHeight) - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[450px] lg:h-[600px] flex justify-center items-center pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background glow layer */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[80%] h-[80%] bg-[var(--color-brand-secondary)] rounded-full blur-[100px] opacity-20" />
      </motion.div>

      {/* Main Pizza */}
      <FloatingFoodAsset
        src="/images/hero/delicious-foods-pizza-hero.png"
        alt="Delicious Premium Pakistani Chicken Tikka Pizza"
        width={550}
        height={550}
        initialPosition={{ x: "50%", y: "50%" }}
        className="-translate-x-1/2 -translate-y-1/2" // center it
        floatOffset={8}
        floatDuration={6}
        parallaxValueX={smoothX}
        parallaxValueY={smoothY}
        parallaxMultiplier={1.5}
        zIndex={20}
        priority={true}
      />

      {/* Background/Far elements (Low parallax, smaller) */}
      <FloatingFoodAsset
        src="/images/hero/delicious-foods-olive.png"
        alt="Olive"
        width={40}
        height={40}
        initialPosition={{ x: "15%", y: "20%" }}
        floatOffset={15}
        floatDuration={4.5}
        parallaxValueX={smoothX}
        parallaxValueY={smoothY}
        parallaxMultiplier={0.5}
        zIndex={10}
        blur={true}
        rotation={15}
      />
      
      <FloatingFoodAsset
        src="/images/hero/delicious-foods-capsicum.png"
        alt="Capsicum"
        width={80}
        height={80}
        initialPosition={{ x: "75%", y: "15%" }}
        floatOffset={12}
        floatDuration={5}
        parallaxValueX={smoothX}
        parallaxValueY={smoothY}
        parallaxMultiplier={0.8}
        zIndex={10}
        blur={true}
        rotation={-20}
      />

      {/* Midground elements (Medium parallax) */}
      <FloatingFoodAsset
        src="/images/hero/delicious-foods-chicken-tikka.png"
        alt="Chicken Tikka Piece"
        width={100}
        height={100}
        initialPosition={{ x: "85%", y: "60%" }}
        floatOffset={10}
        floatDuration={5.5}
        parallaxValueX={smoothX}
        parallaxValueY={smoothY}
        parallaxMultiplier={1.2}
        zIndex={25}
        rotation={10}
      />
      
      <FloatingFoodAsset
        src="/images/hero/delicious-foods-cheese-strand.png"
        alt="Cheese Pull"
        width={120}
        height={120}
        initialPosition={{ x: "10%", y: "55%" }}
        floatOffset={8}
        floatDuration={7}
        parallaxValueX={smoothX}
        parallaxValueY={smoothY}
        parallaxMultiplier={1.2}
        zIndex={25}
        rotation={-15}
      />

      {/* Foreground elements (High parallax, large/fast) */}
      <FloatingFoodAsset
        src="/images/hero/delicious-foods-capsicum.png"
        alt="Capsicum Foreground"
        width={120}
        height={120}
        initialPosition={{ x: "70%", y: "85%" }}
        floatOffset={20}
        floatDuration={4}
        parallaxValueX={smoothX}
        parallaxValueY={smoothY}
        parallaxMultiplier={2.5}
        zIndex={30}
        rotation={45}
        className="hidden sm:block"
      />
      
      <FloatingFoodAsset
        src="/images/hero/delicious-foods-chicken-tikka.png"
        alt="Chicken Tikka Foreground"
        width={140}
        height={140}
        initialPosition={{ x: "5%", y: "80%" }}
        floatOffset={18}
        floatDuration={4.8}
        parallaxValueX={smoothX}
        parallaxValueY={smoothY}
        parallaxMultiplier={2.8}
        zIndex={30}
        rotation={-30}
        className="hidden md:block"
      />
    </div>
  )
}
