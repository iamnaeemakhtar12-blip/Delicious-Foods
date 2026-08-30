"use client"

import { motion } from "framer-motion"
import { deals } from "@/content/deals"
import { DealCard } from "@/components/domain/deal-card"
import { Tag } from "lucide-react"

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-brand-primary)]"
          >
            <Tag className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-display)] mb-4"
          >
            Exclusive <span className="text-[var(--color-brand-primary)]">Deals & Offers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-text-secondary)] text-lg md:text-xl"
          >
            Unbeatable value for money. Grab these limited-time combos for your family and friends.
          </motion.p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <DealCard deal={deal} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
