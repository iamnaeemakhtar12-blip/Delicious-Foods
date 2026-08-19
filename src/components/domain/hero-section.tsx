"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { restaurant } from "@/content/restaurant"
import { Button } from "@/components/ui/button"
import { HeroFoodComposition } from "./hero-food-composition"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { stiffness: 50, damping: 15 } }
  }

  return (
    <section className="relative bg-[var(--color-brand-deep)] text-white overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[var(--color-brand-primary)] opacity-20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[var(--color-brand-secondary)] opacity-10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            className="max-w-2xl space-y-6 pt-8 md:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[var(--color-brand-secondary)] text-sm font-bold tracking-wide uppercase shadow-lg">
                Wah Cantt's Favorite
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-[family-name:var(--font-display)] leading-[1.05] tracking-tight"
            >
              Delicious <br />
              <span className="text-[var(--color-brand-secondary)] drop-shadow-md">Foods</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 max-w-lg font-medium leading-relaxed"
            >
              {restaurant.description?.en || "Whatever you're craving, we've got it."} From our signature Zinger to our special Chicken Pulao.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-6 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full font-bold text-lg px-8 bg-[var(--color-brand-secondary)] text-[var(--color-text-on-yellow)] hover:bg-[var(--color-brand-secondary-hover)] shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all border-none">
                <a href="#menu">View Menu</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-bold text-lg px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <a href={`tel:${restaurant.phone.e164}`}>Order Now</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Premium Hero Image Layout */}
          <motion.div
            className="relative w-full flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ stiffness: 40, damping: 20, delay: 0.3 }}
          >
            <HeroFoodComposition />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
